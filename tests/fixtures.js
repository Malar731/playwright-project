const base = require('@playwright/test'); // nothing but const {test,expect}
const HomePage = require('../pages/HomePage'); //POM classes
const ProductsPage = require('../pages/ProductsPage'); //POM classes

exports.test = base.test.extend({  //extend playwright test

    homePage: async ({ page }, use) => { //Create a fixture called homePage and It gets "page" automatically from Playwright
        const homePage = new HomePage(page); //Create object of HomePage class
        await homePage.navigate();
        await use(homePage); // pass this object to the test
    },

    productsPage: async ({ page }, use) => {
        const productsPage = new ProductsPage(page);
        await use(productsPage);
    }
});

exports.expect = base.expect;