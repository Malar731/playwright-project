const mysql = require('mysql2/promise');

async function getConnection() {
    return await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'root@73',
        database: 'ecommerce'
    });
}

async function getUsers() {
    const conn = await getConnection();
    const [rows] = await conn.execute('SELECT * FROM users');
    return rows;
}

module.exports = { getUsers };