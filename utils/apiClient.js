class ApiClient {

    constructor(request) {
        this.request = request;
        this.baseURL = 'https://automationexercise.com/api';
    }

    async getProducts() {
        return await this.request.get(`${this.baseURL}/productsList`);
    }
}

module.exports = ApiClient;