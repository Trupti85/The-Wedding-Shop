package com.weddingshop.browserpage;
/*
 * Created By Trupti Patel
 */

import com.weddingshop.basepage.BasePage;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;

public class BrowserSelector extends BasePage {
    public void selectBrowser(String browser) {
        if (browser.equalsIgnoreCase("Chrome")) {
            System.setProperty("webdriver.chrome.driver"
                    ,System.getProperty("user.dir")+ "/src/test/java/com/weddingshop/resources/driver/chromedriver");
            driver = new ChromeDriver();
        } else if (browser.equalsIgnoreCase("firefox")) {
            System.setProperty("webdriver.gecko.driver"
                    ,System.getProperty("user.dir")+ "/src/test/java/com/weddingshop/resources/driver/geckodriver");
            driver = new FirefoxDriver();
        }
        else {
            System.out.println("Wrong Browser Selected");
        }
    }
}
