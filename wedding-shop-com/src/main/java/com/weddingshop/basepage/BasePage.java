package com.weddingshop.basepage;
/*
 * Created By Trupti Patel
 */

import org.apache.log4j.PropertyConfigurator;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.support.PageFactory;

public class BasePage {
    public static WebDriver driver;

    public BasePage() {
        PropertyConfigurator.configure(System.getProperty("user.dir") + "/src/test/java/com/weddingshop/resources/propertise/log4j.properties");
        PageFactory.initElements(driver, this);
    }
}
