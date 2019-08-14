package com.weddingshop.pageobject;
/*
 * Created By Trupti Patel
 */

import com.weddingshop.utility.Util;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;


public class LogInPage extends Util {

    private static final Logger log = LogManager.getLogger(LogInPage.class.getName());

    @FindBy(id = "btn-nav-login")
    WebElement _logInBtn;

    @FindBy (xpath = "//h2[contains(text(),'Login')]")
    WebElement _logInText;

    @FindBy(id ="userName")
    WebElement _userName;

    @FindBy(id ="password")
    WebElement _passWord;

    @FindBy (id ="btn-login")
    WebElement _submitInBtn;

    public void clickOnLogInBar(){
        log.info("Click on Log In Bar");
        clickonElement(_logInBtn);
    }
    public void enterTextToEmailField(String email){
        log.info("Enter text to Email field");
        sendTextToElement(_userName,email);
    }
    public  void enterTextToPasswordField(String passWord){
        log.info("Enter text to Password field");
        sendTextToElement(_passWord,passWord);
    }
    public void clickOnSubmitButton(){
        log.info("Click on Submit Button");
        clickonElement(_submitInBtn);
    }
    public String getLogInText(){
        log.info("Get Text LogIn");
        return getTextFromElement(_logInText);
    }
    public boolean verifyLogInText(){
        if (getLogInText().equals("LOGIN")) {
            return true;
        } else{
            return false;
        }
    }


}
