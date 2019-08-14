package com.weddingshop;
/*
 * Created By Trupti Patel
 */

import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;
import org.junit.runner.RunWith;

    @RunWith(Cucumber.class)
    @CucumberOptions(
            features = ".",
            plugin = {"pretty","html:target/cucumber-reports"},
            tags = "@Home,@Regression,@Filter",
            monochrome = true
    )
    public class CukeTest {

    }
