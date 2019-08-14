package com.weddingshop.pageobject;
/*
 * Created By Trupti Patel
 */

import com.weddingshop.utility.Util;
import org.apache.log4j.LogManager;
import org.apache.log4j.Logger;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;


public class HomePage extends Util {

    private static final Logger log = LogManager.getLogger(HomePage.class.getName());

    @FindBy(xpath = "//a[@id='main-dropdown-menu-0']//span[contains(text(),'Brands')]")
    WebElement _brands;

    @FindBy(xpath = "//span[contains(text(),'Products')]")
    WebElement _products;

    @FindBy(xpath = "//a[@id='main-dropdown-menu-2']//span[contains(text(),'Funds')]")
    WebElement _funds;

    @FindBy(xpath = "//span[contains(text(),'Travel & Experiences')]")
    WebElement _travelAndExp;

    @FindBy(xpath = "//a[@id='main-dropdown-menu-4']//span[contains(text(),'Showrooms')]")
    WebElement _showRooms;

    @FindBy(xpath = "//a[@id='main-dropdown-menu-5']//span[contains(text(),'Inspiration')]")
    WebElement _inspiration;

    @FindBy(xpath = "//a[@id='main-dropdown-menu-6']//span[contains(text(),'About')]")
    WebElement _about;


    public void clickOnBrands(){
        log.info(" Click On Brands");
        clickonElement(_brands);
    }
    public void clickOnProducts(){
        log.info("Click on Products");
        clickonElement(_products);
    }
    public void clickOnFunds(){
        log.info("Click on Funds");
        clickonElement(_funds);
    }
    public void clickOntravelAndExperience(){
        log.info("Click on Travel And experience");
        clickonElement(_travelAndExp);
    }
    public void clickOnshowrooms(){
        log.info("Click on Showrooms");
        clickonElement(_showRooms);
    }
    public void clickOnInspiration(){
        log.info("Click on Inspration");
        clickonElement(_inspiration);
    }
    public void clickOnAbout(){
        log.info("Click on About");
        clickonElement(_about);
    }
}