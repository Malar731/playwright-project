class Homepage {

    constructor(page){
        this.page = page;
        this.productsLink = "//ul[@class='nav navbar-nav']/li/a/i[@class='material-icons card_travel']"; 
    }

    async navigate (){
        //await this.page.goto("https://automationexercise.com"); // before using in playwright.config.js file
        //await this.page.goto('/'); // configured the baseurl in config.js file
        await this.page.goto('https://automationexercise.com'); 
    }

    async clickProducts(){
        await this.page.click(this.productsLink);
    }
}

module.exports = Homepage;