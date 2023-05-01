Feature: F_e2e ecommerce validation

  @Regression
  Scenario: S_Checkout products
    Given I visit ecommerce site
    When I add items to cart
    And I checkout the items
    Then I ordered product sucessfully

  @Smoke
  Scenario: Fill form details to shop
    Given I visit ecommerce site
    When I fill the form details
    |name|gender|
    |abdul gaffar|Female|
    Then I validate form details
    Then I select Shop page