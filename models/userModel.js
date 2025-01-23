const bcrypt = require('bcryptjs');
const initializeDB = require('../db/db');

const createUser = async (username, email, password) => {
    const db = await initializeDB();  // Ensure we get the singleton DB instance
    
    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    


    // Insert user into the database
    try {
        const result = await db.run(
            'INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)',
            [username, email, hashedPassword]
        );

        return {
            id: result.lastID,
            username,
            email,
            
        };
    } catch (error) {
        throw new Error('Error creating user: ' + error.message);
    }
};

const getUserByEmail = async (email) => {
    const db = await initializeDB();  // Ensure we get the singleton DB instance
    const user = await db.get('SELECT * FROM users WHERE email = ?', [email]);
    return user;
};

module.exports = { getUserByEmail, createUser };
