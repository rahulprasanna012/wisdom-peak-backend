const express = require('express');
const {
    createNewCustomer,
    getCustomerList,
    getCustomer,
    updateCustomerDetails,
    deleteCustomerById,
} = require('../controllers/customerController');
const router = express.Router();

/**
 * @swagger
 * /customers:
 *   post:
 *     summary: Create a new customer
 *     description: This endpoint creates a new customer.
 *     parameters:
 *       - name: name
 *         in: body
 *         description: The name of the customer.
 *         required: true
 *         schema:
 *           type: string
 *       - name: email
 *         in: body
 *         description: The email of the customer.
 *         required: true
 *         schema:
 *           type: string
 *       - name: phone
 *         in: body
 *         description: The phone number of the customer.
 *         required: true
 *         schema:
 *           type: string
 *       - name: company
 *         in: body
 *         description: The company the customer works for.
 *         required: false
 *         schema:
 *           type: string
 *     responses:
 *       201:
 *         description: Customer created successfully
 */
router.post('/', createNewCustomer);

/**
 * @swagger
 * /customers:
 *   get:
 *     summary: Get a list of customers
 *     description: This endpoint fetches a list of customers with pagination.
 *     parameters:
 *       - name: page
 *         in: query
 *         description: The page number for pagination.
 *         required: false
 *         schema:
 *           type: integer
 *           default: 1
 *       - name: limit
 *         in: query
 *         description: The number of customers per page.
 *         required: false
 *         schema:
 *           type: integer
 *           default: 10
 *     responses:
 *       200:
 *         description: A list of customers
 */
router.get('/', getCustomerList);

/**
 * @swagger
 * /customers/{id}:
 *   get:
 *     summary: Get customer by ID
 *     description: This endpoint retrieves the details of a specific customer by ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The ID of the customer to fetch.
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Customer details retrieved successfully
 *       404:
 *         description: Customer not found
 */
router.get('/:id', getCustomer);

/**
 * @swagger
 * /customers/{id}:
 *   put:
 *     summary: Update customer details
 *     description: This endpoint updates an existing customer's details.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The ID of the customer to update.
 *         required: true
 *         schema:
 *           type: integer
 *       - name: name
 *         in: body
 *         description: The updated name of the customer.
 *         required: false
 *         schema:
 *           type: string
 *       - name: email
 *         in: body
 *         description: The updated email of the customer.
 *         required: false
 *         schema:
 *           type: string
 *       - name: phone
 *         in: body
 *         description: The updated phone number of the customer.
 *         required: false
 *         schema:
 *           type: string
 *       - name: company
 *         in: body
 *         description: The updated company name of the customer.
 *         required: false
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: Customer updated successfully
 *       404:
 *         description: Customer not found
 */
router.put('/:id', updateCustomerDetails);

/**
 * @swagger
 * /customers/{id}:
 *   delete:
 *     summary: Delete a customer
 *     description: This endpoint deletes a specific customer by ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The ID of the customer to delete.
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Customer deleted successfully
 *       404:
 *         description: Customer not found
 */
router.delete('/:id', deleteCustomerById);

module.exports = router;
