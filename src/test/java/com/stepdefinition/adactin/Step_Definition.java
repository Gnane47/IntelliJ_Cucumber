package com.stepdefinition.adactin;

import org.adactin.Base_Class_adactin;
import org.adactin.Page_Object_Manager;
import org.openqa.selenium.WebDriver;
import com.testrunner.adactin.Test_Runner_Adactin;
import cucumber.api.java.After;
import cucumber.api.java.Before;
import cucumber.api.java.en.Given;
import cucumber.api.java.en.Then;
import cucumber.api.java.en.When;
import gherkin.formatter.model.Scenario;

public class Step_Definition extends Base_Class_adactin
{
	public static WebDriver driver = Test_Runner_Adactin.driver;
	public static Page_Object_Manager pom = new Page_Object_Manager(driver);


//	@Given("^User opens the application$")
//	public void user_opens_the_application() throws Throwable 
//	{
//	System.out.println("demo");
//	}
//
//	@When("^user clicks sign in$")
//	public void user_clicks_sign_in() throws Throwable {
//	   
//	}
//
//	@Then("^logout$")
//	public void logout() throws Throwable {
//	    
//}
	
	
	
	@Given("^user launches the application using URL$")
	public void user_launches_the_application_using_URL() throws Throwable 
	{
		geturl("http://adactinhotelapp.com/index.php");
	}
	
	@When("^user Enters The \"([^\"]*)\" Username$")
	public void user_Enters_The_Username(String username) throws Throwable 
	{
		input(pom.getInstancelp().getUsername(), username);
	}

	@When("^user Enters The \"([^\"]*)\" Password$")
	public void user_Enters_The_Password(String password) throws Throwable 
	{
		input(pom.getInstancelp().getPassword(), password);
	}
	
	@Then("^user Click On The Login Button And It Navigates To Search Hotel Page$")
	public void user_Click_On_The_Login_Button_And_It_Navigates_To_Search_Hotel_Page() throws Throwable 
	{
		click(pom.getInstancelp().getLogin());
	}	
	
	@When("^user Select the \"([^\"]*)\" As Location$")
	public void user_Select_the_As_Location(String location) throws Throwable 
	{
		Drop(pom.getInstancesh().getLocation(), location);
	}

	@When("^user Select \"([^\"]*)\" As Hotel$")
	public void user_Select_As_Hotel(String Hotel) throws Throwable 
	{
		Drop(pom.getInstancesh().getHotels(), Hotel);
	}

	@When("^user Select \"([^\"]*)\" As Room Type$")
	public void user_Select_As_Room_Type(String roomtype) throws Throwable 
	{
		Drop(pom.getInstancesh().getRooms(), roomtype);
	}

	@When("^user Select \"([^\"]*)\" Aas Number Of Rooms$")
	public void user_Select_Aas_Number_Of_Rooms(String arg1) throws Throwable 
	{
		
	}

	@When("^user Select \"([^\"]*)\" As Check In Date$")
	public void user_Select_As_Check_In_Date(String checkin) throws Throwable 
	{
		clear(pom.getInstancesh().getIn());
		input(pom.getInstancesh().getIn(), checkin);
	}

	@When("^user Select \"([^\"]*)\" As Check Out Date$")
	public void user_Select_As_Check_Out_Date(String checkout) throws Throwable 
	{
		clear(pom.getInstancesh().getOut());
		input(pom.getInstancesh().getOut(), checkout);
	}

	@When("^user Select \"([^\"]*)\" As Adult Per Room$")
	public void user_Select_As_Adult_Per_Room(String adult) throws Throwable 
	{
		Drop(pom.getInstancesh().getAdult_count(), adult);
	}

	@When("^user Select \"([^\"]*)\" Child Per Room$")
	public void user_Select_Child_Per_Room(String child) throws Throwable 
	{
		input(pom.getInstancesh().getChild_count(), child);
	}

	@Then("^user Click On Search And It Navigates To Select Hotel Page$")
	public void user_Click_On_Search_And_It_Navigates_To_Select_Hotel_Page() throws Throwable 
	{
		click(pom.getInstancesh().getSubmit());
	}
	
