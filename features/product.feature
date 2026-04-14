Feature: Product functionality

  Scenario: User navigates to Products page and adds product to cart

    Given user is on the home page
    When user clicks on products
    And user adds a product to cart
    Then user should see the products page
    And product should be added to cart successfully
