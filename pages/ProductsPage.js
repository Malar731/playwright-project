class ProductsPage {

    constructor(page){

        this.page = page
        this.allProductsText = "text=All Products";
        this.firstProductAddBtn = '(//a[@data-product-id="1"])[2]';
        this.viewCartBtn="//p[@class='text-center']/a";
    }

    async verifyProductPage(){
        await this.page.waitForURL(/products/)
        await this.page.locator(this.allProductsText).waitFor();
    }

    async addFirstProductToCart() {
        await this.page.click(this.firstProductAddBtn);
    }

    async clickViewCart() {
        await this.page.click(this.viewCartBtn);
    }

    async verifyProductAddedToCart() {
    const cartItems = await this.page.locator('//table[@id="cart_info_table"]/tbody/tr');
    await cartItems.first().waitFor();

    const count = await cartItems.count();
    console.log("Products in cart:", count);

    if (count !== 1) {
        throw new Error("Product not added correctly");
    }
}
}

module.exports = ProductsPage;