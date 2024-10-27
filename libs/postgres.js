require('dotenv').config()
const { Client } = require('pg')

async function Connection() {
    const client = new Client({
        host: process.env.DB_HOST,
        port: 5432,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_DATABASE
    })
    await client.connect()
    return client;
}

module.exports = Connection;