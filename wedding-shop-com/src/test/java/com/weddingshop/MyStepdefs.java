package com.weddingshop;
/*
 * Created By Trupti Patel
 */

import com.weddingshop.pageobject.FilterPage;
import cucumber.api.java.en.And;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;

public class MyStepdefs {
    @Given("^I am on home page$")
    public void iAmOnHomePage() {

    }

    @And("^I click on Products$")
    public void iClickOnProducts() {
        new FilterPage().clickOnProduct();

    }

    @And("^i click on Search$")
    public void iClickOnSearch() {
        new FilterPage().clickOnSearch();

    }

    @And("^I send text in search bar \"([^\"]*)\"$")
    public void iSendTextInSearchBar(String src) {
        new FilterPage().sendTextToSearchBar(src);

    }

    @When("^I select candle & Diffusers$")
    public void iSelectCandleDiffusers() {
        new FilterPage().selectcandlesAndDiffuser();
    }


    @And("^I want candles in the filter price range$")
    public void iWantCandlesInTheFilterPriceRange() throws InterruptedException {
        new FilterPage().selectPrice20to39();
        Thread.sleep(5000);
    }
    @Then("^I should see some candles priced between$")
    public void iShouldSeeSomeCandlesPricedBetween() {

    }

    @Then("^I should see candles as per filter price$")
    public void iShouldSeeCandlesAsPerFilterPrice() {

    }

    @And("^I want candles in the \"([^\"]*)\" price range$")
    public void iWantCandlesInThePriceRange(String option) {
        if (option.compareTo("<£20")==1){
            new FilterPage().selectPricelessthan20();
        }
        else if (option.compareTo("£20 - £39")==1){
            new FilterPage().selectPrice20to39();
        }
        else if (option.compareTo("£40 - £49")==1){
            new FilterPage().selectPrice40to49();
        }
        else if (option.compareTo("£50 - £74")==1){
            new FilterPage().selectPrice50to74();
        }
        else if (option.compareTo("£75 - £149")==1){
            new FilterPage().selectPrice75to149();
        }
        else if (option.compareTo("£150 +")==1){
            new FilterPage().selectPrice150plus();
        }

    }
}
