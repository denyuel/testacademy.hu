package hu.testacademy.ui;

import com.codeborne.selenide.Configuration;
import hu.testacademy.ui.pages.HomePage;
import org.junit.jupiter.api.BeforeAll;
import org.junit.jupiter.api.Test;
import java.io.File;

import static com.codeborne.selenide.Selenide.*;
import static com.codeborne.selenide.Condition.*;

public class MainWebUiTest {

    private static String LOCAL_HTML_URL;

    @BeforeAll
    public static void setup() {
        File htmlFile = new File("../index.html");
        LOCAL_HTML_URL = htmlFile.toURI().toString();
        
        Configuration.headless = true;
        Configuration.timeout = 4000;
    }

    @Test
    public void testLanguageSwitchingAndFormFill() {
        open(LOCAL_HTML_URL);
        
        HomePage homePage = new HomePage();
        homePage.heroTitle.shouldHave(text("Valódi funkcionális tudás"));
        
        homePage.openLanguage("en");
        homePage.heroTitle.shouldHave(text("Real functional skills"));
        
        homePage.clickEnrollManual();
        homePage.formNameInput.shouldBe(visible);
        homePage.fillApplicationForm("John Doe Test");
        homePage.formNameInput.shouldHave(value("John Doe Test"));
    }
}
