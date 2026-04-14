Feature: Product Navigation

  Scenario: User navigates to Products page

   Given user is on the home page
   When user clicks on products
   And user adds a product to cart
   Then product should be added to cart successfully