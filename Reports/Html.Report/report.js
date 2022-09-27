$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("adactin.feature");
formatter.feature({
  "line": 1,
  "name": "Hotel Booking In Adactin Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application",
  "keyword": "Feature"
});
formatter.scenario({
  "line": 3,
  "name": "User Login In The Web Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-login-in-the-web-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 2,
      "name": "@smoketest"
    }
  ]
});
formatter.step({
  "line": 4,
  "name": "user launch The Adactin Application",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "user Enter The User In Username Feild",
  "keyword": "When "
});
formatter.step({
  "line": 6,
  "name": "user Enter The Password In Password Feild",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "user Click The Login Button And It Navigates To Search Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_launch_The_Adactin_Application()"
});
formatter.result({
  "duration": 22109971400,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Enter_The_User_In_Username_Feild()"
});
formatter.result({
  "duration": 146769200,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Enter_The_Password_In_Password_Feild()"
});
formatter.result({
  "duration": 88189500,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Click_The_Login_Button_And_It_Navigates_To_Search_Hotel_Page()"
});
formatter.result({
  "duration": 1866996500,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "User Select The Hotel In Adactin Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-select-the-hotel-in-adactin-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 8,
      "name": "@smoketest"
    }
  ]
});
formatter.step({
  "line": 10,
  "name": "user Select The Location In Adactin Application",
  "keyword": "When "
});
formatter.step({
  "line": 11,
  "name": "user Select The Hotel In Adactin Application",
  "keyword": "And "
});
formatter.step({
  "line": 12,
  "name": "user Select The Room Type   In Adactin Application",
  "keyword": "And "
});
formatter.step({
  "line": 13,
  "name": "user Select The Number of Rooms In Adactin Application",
  "keyword": "And "
});
formatter.step({
  "line": 14,
  "name": "user Select The Check  In Date In Adactin Application",
  "keyword": "And "
});
formatter.step({
  "line": 15,
  "name": "user Select The Check Out Date In Adactin Application",
  "keyword": "And "
});
formatter.step({
  "line": 16,
  "name": "user Select The Adults Per Room  In Adactin Application",
  "keyword": "And "
});
formatter.step({
  "line": 17,
  "name": "user Select The Childrens Per Room  In Adactin Application",
  "keyword": "And "
});
formatter.step({
  "line": 18,
  "name": "user Click The Search Button And It Navigates To Hotel Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_Select_The_Location_In_Adactin_Application()"
});
formatter.result({
  "duration": 227260200,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Select_The_Hotel_In_Adactin_Application()"
});
formatter.result({
  "duration": 132165100,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Select_The_Room_Type_In_Adactin_Application()"
});
formatter.result({
  "duration": 112068400,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Select_The_Number_of_Rooms_In_Adactin_Application()"
});
formatter.result({
  "duration": 205190900,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Select_The_Check_In_Date_In_Adactin_Application()"
});
formatter.result({
  "duration": 129530900,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Select_The_Check_Out_Date_In_Adactin_Application()"
});
formatter.result({
  "duration": 187634700,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Select_The_Adults_Per_Room_In_Adactin_Application()"
});
formatter.result({
  "duration": 345054500,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Select_The_Childrens_Per_Room_In_Adactin_Application()"
});
formatter.result({
  "duration": 340641200,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Click_The_Search_Button_And_It_Navigates_To_Hotel_Confirmation_Page()"
});
formatter.result({
  "duration": 879026000,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "User Confirm The Hotel In Adactin Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-confirm-the-hotel-in-adactin-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 19,
      "name": "@smoketest"
    }
  ]
});
formatter.step({
  "line": 21,
  "name": "user Confirm The Hotel By Selecting The Select Button",
  "keyword": "When "
});
formatter.step({
  "line": 22,
  "name": "user Click The continue Button And It Navigates To Book A Hotel Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_Confirm_The_Hotel_By_Selecting_The_Select_Button()"
});
formatter.result({
  "duration": 178401700,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Click_The_continue_Button_And_It_Navigates_To_Book_A_Hotel_Page()"
});
formatter.result({
  "duration": 840494200,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "User Book Hotel In Adactin Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-book-hotel-in-adactin-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 23,
      "name": "@sanitytest"
    }
  ]
});
formatter.step({
  "line": 25,
  "name": "user Enter The First Name In The Feild",
  "keyword": "When "
});
formatter.step({
  "line": 26,
  "name": "user Enter The Last Name In The Feild",
  "keyword": "And "
});
formatter.step({
  "line": 27,
  "name": "user Enter The Billing Address In The Feild",
  "keyword": "And "
});
formatter.step({
  "line": 28,
  "name": "user Enter The Credit Card Number In The Feild",
  "keyword": "And "
});
formatter.step({
  "line": 29,
  "name": "user Select The Credit Card Type  In The Application",
  "keyword": "And "
});
formatter.step({
  "line": 30,
  "name": "user Select The Credit Card Expire Month In The Application",
  "keyword": "And "
});
formatter.step({
  "line": 31,
  "name": "user Select The Credit Card Expire Year In The Application",
  "keyword": "And "
});
formatter.step({
  "line": 32,
  "name": "user Select The Credit Card Cvv Number  In The Application",
  "keyword": "And "
});
formatter.step({
  "line": 33,
  "name": "user Click The Book Now  Button And It Navigates To Booking Confirmation Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_Enter_The_First_Name_In_The_Feild()"
});
formatter.result({
  "duration": 132717900,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Enter_The_Last_Name_In_The_Feild()"
});
formatter.result({
  "duration": 95779200,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Enter_The_Billing_Address_In_The_Feild()"
});
formatter.result({
  "duration": 104074400,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Enter_The_Credit_Card_Number_In_The_Feild()"
});
formatter.result({
  "duration": 123796500,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Select_The_Credit_Card_Type_In_The_Application()"
});
formatter.result({
  "duration": 209906200,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Select_The_Credit_Card_Expire_Month_In_The_Application()"
});
formatter.result({
  "duration": 217282200,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Select_The_Credit_Card_Expire_Year_In_The_Application()"
});
formatter.result({
  "duration": 235853400,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Select_The_Credit_Card_Cvv_Number_In_The_Application()"
});
formatter.result({
  "duration": 100005300,
  "status": "passed"
});
formatter.match({
  "location": "Stepdefinition.user_Click_The_Book_Now_Button_And_It_Navigates_To_Booking_Confirmation_Page()"
});
formatter.result({
  "duration": 67868200,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "User Confirm Booking In Adactin Application",
  "description": "",
  "id": "hotel-booking-in-adactin-application;user-confirm-booking-in-adactin-application",
  "type": "scenario",
  "keyword": "Scenario",
  "tags": [
    {
      "line": 34,
      "name": "@sanitytest"
    }
  ]
});
formatter.step({
  "line": 36,
  "name": "user Click The Log Out Button In The Adactin Application and It Navigates To Home Page",
  "keyword": "Then "
});
formatter.match({
  "location": "Stepdefinition.user_Click_The_Log_Out_Button_In_The_Adactin_Application_and_It_Navigates_To_Home_Page()"
});
formatter.result({
  "duration": 1068976900,
  "status": "passed"
});
});