@Regression
  Feature: Registration functionality
    As a customer with an upcoming wedding I want create a list
  Scenario: As a customer I can Navigate to registration page
    Given  I am on Home Page
    When   I click on Create a List tab
    And    I enter Title "Ms"
    And    I enter First Name "Trupti"
    And    I enter Last Name "Patel"
    And    I click on referral
    And    I select "Google or Other Search"
    And    I enter Partner Title "Mr"
    And    I enter Partner First Name "Jagdish"
    And    I enter Partner Last Name "Patel"
    And    I select country name "United Kingdom"
    And    I enter Postcode "HA1 1RY"
    And    I click on my Address
    And    I enter Contact Number"07727629390"
    And    I click on date field
    And    I click on Forward Button
    And    I click on date
    And    I enter number of Guests "50"
    And    I enter email "tp"
    And    I enter password "wedding1234"
    And    I enter confirm password "wedding1234"
    And    I click on submit button
    Then   I can Succesfully Register

    Scenario: As a customer I can Navigate to LogIn page

      Given  I am at Homepage
      When   I click On Login Bar
      And    I enter Email Address "tp"
      And    I enter password to login "wedding1234"
      And    I click on submit Button
      Then   I can successfully Login









