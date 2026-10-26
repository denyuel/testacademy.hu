package hu.testacademy.ui;

import com.codeborne.selenide.Configuration;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.params.ParameterizedTest;
import org.junit.jupiter.params.provider.ValueSource;

import java.io.File;

import static com.codeborne.selenide.Selenide.*;
import static org.assertj.core.api.Assertions.assertThat;

@DisplayName("Mobile & Tablet Viewport Responsive QA Verification")
public class MobileResponsiveUiTest {

    private static String LOCAL_HTML_URL;

    @BeforeAll
    public static void setup() {
        Configuration.browser = "chrome";
        Configuration.headless = true;
        Configuration.timeout = 5000;
        File htmlFile = new File("../index.html");
        LOCAL_HTML_URL = htmlFile.toURI().toString();
    }

    @ParameterizedTest(name = "Testing responsive breakpoint {0}")
    @ValueSource(strings = {"360x740", "375x812", "390x844", "412x915", "768x1024", "1280x800"})
    @DisplayName("Verify no horizontal scroll overflow across all viewports")
    public void verifyNoHorizontalOverflow(String size) {
        Configuration.browserSize = size;
        open(LOCAL_HTML_URL);

        // Check if page width causes horizontal scrolling
        Long scrollWidth = executeJavaScript("return document.documentElement.scrollWidth;");
        Long clientWidth = executeJavaScript("return document.documentElement.clientWidth;");
        
        assertThat(scrollWidth)
            .as("Scroll width (" + scrollWidth + ") should not exceed client width (" + clientWidth + ") on " + size)
            .isLessThanOrEqualTo(clientWidth + 2); // allowance of 2px for subpixel rendering
    }

    @Test
    @DisplayName("Verify badges do not break into multiple lines on mobile 375px")
    public void verifyBadgesDoNotBreakOnMobile() {
        Configuration.browserSize = "375x812";
        open(LOCAL_HTML_URL);

        // Check all badge pill heights. If a badge breaks into 2 lines, its height exceeds 26px.
        Boolean anyBadgeBroken = executeJavaScript(
            "const badges = document.querySelectorAll('.calc-card span.badge-pill, .calc-card span[class*=\"uppercase\"]');" +
            "let broken = false;" +
            "badges.forEach(b => {" +
            "  const h = b.getBoundingClientRect().height;" +
            "  if (h > 28) broken = true;" +
            "});" +
            "return broken;"
        );

        assertThat(anyBadgeBroken)
            .as("No badge inside calculator cards should break into two lines")
            .isFalse();
    }

    @ParameterizedTest(name = "Testing card containment on {0}")
    @ValueSource(strings = {"360x740", "375x812", "390x844", "412x915", "768x1024", "1280x800"})
    @DisplayName("Verify calculator cards do not overflow their parent container")
    public void verifyCardsDoNotOverflowParent(String size) {
        Configuration.browserSize = size;
        open(LOCAL_HTML_URL);

        // Ensure every calc-card is strictly within its parent container bounds
        String overflowError = executeJavaScript(
            "const cards = document.querySelectorAll('.calc-card');" +
            "let error = '';" +
            "cards.forEach((card, idx) => {" +
            "  const parent = card.closest('#calc-base-courses').parentElement;" +
            "  if (parent) {" +
            "    const cRect = card.getBoundingClientRect();" +
            "    const pRect = parent.getBoundingClientRect();" +
            "    if (cRect.right > pRect.right + 1.0) {" +
            "      error += 'Card ' + idx + ' right (' + cRect.right.toFixed(1) + ') exceeds parent right (' + pRect.right.toFixed(1) + '); ';" +
            "    }" +
            "  }" +
            "});" +
            "return error;"
        );

        assertThat(overflowError)
            .as("All calculator cards must stay within parent container boundaries on " + size)
            .isEmpty();
    }
}
