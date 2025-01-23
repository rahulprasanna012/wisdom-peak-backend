const express = require('express');
const { registerUser, loginUser } = require('../controllers/authController');
const router = express.Router();

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication related operations
 */

/**
 * @swagger
 * path:
 *  /api/auth/register:
 *    post:
 *      summary: Register a new user
 *      tags: [Auth]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                username:
 *                  type: string
 *                  description: User's username
 *                email:
 *                  type: string
 *                  description: User's email
 *                password:
 *                  type: string
 *                  description: User's password
 *      responses:
 *        201:
 *          description: User registered successfully
 *        400:
 *          description: Invalid request
 *        500:
 *          description: Internal server error
 */
router.post('/register', registerUser);

/**
 * @swagger
 * path:
 *  /api/auth/login:
 *    post:
 *      summary: Login a user and return a JWT
 *      tags: [Auth]
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              properties:
 *                email:
 *                  type: string
 *                  description: User's email
 *                password:
 *                  type: string
 *                  description: User's password
 *      responses:
 *        200:
 *          description: JWT token for successful login
 *        400:
 *          description: Invalid credentials
 *        500:
 *          description: Internal server error
 */
router.post('/login', loginUser);

module.exports = router;
