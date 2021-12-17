$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/feature/adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Booking in adactin website",
  "description": "",
  "id": "hotel-booking-in-adactin-website",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Login into website",
  "description": "",
  "id": "hotel-booking-in-adactin-website;login-into-website",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@adact1"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user launches the application using URL",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user Enters The \"\u003cusername\u003e\" Username",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Enters The \"\u003cpassword\u003e\" Password",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user Click On The Login Button And It Navigates To Search Hotel Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "hotel-booking-in-adactin-website;login-into-website;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 10,
      "id": "hotel-booking-in-adactin-website;login-into-website;;1"
    },
    {
      "cells": [
        "Gnane",
        "@1245"
      ],
      "line": 11,
      "id": "hotel-booking-in-adactin-website;login-into-website;;2"
    },
    {
      "cells": [
        "testdata47",
        "ACD#45"
      ],
      "line": 12,
      "id": "hotel-booking-in-adactin-website;login-into-website;;3"
    },
    {
      "cells": [
        "sample",
        "s@467"
      ],
      "line": 13,
      "id": "hotel-booking-in-adactin-website;login-into-website;;4"
    },
    {
      "cells": [
        "Gnane4797",
        "J5Q6KE"
      ],
      "line": 14,
      "id": "hotel-booking-in-adactin-website;login-into-website;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 11,
  "name": "Login into website",
  "description": "",
  "id": "hotel-booking-in-adactin-website;login-into-website;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@adact1"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user launches the application using URL",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user Enters The \"Gnane\" Username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Enters The \"@1245\" Password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user Click On The Login Button And It Navigates To Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_launches_the_application_using_URL()"
});
formatter.result({
  "duration": 3654108400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gnane",
      "offset": 17
    }
  ],
  "location": "Step_Definition.user_Enters_The_Username(String)"
});
formatter.result({
  "duration": 129339100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "@1245",
      "offset": 17
    }
  ],
  "location": "Step_Definition.user_Enters_The_Password(String)"
});
formatter.result({
  "duration": 55158800,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_On_The_Login_Button_And_It_Navigates_To_Search_Hotel_Page()"
});
formatter.result({
  "duration": 549424500,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Login into website",
  "description": "",
  "id": "hotel-booking-in-adactin-website;login-into-website;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@adact1"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user launches the application using URL",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user Enters The \"testdata47\" Username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Enters The \"ACD#45\" Password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user Click On The Login Button And It Navigates To Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_launches_the_application_using_URL()"
});
formatter.result({
  "duration": 481160000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testdata47",
      "offset": 17
    }
  ],
  "location": "Step_Definition.user_Enters_The_Username(String)"
});
formatter.result({
  "duration": 57776700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ACD#45",
      "offset": 17
    }
  ],
  "location": "Step_Definition.user_Enters_The_Password(String)"
});
formatter.result({
  "duration": 51210900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_On_The_Login_Button_And_It_Navigates_To_Search_Hotel_Page()"
});
formatter.result({
  "duration": 526382100,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Login into website",
  "description": "",
  "id": "hotel-booking-in-adactin-website;login-into-website;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@adact1"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user launches the application using URL",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user Enters The \"sample\" Username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Enters The \"s@467\" Password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user Click On The Login Button And It Navigates To Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_launches_the_application_using_URL()"
});
formatter.result({
  "duration": 528853000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sample",
      "offset": 17
    }
  ],
  "location": "Step_Definition.user_Enters_The_Username(String)"
});
formatter.result({
  "duration": 45474200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "s@467",
      "offset": 17
    }
  ],
  "location": "Step_Definition.user_Enters_The_Password(String)"
});
formatter.result({
  "duration": 43010200,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_On_The_Login_Button_And_It_Navigates_To_Search_Hotel_Page()"
});
formatter.result({
  "duration": 582551000,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Login into website",
  "description": "",
  "id": "hotel-booking-in-adactin-website;login-into-website;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 2,
      "name": "@adact1"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user launches the application using URL",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user Enters The \"Gnane4797\" Username",
  "matchedColumns": [
    0
  ],
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Enters The \"J5Q6KE\" Password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user Click On The Login Button And It Navigates To Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_launches_the_application_using_URL()"
});
formatter.result({
  "duration": 511303000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gnane4797",
      "offset": 17
    }
  ],
  "location": "Step_Definition.user_Enters_The_Username(String)"
});
formatter.result({
  "duration": 55337800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "J5Q6KE",
      "offset": 17
    }
  ],
  "location": "Step_Definition.user_Enters_The_Password(String)"
});
formatter.result({
  "duration": 43066300,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_On_The_Login_Button_And_It_Navigates_To_Search_Hotel_Page()"
});
formatter.result({
  "duration": 3800353600,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Search Hotel",
  "description": "",
  "id": "hotel-booking-in-adactin-website;search-hotel",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 16,
      "name": "@adact2"
    }
  ]
});
formatter.step({
  "line": 18,
  "name": "user Select the \"Brisbane\" As Location",
  "keyword": "When "
});
formatter.step({
  "line": 19,
  "name": "user Select \"Hotel Creek\" As Hotel",
  "keyword": "And "
});
formatter.step({
  "line": 20,
  "name": "user Select \"Deluxe\" As Room Type",
  "keyword": "And "
});
formatter.step({
  "line": 21,
  "name": "user Select \"2 - Two\" Aas Number Of Rooms",
  "keyword": "And "
});
formatter.step({
  "line": 22,
  "name": "user Select \"29/10/2021\" As Check In Date",
  "keyword": "And "
});
formatter.step({
  "line": 23,
  "name": "user Select \"02/11/2021\" As Check Out Date",
  "keyword": "And "
});
formatter.step({
  "line": 24,
  "name": "user Select \"3 - Three\" As Adult Per Room",
  "keyword": "And "
});
formatter.step({
  "line": 25,
  "name": "user Select \"2-Two\" Child Per Room",
  "keyword": "And "
});
formatter.step({
  "line": 26,
  "name": "user Click On Search And It Navigates To Select Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "Brisbane",
      "offset": 17
    }
  ],
  "location": "Step_Definition.user_Select_the_As_Location(String)"
});
formatter.result({
  "duration": 47585300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Hotel Creek",
      "offset": 13
    }
  ],
  "location": "Step_Definition.user_Select_As_Hotel(String)"
});
formatter.result({
  "duration": 44432300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Deluxe",
      "offset": 13
    }
  ],
  "location": "Step_Definition.user_Select_As_Room_Type(String)"
});
formatter.result({
  "duration": 46472100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2 - Two",
      "offset": 13
    }
  ],
  "location": "Step_Definition.user_Select_Aas_Number_Of_Rooms(String)"
});
formatter.result({
  "duration": 212400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "29/10/2021",
      "offset": 13
    }
  ],
  "location": "Step_Definition.user_Select_As_Check_In_Date(String)"
});
formatter.result({
  "duration": 102176300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "02/11/2021",
      "offset": 13
    }
  ],
  "location": "Step_Definition.user_Select_As_Check_Out_Date(String)"
});
formatter.result({
  "duration": 113429500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3 - Three",
      "offset": 13
    }
  ],
  "location": "Step_Definition.user_Select_As_Adult_Per_Room(String)"
});
formatter.result({
  "duration": 58687300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2-Two",
      "offset": 13
    }
  ],
  "location": "Step_Definition.user_Select_Child_Per_Room(String)"
});
formatter.result({
  "duration": 46830200,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_On_Search_And_It_Navigates_To_Select_Hotel_Page()"
});
formatter.result({
  "duration": 1144371200,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Select Hotel",
  "description": "",
  "id": "hotel-booking-in-adactin-website;select-hotel",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 28,
      "name": "@adact3"
    }
  ]
});
formatter.step({
  "line": 30,
  "name": "user Select The Hotel",
  "keyword": "When "
});
formatter.step({
  "line": 31,
  "name": "user Click the Continue Button And It Navigates to Booking Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Hotel()"
});
formatter.result({
  "duration": 263121200,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_the_Continue_Button_And_It_Navigates_to_Booking_Page()"
});
formatter.result({
  "duration": 1173335000,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Making Payment",
  "description": "",
  "id": "hotel-booking-in-adactin-website;making-payment",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 33,
      "name": "@adact4"
    }
  ]
});
formatter.step({
  "line": 35,
  "name": "user Enters \"GNANE\" As The First Name",
  "keyword": "When "
});
formatter.step({
  "line": 36,
  "name": "user Enters \"NS\" As The Last Name",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user Enters \"CHENNAI\" As The Billing Address",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "user Enters The Credit Card Num",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "user Select Card Type",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "user Select The Expiry Month",
  "keyword": "And "
});
formatter.step({
  "line": 41,
  "name": "user Select The Expiry Year",
  "keyword": "And "
});
formatter.step({
  "line": 42,
  "name": "user Enters The CVV",
  "keyword": "And "
});
formatter.step({
  "line": 43,
  "name": "user Click The Submit And Then It Navigates to Iterary Page",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "GNANE",
      "offset": 13
    }
  ],
  "location": "Step_Definition.user_Enters_As_The_First_Name(String)"
});
formatter.result({
  "duration": 70918400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "NS",
      "offset": 13
    }
  ],
  "location": "Step_Definition.user_Enters_As_The_Last_Name(String)"
});
formatter.result({
  "duration": 48103000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "CHENNAI",
      "offset": 13
    }
  ],
  "location": "Step_Definition.user_Enters_As_The_Billing_Address(String)"
});
formatter.result({
  "duration": 63989300,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enters_The_Credit_Card_Num()"
});
formatter.result({
  "duration": 1716481800,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_Card_Type()"
});
formatter.result({
  "duration": 129470000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Expiry_Month()"
});
formatter.result({
  "duration": 125912800,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Select_The_Expiry_Year()"
});
formatter.result({
  "duration": 112682100,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Enters_The_CVV()"
});
formatter.result({
  "duration": 115243000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition.user_Click_The_Submit_And_Then_It_Navigates_to_Iterary_Page()"
});
formatter.result({
  "duration": 288496700,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Booked Itinerary",
  "description": "",
  "id": "hotel-booking-in-adactin-website;booked-itinerary",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 45,
      "name": "@adact5"
    }
  ]
});
formatter.step({
  "line": 47,
  "name": "user Clicks The My Itenerary Button And It Navigates To Booked History Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Clicks_The_My_Itenerary_Button_And_It_Navigates_To_Booked_History_Page()"
});
formatter.result({
  "duration": 8103596200,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Logout",
  "description": "",
  "id": "hotel-booking-in-adactin-website;logout",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 49,
      "name": "@adact6"
    }
  ]
});
formatter.step({
  "line": 51,
  "name": "user Clicks The Logout Button and It Navigates To Login Again Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Clicks_The_Logout_Button_and_It_Navigates_To_Login_Again_Page()"
});
formatter.result({
  "duration": 1399535500,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "Login Again",
  "description": "",
  "id": "hotel-booking-in-adactin-website;login-again",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 53,
      "name": "@adact7"
    }
  ]
});
formatter.step({
  "line": 55,
  "name": "user Clicks The Login Again Button and It Navigates To The Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition.user_Clicks_The_Login_Again_Button_and_It_Navigates_To_The_Home_Page()"
});
formatter.result({
  "duration": 563240900,
  "status": "passed"
});
});