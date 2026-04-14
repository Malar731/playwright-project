const { test, expect } = require('@playwright/test');

test('Get all products API', async ({ request }) => {

    const response = await request.get('https://automationexercise.com/api/productsList');
    const body = await response.json();

    expect(response.status()).toBe(200);

    // Validate response structure
    expect(body.products.length).toBeGreaterThan(0);

    // Validate first product
    expect(body.products[0]).toHaveProperty('name');
    expect(body.products[0]).toHaveProperty('price');

    console.log("Total products:", body.products.length);
});