//const { test, expect } = require('@playwright/test');
const homePage = require('../../pages/HomePage');
const productsPage = require('../../pages/ProductsPage');
const {test, expect} = require ('../fixtures'); // to use fixture instead of test (1st line)

// commenting after adding fixtures
// let homepage;
// let productpage;

//test.beforeEach(async ({ page }) => {
   // homePage = new homePage(page);
    //productsPage = new productsPage(page);

   // await homePage.navigate();
//});

test('verify user can navigate to Products page', async ({ homePage, productsPage }) => {

    // //open website
    // await page.goto("https://automationexercise.com");

    // //click products menu
    // await page.click("//ul[@class='nav navbar-nav']/li/a/i[@class='material-icons card_travel']");

    // //verify product page is visible
    // await expect(page).toHaveURL(/products/);

    // //Verify "All Products" text is visible
    // await expect(page.locator('text=All Products')).toBeVisible();

    // before adding beforeEach
    // const homepage = new Homepage(page)
    // const productpage = new Productspage(page)
    // await homepage.navigate();

    await homePage.clickProducts();
    await productsPage.verifyProductPage();

});

test.afterEach(async ({ page }) => {
    console.log("Test Completed")
});