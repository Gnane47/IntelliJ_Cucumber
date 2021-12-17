$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/com/feature/auto/automation.feature");
formatter.feature({
  "line": 1,
  "name": "Purchasing clothes in automation practice website",
  "description": "",
  "id": "purchasing-clothes-in-automation-practice-website",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "comments": [
    {
      "line": 3,
      "value": "#"
    },
    {
      "line": 4,
      "value": "#Scenario: Login"
    },
    {
      "line": 5,
      "value": "#Given User opens the application"
    },
    {
      "line": 6,
      "value": "#When user clicks sign in"
    },
    {
      "line": 7,
      "value": "#Then logout"
    }
  ],
  "line": 11,
  "name": "Login",
  "description": "",
  "id": "purchasing-clothes-in-automation-practice-website;login",
  "type": "scenario_outline",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@automate1"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user Launches Application Using URL",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user Clicks The Sign In Button In Home Page",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user Enters The \"\u003cusername\u003e\" Username",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user Enters The \"\u003cpassword\u003e\" Password",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user Clicks The Login Button And Then It Navigates To Dresses Section Page",
  "keyword": "Then "
});
formatter.examples({
  "line": 18,
  "name": "",
  "description": "",
  "id": "purchasing-clothes-in-automation-practice-website;login;",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ],
      "line": 19,
      "id": "purchasing-clothes-in-automation-practice-website;login;;1"
    },
    {
      "cells": [
        "Gnane@gmail.com",
        "@1245"
      ],
      "line": 20,
      "id": "purchasing-clothes-in-automation-practice-website;login;;2"
    },
    {
      "cells": [
        "testdata47@gmail.com",
        "ACD#45"
      ],
      "line": 21,
      "id": "purchasing-clothes-in-automation-practice-website;login;;3"
    },
    {
      "cells": [
        "sample@gmail.com",
        "s@467"
      ],
      "line": 22,
      "id": "purchasing-clothes-in-automation-practice-website;login;;4"
    },
    {
      "cells": [
        "gnani9448@gmail.com",
        "Gnane@47"
      ],
      "line": 23,
      "id": "purchasing-clothes-in-automation-practice-website;login;;5"
    }
  ],
  "keyword": "Examples"
});
formatter.scenario({
  "line": 20,
  "name": "Login",
  "description": "",
  "id": "purchasing-clothes-in-automation-practice-website;login;;2",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@automate1"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user Launches Application Using URL",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user Clicks The Sign In Button In Home Page",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user Enters The \"Gnane@gmail.com\" Username",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user Enters The \"@1245\" Password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user Clicks The Login Button And Then It Navigates To Dresses Section Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition_Automation.user_Launches_Application_Using_URL()"
});
formatter.result({
  "duration": 9734420500,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_The_Sign_In_Button_In_Home_Page()"
});
formatter.result({
  "duration": 4200432900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gnane@gmail.com",
      "offset": 17
    }
  ],
  "location": "Step_Definition_Automation.user_Enters_The_Username(String)"
});
formatter.result({
  "duration": 143794900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "@1245",
      "offset": 17
    }
  ],
  "location": "Step_Definition_Automation.user_Enters_The_Password(String)"
});
formatter.result({
  "duration": 121818200,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_The_Login_Button_And_Then_It_Navigates_To_Dresses_Section_Page()"
});
formatter.result({
  "duration": 1229550000,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Login",
  "description": "",
  "id": "purchasing-clothes-in-automation-practice-website;login;;3",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@automate1"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user Launches Application Using URL",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user Clicks The Sign In Button In Home Page",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user Enters The \"testdata47@gmail.com\" Username",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user Enters The \"ACD#45\" Password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user Clicks The Login Button And Then It Navigates To Dresses Section Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition_Automation.user_Launches_Application_Using_URL()"
});
formatter.result({
  "duration": 1840532200,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_The_Sign_In_Button_In_Home_Page()"
});
formatter.result({
  "duration": 1893114000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "testdata47@gmail.com",
      "offset": 17
    }
  ],
  "location": "Step_Definition_Automation.user_Enters_The_Username(String)"
});
formatter.result({
  "duration": 148810400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "ACD#45",
      "offset": 17
    }
  ],
  "location": "Step_Definition_Automation.user_Enters_The_Password(String)"
});
formatter.result({
  "duration": 143001500,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_The_Login_Button_And_Then_It_Navigates_To_Dresses_Section_Page()"
});
formatter.result({
  "duration": 1551481600,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Login",
  "description": "",
  "id": "purchasing-clothes-in-automation-practice-website;login;;4",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@automate1"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user Launches Application Using URL",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user Clicks The Sign In Button In Home Page",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user Enters The \"sample@gmail.com\" Username",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user Enters The \"s@467\" Password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user Clicks The Login Button And Then It Navigates To Dresses Section Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition_Automation.user_Launches_Application_Using_URL()"
});
formatter.result({
  "duration": 1861355400,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_The_Sign_In_Button_In_Home_Page()"
});
formatter.result({
  "duration": 2041029600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "sample@gmail.com",
      "offset": 17
    }
  ],
  "location": "Step_Definition_Automation.user_Enters_The_Username(String)"
});
formatter.result({
  "duration": 115720800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "s@467",
      "offset": 17
    }
  ],
  "location": "Step_Definition_Automation.user_Enters_The_Password(String)"
});
formatter.result({
  "duration": 109501800,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_The_Login_Button_And_Then_It_Navigates_To_Dresses_Section_Page()"
});
formatter.result({
  "duration": 1395566400,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Login",
  "description": "",
  "id": "purchasing-clothes-in-automation-practice-website;login;;5",
  "type": "scenario",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "line": 10,
      "name": "@automate1"
    }
  ]
});
formatter.step({
  "line": 12,
  "name": "user Launches Application Using URL",
  "keyword": "Given "
});
formatter.step({
  "line": 13,
  "name": "user Clicks The Sign In Button In Home Page",
  "keyword": "When "
});
formatter.step({
  "line": 14,
  "name": "user Enters The \"gnani9448@gmail.com\" Username",
  "matchedColumns": [
    0
  ],
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user Enters The \"Gnane@47\" Password",
  "matchedColumns": [
    1
  ],
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user Clicks The Login Button And Then It Navigates To Dresses Section Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition_Automation.user_Launches_Application_Using_URL()"
});
formatter.result({
  "duration": 1605942400,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_The_Sign_In_Button_In_Home_Page()"
});
formatter.result({
  "duration": 2243877300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "gnani9448@gmail.com",
      "offset": 17
    }
  ],
  "location": "Step_Definition_Automation.user_Enters_The_Username(String)"
});
formatter.result({
  "duration": 88612400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "Gnane@47",
      "offset": 17
    }
  ],
  "location": "Step_Definition_Automation.user_Enters_The_Password(String)"
});
formatter.result({
  "duration": 122506700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_The_Login_Button_And_Then_It_Navigates_To_Dresses_Section_Page()"
});
formatter.result({
  "duration": 2406467300,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Purchasing a dress",
  "description": "",
  "id": "purchasing-clothes-in-automation-practice-website;purchasing-a-dress",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 25,
      "name": "@automate2"
    }
  ]
});
formatter.step({
  "line": 27,
  "name": "user Clicks The Dresses",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "user Clicks The Evening Dresses",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user Clicks The Printed Dresses",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user Select The Quantity",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "user Select The \"M\" As Size",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "user Select The Color",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "user Clicks The Addtocart Button",
  "keyword": "And "
});
formatter.step({
  "line": 34,
  "name": "user Clicks The Proceed to Checkout Button",
  "keyword": "And "
});
formatter.step({
  "line": 35,
  "name": "user Verifies The Quantity And Click Proceed To Checkout Button",
  "keyword": "And "
});
formatter.step({
  "line": 36,
  "name": "user Verifies The Address and Click Proceed To Checkout Button",
  "keyword": "And "
});
formatter.step({
  "line": 37,
  "name": "user Accepts The Terms And Conditions",
  "keyword": "And "
});
formatter.step({
  "line": 38,
  "name": "user Clicks Proceed To Checkout Button",
  "keyword": "And "
});
formatter.step({
  "line": 39,
  "name": "user Clicks Paybybank Wire Button",
  "keyword": "And "
});
formatter.step({
  "line": 40,
  "name": "user Clicks Confirm Order Button and Navigates To Order Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_The_Dresses()"
});
formatter.result({
  "duration": 4175426900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_The_Evening_Dresses()"
});
formatter.result({
  "duration": 1997869600,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_The_Printed_Dresses()"
});
formatter.result({
  "duration": 3127883600,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Select_The_Quantity()"
});
formatter.result({
  "duration": 1077671100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "M",
      "offset": 17
    }
  ],
  "location": "Step_Definition_Automation.user_Select_The_As_Size(String)"
});
formatter.result({
  "duration": 152318000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Select_The_Color()"
});
formatter.result({
  "duration": 162953400,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_The_Addtocart_Button()"
});
formatter.result({
  "duration": 2158528600,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_The_Proceed_to_Checkout_Button()"
});
formatter.result({
  "duration": 3454095800,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Verifies_The_Quantity_And_Click_Proceed_To_Checkout_Button()"
});
formatter.result({
  "duration": 2235204900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Verifies_The_Address_and_Click_Proceed_To_Checkout_Button()"
});
formatter.result({
  "duration": 1761393700,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Accepts_The_Terms_And_Conditions()"
});
formatter.result({
  "duration": 128716100,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_Proceed_To_Checkout_Button()"
});
formatter.result({
  "duration": 2032680300,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_Paybybank_Wire_Button()"
});
formatter.result({
  "duration": 1719517500,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_Confirm_Order_Button_and_Navigates_To_Order_Confirmation_Page()"
});
formatter.result({
  "duration": 11170653400,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Purchasing 2nd product",
  "description": "",
  "id": "purchasing-clothes-in-automation-practice-website;purchasing-2nd-product",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 42,
      "name": "@automate3"
    }
  ]
});
formatter.step({
  "line": 44,
  "name": "user Clicks The Logo",
  "keyword": "When "
});
formatter.step({
  "line": 45,
  "name": "user Clicks The Tshirts",
  "keyword": "And "
});
formatter.step({
  "line": 46,
  "name": "user Clicks The Tshirtstype",
  "keyword": "And "
});
formatter.step({
  "line": 47,
  "name": "user Select The Quantity_tshirt",
  "keyword": "And "
});
formatter.step({
  "line": 48,
  "name": "user Select The \"L\" As Size_tshirt",
  "keyword": "And "
});
formatter.step({
  "line": 49,
  "name": "user Select The Color_tshirt",
  "keyword": "And "
});
formatter.step({
  "line": 50,
  "name": "user Clicks The Addtocart Button_tshirt",
  "keyword": "And "
});
formatter.step({
  "line": 51,
  "name": "user Clicks The Proceed to Checkout Button_tshirt",
  "keyword": "And "
});
formatter.step({
  "line": 52,
  "name": "user Verifies The Quantity And Click Proceed To Checkout Button_tshirt",
  "keyword": "And "
});
formatter.step({
  "line": 53,
  "name": "user Verifies The Address And Click Proceed To Checkout Button_tshirt",
  "keyword": "And "
});
formatter.step({
  "line": 54,
  "name": "user Accepts The Terms and Conditions_tshirt",
  "keyword": "And "
});
formatter.step({
  "line": 55,
  "name": "user Clicks The Proceed To Checkout Button_tshirts",
  "keyword": "And "
});
formatter.step({
  "line": 56,
  "name": "user Clicks The Paybybank Wire Button_tshirt",
  "keyword": "And "
});
formatter.step({
  "line": 57,
  "name": "user Clicks The Confirm Order Button_tshirt",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_The_Logo()"
});
formatter.result({
  "duration": 2680053400,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_The_Tshirts()"
});
formatter.result({
  "duration": 2381909900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_The_Tshirtstype()"
});
formatter.result({
  "duration": 2236096300,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Select_The_Quantity_tshirt()"
});
formatter.result({
  "duration": 991250100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "L",
      "offset": 17
    }
  ],
  "location": "Step_Definition_Automation.user_Select_The_As_Size_tshirt(String)"
});
formatter.result({
  "duration": 125522200,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Select_The_Color_tshirt()"
});
formatter.result({
  "duration": 151128800,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_The_Addtocart_Button_tshirt()"
});
formatter.result({
  "duration": 2160456500,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_The_Proceed_to_Checkout_Button_tshirt()"
});
formatter.result({
  "duration": 1706679600,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Verifies_The_Quantity_And_Click_Proceed_To_Checkout_Button_tshirt()"
});
formatter.result({
  "duration": 1585531000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Verifies_The_Address_And_Click_Proceed_To_Checkout_Button_tshirt()"
});
formatter.result({
  "duration": 1291223000,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Accepts_The_Terms_and_Conditions_tshirt()"
});
formatter.result({
  "duration": 123419400,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_The_Proceed_To_Checkout_Button_tshirts()"
});
formatter.result({
  "duration": 2310106600,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_The_Paybybank_Wire_Button_tshirt()"
});
formatter.result({
  "duration": 1330234900,
  "status": "passed"
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_The_Confirm_Order_Button_tshirt()"
});
formatter.result({
  "duration": 2965658100,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "Booking History",
  "description": "",
  "id": "purchasing-clothes-in-automation-practice-website;booking-history",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 59,
      "name": "@automate4"
    }
  ]
});
formatter.step({
  "line": 61,
  "name": "user Clicks The Myorders_Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definition_Automation.user_Clicks_The_Myorders_Page()"
});
formatter.result({
  "duration": 7802590600,
  "status": "passed"
});
});