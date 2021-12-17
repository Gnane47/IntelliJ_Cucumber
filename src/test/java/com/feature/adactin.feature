Feature: Hotel Booking in adactin website
@adact1
Scenario Outline: Login into website
Given user launches the application using URL
When user Enters The "<username>" Username
And user Enters The "<password>" Password
Then user Click On The Login Button And It Navigates To Search Hotel Page

Examples:
|username|password|
|Gnane|@1245|
|testdata47|ACD#45|
|sample|s@467|
|Gnane4797|J5Q6KE|

@adact2
Scenario: Search Hotel
When user Select the "Brisbane" As Location 
And user Select "Hotel Creek" As Hotel
And user Select "Deluxe" As Room Type
And user Select "2 - Two" Aas Number Of Rooms
And user Select "29/10/2021" As Check In Date
And user Select "02/11/2021" As Check Out Date
And user Select "3 - Three" As Adult Per Room
And user Select "2-Two" Child Per Room
Then user Click On Search And It Navigates To Select Hotel Page

@adact3
Scenario: Select Hotel
When user Select The Hotel
Then user Click the Continue Button And It Navigates to Booking Page

@adact4
Scenario: Making Payment
When user Enters "GNANE" As The First Name
And user Enters "NS" As The Last Name
And user Enters "CHENNAI" As The Billing Address
And user Enters The Credit Card Num
And user Select Card Type
And user Select The Expiry Month
And user Select The Expiry Year
And user Enters The CVV
Then user Click The Submit And Then It Navigates to Iterary Page

@adact5
Scenario: Booked Itinerary
Then user Clicks The My Itenerary Button And It Navigates To Booked History Page

@adact6
Scenario: Logout
Then user Clicks The Logout Button and It Navigates To Login Again Page

@adact7
Scenario: Login Again
Then user Clicks The Login Again Button and It Navigates To The Home Page