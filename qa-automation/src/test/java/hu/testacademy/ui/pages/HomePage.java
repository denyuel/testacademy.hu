package hu.testacademy.ui.pages;

import static com.codeborne.selenide.Selenide.*;
import com.codeborne.selenide.SelenideElement;
import com.codeborne.selenide.ClickOptions;

/**
 * PAGE OBJECT MODEL (POM) - Főoldal
 * Ebben az osztályban CSAK és KIZÁRÓLAG a weboldal felépítését modellezzük le.
 * Ez a POJO megfelelője a webes UI tesztelésben. Nincs benne tesztelés (mint "assertEquals"),
 * csak tároljuk a gombokat és a rajtuk elvégezhető klikkeléseket.
 */
public class HomePage {
    
    // Webes Elemek azonosítása a robosztus ID-k és data-test attribútumok alapján!
    // A $() a Selenide leghíresebb parancsa: "Keresd meg ezt az elemet az oldalon".
    public SelenideElement languageEnBtn = $("#btn-en");
    public SelenideElement languageHuBtn = $("#btn-hu");
    public SelenideElement heroTitle = $("#hero-title"); // Az általunk most beírt ID
    public SelenideElement enrollManualBtn = $("[data-testid='enroll-manual-btn']"); // Modern, golyóálló megközelítés
    public SelenideElement formNameInput = $("#form-name");
    public SelenideElement submitBtn = $("[data-testid='submit-btn']");

    // "Akciók" / Kényelmi függvények amiket ezen a weblapon egy igazi user megtehet.
    public HomePage openLanguage(String lang) {
        if ("en".equalsIgnoreCase(lang)) {
            languageEnBtn.click();
        } else {
            languageHuBtn.click();
        }
        return this;
    }

    public void clickEnrollManual() {
        // Mivel a dizájnban sok a lebegő animáció és sticky menü ami kitakarhatja a gombot,
        // a profik a "JavaScript Click"-et használják, ami azonnal és 100% pontossággal kattint.
        enrollManualBtn.click(ClickOptions.usingJavaScript());
    }

    public void fillApplicationForm(String name) {
        formNameInput.setValue(name); // Begépeli a nevet
    }
}
