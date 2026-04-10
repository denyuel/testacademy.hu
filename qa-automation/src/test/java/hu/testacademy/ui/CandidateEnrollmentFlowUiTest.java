package hu.testacademy.ui;

import com.codeborne.selenide.Configuration;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.DisplayName;
import org.junit.jupiter.api.Test;
import org.assertj.core.api.SoftAssertions;
import hu.testacademy.ui.pages.HomePage;

import static com.codeborne.selenide.Selenide.open;

@DisplayName("Advanced Multi-Assertion Candidate Enrollment UI Flow")
public class CandidateEnrollmentFlowUiTest {

    @BeforeAll
    public static void setup() {
        Configuration.browser = "chrome";
        Configuration.headless = true;
        Configuration.timeout = 5000;
        Configuration.assertionMode = com.codeborne.selenide.AssertionMode.SOFT;
        // Using an absolute path to the local HTML file for integration stability
        String projectPath = System.getProperty("user.dir").replace("\\qa-automation", "");
        Configuration.baseUrl = "file:///" + projectPath.replace("\\", "/");
    }

    @Test
    @DisplayName("Verify multiple UI components concurrently using Soft Assertions")
    public void executeSoftAssertionEnrollmentSweep() {
        open("/index.html");
        
        HomePage homePage = new HomePage();
        
        // Setup cross-domain soft assertions
        SoftAssertions softly = new SoftAssertions();

        // Standard interaction
        homePage.fillApplicationForm("Jane Doe");

        // UI Soft Asserts (Will collect all failures without stopping execution loop)
        softly.assertThat(homePage.submitBtn.exists())
            .as("Enrollment submission mechanism must be inherently visible")
            .isTrue();

        softly.assertThat(homePage.heroTitle.getText())
            .as("Primary marketing directive must map to expected value")
            .contains("Val");

        softly.assertThat(homePage.languageEnBtn.isDisplayed())
            .as("Language toggles must map to visible quadrant")
            .isTrue();

        // Commit all collected assertions to the reporting engine
        softly.assertAll();
    }
}
