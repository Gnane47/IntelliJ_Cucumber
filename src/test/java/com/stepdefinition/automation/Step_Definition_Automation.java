package com.stepdefinition.automation;

import org.openqa.selenium.WebDriver;
import com.base.Base_Class;
import com.pom.automation.Page_Object_Manager;
import com.testrunner.automation.Test_Runner_Automation;

import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gherkin.formatter.model.Scenario;
import okhttp3.internal.cache.DiskLruCache.Snapshot;

public class Step_Definition_Automation extends Base_Class
{
	public static WebDriver driver = Test_Runner_Automation.driver;
	public static Page_Object_Manager pom = new Page_Object_Manager(driver);

	@Given("^user Launches Application Using URL$")
	public void user_Launches_Application_Using_URL() throws Throwable
	{
	    String url = specific_data("C:\\Users\\gnaneswarns\\eclipse-workspace\\L_Cucumber_Auto_Adactin\\Excel\\details_automation_practice.xlsx", 1, 1);
		geturl("http://automationpractice.com/index.php");
	}

	@When("^user Clicks The Sign In Button In Home Page$")
	public void user_Clicks_The_Sign_In_Button_In_Home_Page() throws Throwable
	{
		click(pom.getInstancemp().getSignin());
	}

	@When("^user Enters The \"([^\"]*)\" Username$")
	public void user_Enters_The_Username(String username) throws Throwable
	{
		login_details(pom.getInstancelp().getUsername(), username);
	}

	@When("^user Enters The \"([^\"]*)\" Password$")
	public void user_Enters_The_Password(String password) throws Throwable
	{
	    login_details(pom.getInstancelp().getPassword(), password);
	}

	@Then("^user Clicks The Login Button And Then It Navigates To Dresses Section Page$")
	public void user_Clicks_The_Login_Button_And_Then_It_Navigates_To_Dresses_Section_Page() throws Throwable
	{
		click(pom.getInstancelp().getlogin());
	}

	@When("^user Clicks The Dresses$")
	public void user_Clicks_The_Dresses() throws Throwable
	{
		click(pom.getInstanceds().getDresses());
	}

	@When("^user Clicks The Evening Dresses$")
	public void user_Clicks_The_Evening_Dresses() throws Throwable
	{
		click(pom.getInstanceds().getEvening());
	}

	@When("^user Clicks The Printed Dresses$")
	public void user_Clicks_The_Printed_Dresses() throws Throwable
	{
		click(pom.getInstancepd().getPrinted()); thread(2000);
		framebyIndex(0);
	}

	@When("^user Select The Quantity$")
	public void user_Select_The_Quantity() throws Throwable
	{
		for(int i=0; i<=8; i++)
		{
			click(pom.getInstancepd().getQuantity());
		}
	}

	@When("^user Select The \"([^\"]*)\" As Size$")
	public void user_Select_The_As_Size(String size) throws Throwable
	{
		Drop(pom.getInstancepd().getSize(), size);
	}

	@When("^user Select The Color$")
	public void user_Select_The_Color() throws Throwable
	{
		click(pom.getInstancepd().getColor());
	}

	@When("^user Clicks The Addtocart Button$")
	public void user_Clicks_The_Addtocart_Button() throws Throwable
	{
		click(pom.getInstancepd().getAddto());
		frameout(); thread(2000);
	}

	@When("^user Clicks The Proceed to Checkout Button$")
	public void user_Clicks_The_Proceed_to_Checkout_Button() throws Throwable
	{
		js(pom.getInstancepd().getProceed());
	}

	@When("^user Verifies The Quantity And Click Proceed To Checkout Button$")
	public void user_Verifies_The_Quantity_And_Click_Proceed_To_Checkout_Button() throws Throwable
	{
		click(pom.getInstancesum().getCheckout());
	}

	@When("^user Verifies The Address and Click Proceed To Checkout Button$")
	public void user_Verifies_The_Address_and_Click_Proceed_To_Checkout_Button() throws Throwable
	{
		click(pom.getInstanceadd().getAddress());
	}

	@When("^user Accepts The Terms And Conditions$")
	public void user_Accepts_The_Terms_And_Conditions() throws Throwable
	{
		click(pom.getInstancesh().getCheckbox());
	}

