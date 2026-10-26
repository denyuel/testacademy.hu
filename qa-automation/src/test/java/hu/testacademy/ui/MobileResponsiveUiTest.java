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

    @Test
    @DisplayName("Verify desktop calculator summary sticks during scroll")
    public void verifyDesktopCalculatorSummarySticks() {
        Configuration.browserSize = "1280x900";
        open(LOCAL_HTML_URL);
        com.codeborne.selenide.WebDriverRunner.getWebDriver().manage().window().setSize(new org.openqa.selenium.Dimension(1280, 900));

        // Scroll directly to the calculator course packages
        executeJavaScript("document.getElementById('calc-base-courses').scrollIntoView({ behavior: 'instant', block: 'start' });");
        Number topScrolled = executeJavaScript("return document.querySelector('.lg\\\\:sticky').getBoundingClientRect().top;");

        assertThat(topScrolled.doubleValue())
            .as("Calculator summary must stick near top-24 (approx 96px) when scrolled down the packages")
            .isBetween(80.0, 120.0);
    }

    @Test
    @DisplayName("Verify calculator bilingual switching to English")
    public void verifyCalculatorEnglishLanguageSwitch() {
        Configuration.browserSize = "1280x900";
        open(LOCAL_HTML_URL);
        com.codeborne.selenide.WebDriverRunner.getWebDriver().manage().window().setSize(new org.openqa.selenium.Dimension(1280, 900));

        // Click English switch button
        $("#btn-en").click();

        // Verify English text is visible in course card and Hungarian is hidden
        $("#calc-base-courses").shouldHave(com.codeborne.selenide.Condition.text("1-on-1 Vibe Coding & Prompt Fundamentals"));
        $("#calc-base-courses").shouldHave(com.codeborne.selenide.Condition.text("1-on-1 Vibe Coding & Agent Masterclass"));
        $("#calc-base-courses").shouldHave(com.codeborne.selenide.Condition.text("Premium 1-on-1 Career Mentorship"));

        // Verify summary box displays English title
        $("#calc-summary-base").shouldHave(com.codeborne.selenide.Condition.text("1-on-1 Vibe Coding"));
    }

    @Test
    @DisplayName("Verify contact form endpoint, access key and redirect")
    public void verifyContactFormEndpointAndFields() {
        Configuration.browserSize = "1280x900";
        open(LOCAL_HTML_URL);

        $("form[action='https://api.web3forms.com/submit']").shouldBe(com.codeborne.selenide.Condition.exist);
        $("input[name='access_key']").shouldHave(com.codeborne.selenide.Condition.value("87c4fa66-64b6-4431-9c4e-d20da0ff1cef"));
        $("input[name='redirect']").shouldHave(com.codeborne.selenide.Condition.value("https://testacademy.hu/thanks.html"));
        $("a[href*='wa.me']").shouldBe(com.codeborne.selenide.Condition.exist);
    }
}
