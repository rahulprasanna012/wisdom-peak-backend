const sqlite3 = require('sqlite3');
const { open } = require('sqlite');
const path = require('path');

const dbPath = path.join(__dirname, 'wisdom.db');

const initializeDB = async () => {
    const db = await open({
        filename: dbPath,
        driver: sqlite3.Database,
    });

    // Initialize tables if they don't exist
    await db.run(`
        CREATE TABLE IF NOT EXISTS users (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            username TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            password_hash TEXT NOT NULL
        );
    `);
    await db.run(`
        CREATE TABLE IF NOT EXISTS customers (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            name TEXT NOT NULL,
            email TEXT NOT NULL UNIQUE,
            phone TEXT NOT NULL,
            company TEXT,
            created_at TEXT,
            updated_at TEXT
        );
    `);
    await db.run(`
        CREATE TABLE IF NOT EXISTS interactions (
            id INTEGER PRIMARY KEY AUTOINCREMENT,
            customer_id INTEGER NOT NULL,
            note TEXT NOT NULL,
            follow_up_date TEXT,
            FOREIGN KEY (customer_id) REFERENCES customers(id)
        );
    `);
    return db;
};

module.exports = initializeDB;
