package com.weddingshop.pageobject;
/*
 * Created By Trupti Patel
 */

import com.weddingshop.utility.Util;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;

public class FilterPage extends Util {

    private static final Logger log = LogManager.getLogger(FilterPage.class.getName());

    @FindBy(xpath = "//span[contains(text(),'Products')]")
    WebElement _products;

    @FindBy(id = "icon-nav-search")
    WebElement _search;

    @FindBy(id = "search-query")
    WebElement _searchbar;

    @FindBy(xpath = "//a[@class='float-left suggestion-link-brand']//div[contains(text(),'& Diffusers')]")
    WebElement _candles;

    @FindBy(xpath = "//label[contains(text(),'<£20')]")
    WebElement _Filter20;

    @FindBy(xpath = "//label[contains(text(),'£20 - £39')]")
    WebElement _filter20to39;

    @FindBy(xpath = "//label[contains(text(),'£40 - £49')]")
    WebElement _filter40to49;

    @FindBy(xpath = "//label[contains(text(),'£50 - £74')]")
    WebElement _filter50to74;

    @FindBy(xpath = "//label[contains(text(),'£75 - £149')]")
    WebElement _filter75to149;

    @FindBy(xpath = "//label[contains(text(),'£150 +')]")
    WebElement _filter150;


    //for debugging comment with log.info and add description to get report
    public void clickOnProduct() {
        log.info("Click on Products");
        clickonElement(_products);
    }

    public void clickOnSearch() {
        log.info("click on search button");
        clickonElement(_search);
    }

    public void sendTextToSearchBar(String candles) {
        log.info("send text to search bar");
        sendTextToElement(_searchbar, candles);
    }

    public void selectcandlesAndDiffuser() {
        log.info("selecting from suggestion");
        clickonElement(_candles);
    }

    public void selectPricelessthan20() {
        log.info("select price less then 20");
        clickonElement(_Filter20);
    }

    public void selectPrice20to39() {
        log.info("select price for  £20-£39");
        clickonElement(_filter20to39);
    }

    public void selectPrice40to49() {
        log.info("select price  £40-£49");
        clickonElement(_filter40to49);
    }

    public void selectPrice50to74() {
        log.info("select price £50-£74");
        clickonElement(_filter50to74);
    }

    public void selectPrice75to149() {
        log.info("select price £75-£149");
        clickonElement(_filter75to149);
    }

    public void selectPrice150plus() {
        log.info("select price £150+");
        clickonElement(_filter150);
    }


}