	@When("^user Select The Hotel$")
	public void user_Select_The_Hotel() throws Throwable 
	{
		click(pom.getInstances().getRadio());
	}

	@Then("^user Click the Continue Button And It Navigates to Booking Page$")
	public void user_Click_the_Continue_Button_And_It_Navigates_to_Booking_Page() throws Throwable 
	{
		click(pom.getInstances().getGo());
	}
	
	@When("^user Enters \"([^\"]*)\" As The First Name$")
	public void user_Enters_As_The_First_Name(String firstname) throws Throwable 
	{
		input(pom.getInstancep().getFirstname(), firstname);
	}

	@When("^user Enters \"([^\"]*)\" As The Last Name$")
	public void user_Enters_As_The_Last_Name(String lastname) throws Throwable 
	{
		input(pom.getInstancep().getLastname(), lastname);
	}

	@When("^user Enters \"([^\"]*)\" As The Billing Address$")
	public void user_Enters_As_The_Billing_Address(String address) throws Throwable 
	{
		input(pom.getInstancep().getAddress(), address);
	}

	@When("^user Enters The Credit Card Num$")
	public void user_Enters_The_Credit_Card_Num() throws Throwable 
	{
		String cardnum = specific_data("C:\\Users\\gnaneswarns\\eclipse-workspace\\L_Cucumber_Auto_Adactin\\Excel\\details_adactin.xlsx", 1, 3);
		input(pom.getInstancep().getCardnum(), cardnum);
	}

	@When("^user Select Card Type$")
	public void user_Select_Card_Type() throws Throwable 
	{
		String cardtype = specific_data("C:\\Users\\gnaneswarns\\eclipse-workspace\\L_Cucumber_Auto_Adactin\\Excel\\details_adactin.xlsx", 1, 4);
		input(pom.getInstancep().getCardtype(), cardtype);
	}

	@When("^user Select The Expiry Month$")
	public void user_Select_The_Expiry_Month() throws Throwable 
	{
		String month = specific_data("C:\\Users\\gnaneswarns\\eclipse-workspace\\L_Cucumber_Auto_Adactin\\Excel\\details_adactin.xlsx", 1, 5);
		input(pom.getInstancep().getMonth(), month);
	}

	@When("^user Select The Expiry Year$")
	public void user_Select_The_Expiry_Year() throws Throwable 
	{
		String year = specific_data("C:\\Users\\gnaneswarns\\eclipse-workspace\\L_Cucumber_Auto_Adactin\\Excel\\details_adactin.xlsx", 1, 6);
		input(pom.getInstancep().getYear(), year);
	}

	@When("^user Enters The CVV$")
	public void user_Enters_The_CVV() throws Throwable 
	{
		String cvv = specific_data("C:\\Users\\gnaneswarns\\eclipse-workspace\\L_Cucumber_Auto_Adactin\\Excel\\details_adactin.xlsx", 1, 7);
		input(pom.getInstancep().getCvv(), cvv);
	}

	@Then("^user Click The Submit And Then It Navigates to Iterary Page$")
	public void user_Click_The_Submit_And_Then_It_Navigates_to_Iterary_Page() throws Throwable 
	{
		click(pom.getInstancep().getBook());
	}

	@Then("^user Clicks The My Itenerary Button And It Navigates To Booked History Page$")
	public void user_Clicks_The_My_Itenerary_Button_And_It_Navigates_To_Booked_History_Page() throws Throwable
	{
		implicit(20); thread(3000);
		click(pom.getInstancep().getIte());
		scroll(pom.getInstancep().getLogout()) ;scrsh("ad1"); thread(1500);
	}

	@Then("^user Clicks The Logout Button and It Navigates To Login Again Page$")
	public void user_Clicks_The_Logout_Button_and_It_Navigates_To_Login_Again_Page() throws Throwable 
	{
		click(pom.getInstancep().getLogout()); thread(800);
	}

	@Then("^user Clicks The Login Again Button and It Navigates To The Home Page$")
	public void user_Clicks_The_Login_Again_Button_and_It_Navigates_To_The_Home_Page() throws Throwable 
	{
		click(pom.getInstancep().getAgain()); 
	}
	
}
