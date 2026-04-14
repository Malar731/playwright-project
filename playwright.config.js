const { baseURL } = require("./utils/env");

module.exports = {
    use: {
        headless: false,
        baseURL: baseURL
        //baseURL: 'https://automationexercise.com'
    }
};