const ENV = {
    dev: 'https://dev.automationexercise.com',
    qa: 'https://qa.automationexercise.com',
    prod: 'https://automationexercise.com'
};

const currentEnv = process.env.ENV || 'prod'; //default env is prod here

module.exports = {
    baseURL: ENV[currentEnv]
};