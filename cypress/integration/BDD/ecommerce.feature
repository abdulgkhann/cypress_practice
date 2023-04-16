Feature: e2 ecommerce validation

  Scenario: Checkout products
    Given I visit ecommerce site
    When I add items to cart
    And I checkout the items
    Then I ordered product sucessfully