const initializeDB = require('../db/db');

// Create a new customer
const createCustomer = async (name, email, phone, company) => {

    const db = await initializeDB();
    const result = await db.run(
        'INSERT INTO customers (name, email, phone, company, created_at, updated_at) VALUES (?, ?, ?, ?, CURRENT_TIMESTAMP, CURRENT_TIMESTAMP)',
        [name, email, phone, company]
    );
    return { id: result.lastID, name, email, phone, company };
};

// Get customers with pagination
const getCustomers = async (page, limit) => {
    const db = await initializeDB();
    const offset = (page - 1) * limit;
    const customers = await db.all('SELECT * FROM customers LIMIT ? OFFSET ?', [limit, offset]);
    return customers;
};

// Get a customer by ID
const getCustomerById = async (id) => {
    const db = await initializeDB();
    const customer = await db.get('SELECT * FROM customers WHERE id = ?', [id]);
    return customer;
};

// Update a customer's details
const updateCustomer = async (id, name, email, phone, company) => {
    const db = await initializeDB();
    const result = await db.run(
        'UPDATE customers SET name = ?, email = ?, phone = ?, company = ?, updated_at = CURRENT_TIMESTAMP WHERE id = ?',
        [name, email, phone, company, id]
    );
    return result.changes > 0 ? { id, name, email, phone, company } : null;
};

// Delete a customer
const deleteCustomer = async (id) => {
    const db = await initializeDB();
    const result = await db.run('DELETE FROM customers WHERE id = ?', [id]);
    return result.changes > 0;
};

module.exports = { createCustomer, getCustomers, getCustomerById, updateCustomer, deleteCustomer };
