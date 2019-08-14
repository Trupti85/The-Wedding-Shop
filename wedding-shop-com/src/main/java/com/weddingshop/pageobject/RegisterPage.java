package com.weddingshop.pageobject;
/*
 * Created By Trupti Patel
 */

import com.weddingshop.utility.Util;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

import java.nio.file.WatchService;

public class RegisterPage extends Util {

    private static final Logger log = LogManager.getLogger(RegisterPage.class.getName());

    @FindBy(id = "btn-nav-create-a-list")
    WebElement _registerLink;

    @FindBy(xpath = "//h2[contains(text(),'Create a List')]")
     WebElement _createListText;


    @FindBy(id = "title")
    WebElement _title;

    @FindBy(id = "name")
    WebElement _name;

    @FindBy(id = "surname")
    WebElement _lastName;

    @FindBy(id = "referrerId")
    WebElement _referal;

    @FindBy(id = "partnerTitle")
    WebElement _partnerTitle;

    @FindBy(id = "partnerName")
    WebElement _partnerName;

    @FindBy(id = "partnerSurname")
    WebElement _partnerLastName;

    @FindBy(id = "find-address")
    WebElement _country;

    @FindBy(id = "search-postcode")
    WebElement _postCode;

    @FindBy(xpath = "//li[@id='item-address-result-34']")
    WebElement _selectAddress;

    @FindBy(id = "contactNumber")
    WebElement _phoneNumber;

    @FindBy(id = "occasionDate")
    WebElement _date;

    @FindBy(xpath = "//button[contains(@class,'DayPickerNavigation_button DayPickerNavigation_button_1 DayPickerNavigation_button__default DayPickerNavigation_button__default_2 DayPickerNavigation_button__horizontal DayPickerNavigation_button__horizontal_3 DayPickerNavigation_rightButton__horizontal DayPickerNavigation_rightButton__horizontal_4')]")
     WebElement _forwarBtn;

    @FindBy(xpath = "//td[contains(@class,'CalendarDay CalendarDay_1 CalendarDay__default CalendarDay__default_2 CalendarDay__lastDayOfWeek CalendarDay__lastDayOfWeek_3')][contains(text(),'29')]")
    WebElement _dateOfOcassion;

    @FindBy(id = "numberOfGuests")
    WebElement _noOfGuest;

    @FindBy(id = "loginEmail")
    WebElement _email;

    @FindBy(id = "loginPassword")
    WebElement _password;

    @FindBy(name = "passwordConfirm")
    WebElement _confirmPassword;

    @FindBy(id= "btn-register")
    WebElement _submitBtn;

    public void clickOnRegisterLink() {
        log.info("Click on registerlink");
        clickonElement(_registerLink);
    }

    public boolean verifyCreateAListText() {
        if (_createListText.isDisplayed()) {
            log.info("Verify text Create a List" );
            return "CREATE A LIST".equals(_createListText.getText());
        } else {
            log.info("Verify that Create a List not Displayed");
            return false;
        }
    }

    public void sendTextToTitle(String title) {
        log.info("Send text Title");
        sendTextToElement(_title, title);
    }

    public void sendTextToFirstname(String firstname) {
        log.info("Send text to First Name");
        sendTextToElement(_name, firstname);
    }

    public void sendTextToLastName(String lastname) {
        log.info("send text to Last Name");
        sendTextToElement(_lastName, lastname);
    }

    public void clickonreferal() {
        log.info("click on referal");
        clickonElement(_referal);
    }

    public void selecttextfromdopdownreferal(String refral) {
        log.info("Select text from dropdown");
        selectVisibleTextFromDropDownMenu(_referal, refral);
    }

    public void sendTextToPartnerTitle(String partnerTitle) {
        log.info("Send text to Partner Title");
        sendTextToElement(_partnerTitle, partnerTitle);
    }

    public void sendTextToPartnerFirstName(String partnerName) {
        log.info("Send text to Partner First Name");
        sendTextToElement(_partnerName, partnerName);
    }

    public void sendTextToPartnerLastName(String partnerLastName) {
        log.info(" Send text to Partner Last Name");
        sendTextToElement(_partnerLastName, partnerLastName);
    }

    public void selectTextFromDropDownListcountry(String country) {
        log.info("Select text from Dropdown list for Address");
        selectByValueFromDropDownMenu(_country,country);
    }

    public void sendPostcodetoPostcodebar(String postcode) {
        log.info("Send text to postcode and select visible text");
        sendTextToElement(_postCode, postcode);
    }

    public void selecteAddressFromDropDownList() {
        log.info("select full address from list");
        mouseHoverToElement(_selectAddress);
        clickonElement(_selectAddress);
    }
    public void sendContactNumber(String phoneNumber){
        log.info("Enter Contact Number");
        sendTextToElement(_phoneNumber,phoneNumber);
    }
    public void clickOnOccasionDate(){
        log.info("Click on Date");
        clickonElement(_date);
    }
    public void clickOnForwardBtn(){
        log.info("Click on Forward Button");
        clickonElement(_forwarBtn);
    }
    public void selecDateFromCalender(){
        log.info("Select Date form Calender");
        clickonElement(_dateOfOcassion);
    }
    public void sendTextToNumberOfGuest(String noOfGuest){
        log.info("Send text to number of guest field ");
        sendTextToElement(_noOfGuest,noOfGuest);
    }

    public void sendTextToEmailField(String email){
        log.info(" Send text to Email Field");
        sendTextToElement(_email,email);
    }

    public void sendTextToPasswordField(String password){
        log.info("Send text to Password Field ");
        sendTextToElement(_password,password);
    }
    public void sendTextToConfirmPassword(String confirmPass){
        log.info("Send text to Confirm Password Field");
        sendTextToElement(_confirmPassword,confirmPass);
    }
    public void clickOnSubmitButton(){
        log.info("Click on Submit Button");
        clickonElement(_submitBtn);
    }



}
