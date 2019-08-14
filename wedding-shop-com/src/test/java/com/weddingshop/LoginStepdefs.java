package com.weddingshop;
/*
 * Created By Trupti Patel
 */


import com.weddingshop.pageobject.HomePage;
import com.weddingshop.pageobject.LogInPage;
import com.weddingshop.utility.Util;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import org.junit.Assert;

public class LoginStepdefs {

    String email = null;

    @Given("^I am at Homepage$")
    public void iAmAtHomepage() {
    }

    @When("^I click On Login Bar$")
    public void iClickOnLoginBar() {
        new LogInPage().clickOnLogInBar();
        Assert.assertTrue(new LogInPage().verifyLogInText());

    }

    @And("^I enter Email Address \"([^\"]*)\"$")
    public void iEnterEmailAddress(String _email) {
        Util util = new Util();
        email = _email + util.generateRandomNumber() + "@gmail.com";
        new LogInPage().enterTextToEmailField(email);


    }

    @And("^I enter password to login \"([^\"]*)\"$")
    public void iEnterPasswordToLogin(String password) {
        new LogInPage().enterTextToPasswordField(password);
    }

    @And("^I click on submit Button$")
    public void iClickOnSubmitButton() {
    }

    @Then("^I can successfully Login$")
    public void iCanSuccessfullyLogin() {
    }


    @When("^I click On \"([^\"]*)\"$")
    public void iClickOn(String option) throws InterruptedException {
        if (option.compareTo("Brands") == 1) {
            new HomePage().clickOnBrands();
        } else if (option.compareTo("Products") == 1) {
            new HomePage().clickOnProducts();
        } else if (option.compareTo("Funds") == 1) {
            new HomePage().clickOnFunds();
        } else if (option.compareTo("Travel & Experience") == 1) {
            new HomePage().clickOntravelAndExperience();
        } else if (option.compareTo("Showrooms") == 1) {
            new HomePage().clickOnshowrooms();
        } else if (option.compareTo("Inspiration") == 1) {
            new HomePage().clickOnInspiration();
        } else if (option.compareTo("About") == 1) {
            new HomePage().clickOnAbout();
        }
    }

    @Then("^I can successfully navigate HomePage$")
    public void iCanSuccessfullyNavigateHomePage() {
    }
}
