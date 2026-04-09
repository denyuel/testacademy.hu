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
        // 1. Megmondjuk a Java-nak, hogy fizikailag hol található a weboldalad HTML fájlja a merevlemezen.
        File htmlFile = new File("../index.html");
        LOCAL_HTML_URL = htmlFile.toURI().toString();

        // 2. Beállítjuk a Headless ("Láthatatlan") üzemmódot a te kérésednek megfelelően!
        Configuration.headless = true;
        
        // Timeout beállítása, ha lassabb lenne a gép (Max 4 mp-et vár egy elemre)
        Configuration.timeout = 4000;
    }

    @Test
    public void testLanguageSwitchingAndFormFill() {
        // 1. FEJEZET: BÖNGÉSZŐ NYITÁS
        // Ez a parancs nyitja ki a Google Chrome-ot, és behozza az oldaladat.
        open(LOCAL_HTML_URL);

        // 2. FEJEZET: PAGE OBJECT LÉTREHOZÁSA (A kódunk összeismerkedik a weblappal)
        HomePage homePage = new HomePage();

        // 3. FEJEZET: TESZTELÉS / ASSERTIONS (Ahogy a "then" működött az API teszteknél, csak weben)
        // Ellenőrizzük, hogy alapból (magyarul) nyílt-e meg
        homePage.heroTitle.shouldHave(text("Valódi funkcionális tudás"));

        // 4. FEJEZET: AKCIÓK (Gombnyomás)
        // Átváltunk Angol nyelvre
        homePage.openLanguage("en");

        // Ellenőrizzük a böngészőben, hogy "röptiben" átíródtak-e az oldalon a szövegek engedély alapján!
        homePage.heroTitle.shouldHave(text("Real functional skills"));

        // 5. FEJEZET: NAVIGÁCIÓ
        // Rákattint a srác a jelentkezés gombra (le fog scrollozni az oldal aljára a formhoz)
        homePage.clickEnrollManual();

        // 6. FEJEZET: ADATBEVITEL
        // Ellenőrizzük, hogy megjelent-e a szemünk előtt az input mező, majd begépeljük a nevünket!
        homePage.formNameInput.shouldBe(visible);
        homePage.fillApplicationForm("John Doe Test");
        
        // Végül ellenőrizzük, hogy a begépelt szöveg valóban ott van-e a virtuális text dobozban.
        homePage.formNameInput.shouldHave(value("John Doe Test"));
    }
}
