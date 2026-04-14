const { Given, When, Then, setDefaultTimeout } = require('@cucumber/cucumber'); //import cucumber functions
const { chromium } = require('playwright'); // import playwright browsers

//integrating with POM
const HomePage = require('./../../pages/HomePage');
const ProductsPage = require('./../../pages/ProductsPage');

setDefaultTimeout(30000); // 30 seconds

let browser; //browser - to launch browser
let page; //page - to interact with website

let homepage;
let productpage;

Given('user is on the home page', async function () {
    browser = await chromium.launch({ headless: false }); // opens chrome browser in headed mode
    const context = await browser.newContext(); // create context == like a fresh browser session without cookies and cache
    page = await context.newPage(); // opens new tab -- actual browser tab

    //await page.goto('https://automationexercise.com'); // navigates to site

    homepage = new HomePage(page);
    productpage = new ProductsPage(page);

    await homepage.navigate();
});

When('user clicks on products', async function () {
    //await page.click("//ul[@class='nav navbar-nav']/li/a/i[@class='material-icons card_travel']"); // click products

    await homepage.clickProducts();
});

Then('user should see the products page', async function () {
    //await page.waitForURL(/products/); // waits until URL contains "products"

    await productpage.verifyProductPage();
 
});

Then('product should be added to cart successfully', async function () {
    await page.waitForURL(/view_cart/);
    await ProductsPage.verifyProductAddedToCart();

    await browser.close();
});
