package com.testrunner.adactin;

import org.adactin.Base_Class_adactin;
import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import cucumber.api.CucumberOptions;
import cucumber.api.junit.Cucumber;


@RunWith(Cucumber.class)
@CucumberOptions(features ="src\\test\\java\\com\\feature\\adactin.feature", 
				 glue = "com.stepdefinition.adactin",
				 monochrome = true, dryRun = false, strict = true,
				 tags = ("@adact1, @adact2, @adact3, @adact4, @adact5, @adact6, @adact7"),
				 
				 plugin = {"html:Report/adactin", 
						  "pretty",
						  "json:Report/JsonReport/adactin.json", 
						  "com.cucumber.listener.ExtentCucumberFormatter:Report/adactin.html"
				          }
				)	
public class Test_Runner_Adactin 
{
	public static WebDriver driver;
		
	@BeforeClass
	public static void set_Up() 
	{
		driver = Base_Class_adactin.getdriver("firefox");
	}
		
	@AfterClass
	public static void tear_Down() 
	{
		driver.close();
	}
}

