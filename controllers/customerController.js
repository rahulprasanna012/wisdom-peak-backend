const { createCustomer, getCustomers, getCustomerById, updateCustomer, deleteCustomer } = require('../models/customerModel');

// Create a new customer
const createNewCustomer = async (req, res) => {
    const { name, email, phone, company } = req.body;
    try {
        const customer = await createCustomer(name, email, phone, company);
        res.status(201).json(customer);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to create customer' });
    }
};

// Get customer list with pagination
const getCustomerList = async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    try {
        const customers = await getCustomers(page, limit);
        res.status(200).json(customers);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch customers' });
    }
};

// Get customer details by ID
const getCustomer = async (req, res) => {
    const { id } = req.params;
    try {
        const customer = await getCustomerById(id);
        if (!customer) return res.status(404).json({ error: 'Customer not found' });
        res.status(200).json(customer);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to fetch customer' });
    }
};

// Update customer details
const updateCustomerDetails = async (req, res) => {
    const { id } = req.params;
    const { name, email, phone, company } = req.body;
    try {
        const updatedCustomer = await updateCustomer(id, name, email, phone, company);
        if (!updatedCustomer) return res.status(404).json({ error: 'Customer not found' });
        res.status(200).json(updatedCustomer);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update customer' });
    }
};

// Delete customer
const deleteCustomerById = async (req, res) => {
    const { id } = req.params;
    try {
        const isDeleted = await deleteCustomer(id);
        if (!isDeleted) return res.status(404).json({ error: 'Customer not found' });
        res.status(200).json({ message: 'Customer deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to delete customer' });
    }
};

module.exports = { createNewCustomer, getCustomerList, getCustomer, updateCustomerDetails, deleteCustomerById };
