
@Filter
Feature: personalised gift list
  As a customer with an upcoming wedding I want to be able to find products to my taste
 Scenario Outline: User should search product candles and filter by price

    Given I am on home page
    And   I click on Products
    And   i click on Search
    And   I send text in search bar "Candles"
    When  I select candle & Diffusers
    And   I want candles in the "<filters>" price range
    Then  I should see candles as per filter price

    Examples:
    | filters    |
    |  <£20      |
    |  £20-£39   |
    |  £40-£49   |
    |  £50-£74   |
    |  £75-149   |
    |  £150+     |

