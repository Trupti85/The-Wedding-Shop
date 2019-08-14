package com.weddingshop;
/*
 * Created By Trupti Patel
 */

import com.weddingshop.pageobject.RegisterPage;
import com.weddingshop.utility.Util;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class RegistrationStepdefs {

    String email = null;

    @Given("^I am on Home Page$")
    public void iAmOnHomePage() {
    }

    @When("^I click on Create a List tab$")
    public void iClickOnCreateAListTab() {
        new RegisterPage().clickOnRegisterLink();
        Assert.assertTrue(new RegisterPage().verifyCreateAListText());
    }


    @And("^I enter Title \"([^\"]*)\"$")
    public void iEnterTitle(String title) {
        new RegisterPage().sendTextToTitle(title);

    }

    @And("^I enter First Name \"([^\"]*)\"$")
    public void iEnterFirstName(String firstName) {
        new RegisterPage().sendTextToFirstname(firstName);
    }

    @And("^I enter Last Name \"([^\"]*)\"$")
    public void iEnterLastName(String lastName) {
        new RegisterPage().sendTextToLastName(lastName);
    }

    @And("^I click on referral$")
    public void iClickOnReferral() {
        new RegisterPage().clickonreferal();

    }

    @And("^I select \"([^\"]*)\"$")
    public void iSelect(String referral) {
        new RegisterPage().selecttextfromdopdownreferal(referral);
    }

    @And("^I enter Partner Title \"([^\"]*)\"$")
    public void iEnterPartnerTitle(String partnerTitle) {
        new RegisterPage().sendTextToPartnerTitle(partnerTitle);
    }

    @And("^I enter Partner First Name \"([^\"]*)\"$")
    public void iEnterPartnerFirstName(String partnerFirstName) {
        new RegisterPage().sendTextToPartnerFirstName(partnerFirstName);
    }

    @And("^I enter Partner Last Name \"([^\"]*)\"$")
    public void iEnterPartnerLastName(String partnerLastName) {
        new RegisterPage().sendTextToPartnerLastName(partnerLastName);
    }

    @And("^I select country name \"([^\"]*)\"$")
    public void iSelectCountryName(String country) {
        new RegisterPage().selectTextFromDropDownListcountry(country);

    }

    @And("^I enter Postcode \"([^\"]*)\"$")
    public void iEnterPostcode(String postCode) {
        new RegisterPage().sendPostcodetoPostcodebar(postCode);
    }


    @And("^I click on my Address$")
    public void iClickOnMyAddress() {
        new RegisterPage().selecteAddressFromDropDownList();
    }

    @And("^I enter Contact Number\"([^\"]*)\"$")
    public void iEnterContactNumber(String phoneNumber) {
        new RegisterPage().sendContactNumber(phoneNumber);
    }

    @And("^I click on date field$")
    public void iClickOnDateField() {
        new RegisterPage().clickOnOccasionDate();

    }

    @And("^I click on Forward Button$")
    public void iClickOnForwardButton() {
        new RegisterPage().clickOnForwardBtn();

    }

    @And("^I click on date$")
    public void iClickOnDate() {
        new RegisterPage().selecDateFromCalender();
    }


    @And("^I enter number of Guests \"([^\"]*)\"$")
    public void iEnterNumberOfGuests(String guest) {
        new RegisterPage().sendTextToNumberOfGuest(guest);
    }


    @And("^I enter email \"([^\"]*)\"$")
    public void iEnterEmail(String _email) {
        Util util = new Util();
        email = _email + util.generateRandomNumber() + "@gmail.com";
        new RegisterPage().sendTextToEmailField(email);
        System.out.println(email);

    }

    @And("^I enter password \"([^\"]*)\"$")
    public void iEnterPassword(String password) {
        new RegisterPage().sendTextToPasswordField(password);

    }

    @And("^I enter confirm password \"([^\"]*)\"$")
    public void iEnterConfirmPassword(String confirmPass) {
        new RegisterPage().sendTextToConfirmPassword(confirmPass);

    }

    @And("^I click on submit button$")
    public void iClickOnSubmitButton() {
        new RegisterPage().clickOnSubmitButton();

    }

    @Then("^I can Succesfully Register$")
    public void iCanSuccesfullyRegister() {

    }


}
