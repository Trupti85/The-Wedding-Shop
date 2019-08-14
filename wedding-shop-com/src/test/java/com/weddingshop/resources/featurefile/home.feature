@Home
Feature: Home Page functionality
  As a customer I can explore The Wedding Shop Homepage
  Scenario Outline: As a customer I can Navigate to Home Page

    Given  I am on home page
    When   I click On "<Options>"
    Then   I can successfully navigate HomePage

    Examples:
      | Options               |
      |  Brands               |
      |  Products             |
      |  Funds                |
      |  Travel & Experience  |
      |  Showrooms            |
      |  Inspiration          |
      |  About                |