	@When("^user Clicks Proceed To Checkout Button$")
	public void user_Clicks_Proceed_To_Checkout_Button() throws Throwable
	{
		click(pom.getInstancesh().getProceed());
	}

	@When("^user Clicks Paybybank Wire Button$")
	public void user_Clicks_Paybybank_Wire_Button() throws Throwable
	{
		click(pom.getInstancep().getPay());
	}

	@Then("^user Clicks Confirm Order Button and Navigates To Order Confirmation Page$")
	public void user_Clicks_Confirm_Order_Button_and_Navigates_To_Order_Confirmation_Page() throws Throwable
	{
		click(pom.getInstancepc().getPay_con());
		scroll(pom.getInstancepc2().getBackto()); thread(3000);
		click(pom.getInstancepc2().getOrders());
		scroll(pom.getInstancepc2().getTracking());
	}

	@When("^user Clicks The Logo$")
	public void user_Clicks_The_Logo() throws Throwable
	{
		click(pom.getInstancepc().getLogo());
	}

	@When("^user Clicks The Tshirts$")
	public void user_Clicks_The_Tshirts() throws Throwable
	{
		click(pom.getInstancets().getTshirts());
	}

	@When("^user Clicks The Tshirtstype$")
	public void user_Clicks_The_Tshirtstype() throws Throwable
	{
		click(pom.getInstancetsp().getTshirt());
		js(pom.getInstancetsp().getQuick()); thread(2000);
		framebyIndex(0);
	}

	@When("^user Select The Quantity_tshirt$")
	public void user_Select_The_Quantity_tshirt() throws Throwable
	{
		for(int i=0; i<=8 ; i++)
		{
			click(pom.getInstancetsp().getQuantity());
		}
	}

	@When("^user Select The \"([^\"]*)\" As Size_tshirt$")
	public void user_Select_The_As_Size_tshirt(String size) throws Throwable
	{
		Drop(pom.getInstancetsp().getSize(), size);
	}

	@When("^user Select The Color_tshirt$")
	public void user_Select_The_Color_tshirt() throws Throwable
	{
		click(pom.getInstancetsp().getColor());
	}

	@When("^user Clicks The Addtocart Button_tshirt$")
	public void user_Clicks_The_Addtocart_Button_tshirt() throws Throwable
	{
		click(pom.getInstancetsp().getAddto());
		frameout(); thread(2000);
	}

	@When("^user Clicks The Proceed to Checkout Button_tshirt$")
	public void user_Clicks_The_Proceed_to_Checkout_Button_tshirt() throws Throwable
	{
		js(pom.getInstancetsp().getProceed());
	}

	@When("^user Verifies The Quantity And Click Proceed To Checkout Button_tshirt$")
	public void user_Verifies_The_Quantity_And_Click_Proceed_To_Checkout_Button_tshirt() throws Throwable
	{
		click(pom.getInstancesum2().getCheckout());
	}

	@When("^user Verifies The Address And Click Proceed To Checkout Button_tshirt$")
	public void user_Verifies_The_Address_And_Click_Proceed_To_Checkout_Button_tshirt() throws Throwable
	{
		click(pom.getInstanceadd2().getAddress());
	}

	@When("^user Accepts The Terms and Conditions_tshirt$")
	public void user_Accepts_The_Terms_and_Conditions_tshirt() throws Throwable
	{
		click(pom.getInstancesh2().getCheckbox());
	}

	@When("^user Clicks The Proceed To Checkout Button_tshirts$")
	public void user_Clicks_The_Proceed_To_Checkout_Button_tshirts() throws Throwable
	{
		click(pom.getInstancesh2().getProceed());
	}

	@When("^user Clicks The Paybybank Wire Button_tshirt$")
	public void user_Clicks_The_Paybybank_Wire_Button_tshirt() throws Throwable
	{
		click(pom.getInstancep2().getPay());
	}

	@Then("^user Clicks The Confirm Order Button_tshirt$")
	public void user_Clicks_The_Confirm_Order_Button_tshirt() throws Throwable
	{
		click(pom.getInstancepc2().getPay_con());
	}

	@Then("^user Clicks The Myorders_Page$")
	public void user_Clicks_The_Myorders_Page() throws Throwable
	{
		scroll(pom.getInstancepc2().getBackto()); thread(3000);
		click(pom.getInstancepc2().getOrders());
		scroll(pom.getInstancepc2().getTracking()); snaps("auto1");
	}

}