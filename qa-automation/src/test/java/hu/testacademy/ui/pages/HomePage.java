package hu.testacademy.ui.pages;

import static com.codeborne.selenide.Selenide.*;
import com.codeborne.selenide.SelenideElement;
import com.codeborne.selenide.ClickOptions;

public class HomePage {
    
    public SelenideElement languageEnBtn = $("#btn-en");
    public SelenideElement languageHuBtn = $("#btn-hu");
    public SelenideElement heroTitle = $("#hero-title");
    public SelenideElement enrollManualBtn = $("[data-testid='enroll-manual-btn']");
    public SelenideElement formNameInput = $("#form-name");
    public SelenideElement submitBtn = $("[data-testid='submit-btn']");

    public HomePage openLanguage(String lang) {
        if ("en".equalsIgnoreCase(lang)) {
            languageEnBtn.click();
        } else {
            languageHuBtn.click();
        }
        return this;
    }

    public void clickEnrollManual() {
        enrollManualBtn.click(ClickOptions.usingJavaScript());
    }

    public void fillApplicationForm(String name) {
        formNameInput.setValue(name);
    }
}
