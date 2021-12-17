package com.testrunner.automation;

import org.junit.AfterClass;
import org.junit.BeforeClass;
import org.junit.runner.RunWith;
import org.openqa.selenium.WebDriver;
import com.base.Base_Class;
import cucumber.api.CucumberOptions;
import cucumber.api.java.Before;
import cucumber.api.junit.Cucumber;
import gherkin.formatter.model.Scenario;

@RunWith(Cucumber.class)
@CucumberOptions(features = "src\\test\\java\\com\\feature\\auto\\automation.feature",
				 glue = "com.stepdefinition.automation",
				 monochrome = true, dryRun = false, strict = true,
				 tags= ("@automate1, @automate2, @automate3, @automate4"),
				 
				 plugin = {"html:Report/automation",
						   "pretty",
						   "json:Report/JsonReport/automate.json", 
						   "com.cucumber.listener.ExtentCucumberFormatter:Report/automation.html"
						  }
				)
public class Test_Runner_Automation 
{
	public static WebDriver driver;

	@BeforeClass
	public static void set_Up() 
	{
		driver = Base_Class.getdriver("chrome");
	}
	@AfterClass
	public static void tear_Down() 
	{
		driver.close();
	}
}
