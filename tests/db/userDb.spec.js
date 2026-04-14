const { test, expect } = require('@playwright/test');
const { getUsers } = require('../../utils/dbUtils');

test('Validate users in DB', async () => {

    const users = await getUsers();

    console.log("Users:", users);

    expect(users.length).toBeGreaterThan(0);
});