Feature: Purchasing clothes in automation practice website

#
#Scenario: Login
#Given User opens the application
#When user clicks sign in
#Then logout


@automate1
Scenario Outline: Login
Given user Launches Application Using URL
When user Clicks The Sign In Button In Home Page
And user Enters The "<username>" Username
And user Enters The "<password>" Password
Then user Clicks The Login Button And Then It Navigates To Dresses Section Page

Examples:
|username|password|
|Gnane@gmail.com|@1245|
|testdata47@gmail.com|ACD#45|
|sample@gmail.com|s@467|
|gnani9448@gmail.com|Gnane@47|

@automate2
Scenario: Purchasing a dress
When user Clicks The Dresses
And user Clicks The Evening Dresses
And user Clicks The Printed Dresses
And user Select The Quantity
And user Select The "M" As Size
And user Select The Color
And user Clicks The Addtocart Button
And user Clicks The Proceed to Checkout Button
And user Verifies The Quantity And Click Proceed To Checkout Button
And user Verifies The Address and Click Proceed To Checkout Button
And user Accepts The Terms And Conditions
And user Clicks Proceed To Checkout Button
And user Clicks Paybybank Wire Button
Then user Clicks Confirm Order Button and Navigates To Order Confirmation Page

@automate3
Scenario: Purchasing 2nd product
When user Clicks The Logo
And user Clicks The Tshirts
And user Clicks The Tshirtstype
And user Select The Quantity_tshirt
And user Select The "L" As Size_tshirt
And user Select The Color_tshirt
And user Clicks The Addtocart Button_tshirt
And user Clicks The Proceed to Checkout Button_tshirt
And user Verifies The Quantity And Click Proceed To Checkout Button_tshirt
And user Verifies The Address And Click Proceed To Checkout Button_tshirt
And user Accepts The Terms and Conditions_tshirt
And user Clicks The Proceed To Checkout Button_tshirts
And user Clicks The Paybybank Wire Button_tshirt
Then user Clicks The Confirm Order Button_tshirt

@automate4
Scenario: Booking History
Then user Clicks The Myorders_Page 