const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const initializeDB = require('../db/db');
const { getUserByEmail } = require('../models/userModel');

const registerUser = async (req, res) => {
    const { username, email, password } = req.body;

    try {
        const userExists = await getUserByEmail(email);
        if (userExists) {
            return res.status(400).json({ error: 'Email already exists' });
        }

        const db = await initializeDB();        
        const hashedPassword = await bcrypt.hash(password, 10);
        const result = await db.run(
            'INSERT INTO users (username, email, password_hash) VALUES (?, ?, ?)',
            [username, email, hashedPassword]
        );

        res.status(201).json({ id: result.lastID, username, email });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to register user' });
    }
};

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await getUserByEmail(email);
        if (!user) return res.status(400).json({ error: 'Invalid credentials' });

        const isMatch = await bcrypt.compare(password, user.password_hash);
        if (!isMatch) return res.status(400).json({ error: 'Invalid credentials' });

        const token = jwt.sign({ userId: user.id, role: user.role }, process.env.JWT_SECRET, { expiresIn: '1h' });
        res.status(200).json({ token });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to login user' });
    }
};

module.exports = { registerUser, loginUser };
