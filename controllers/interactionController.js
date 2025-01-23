const { logInteraction, getInteractionsByCustomerId, updateInteraction, deleteInteraction } = require('../models/interactionModel');

// Log an interaction
const logCustomerInteraction = async (req, res) => {
    const { customerId, note, followUpDate } = req.body;
    try {
        const interaction = await logInteraction(customerId, note, followUpDate);
        res.status(201).json(interaction);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to log interaction' });
    }
};

// Get interactions for a customer
const getCustomerInteractions = async (req, res) => {
    const { customerId } = req.params;
    try {
        const interactions = await getInteractionsByCustomerId(customerId);
        res.status(200).json(interactions);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to retrieve interactions' });
    }
};

// Update an interaction
const updateInteractionDetails = async (req, res) => {
    const { id } = req.params;
    const { note, followUpDate } = req.body;
    try {
        const updatedInteraction = await updateInteraction(id, note, followUpDate);
        if (!updatedInteraction) return res.status(404).json({ error: 'Interaction not found' });
        res.status(200).json(updatedInteraction);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to update interaction' });
    }
};

// Delete an interaction
const deleteInteractionById = async (req, res) => {
    const { id } = req.params;
    try {
        const isDeleted = await deleteInteraction(id);
        if (!isDeleted) return res.status(404).json({ error: 'Interaction not found' });
        res.status(200).json({ message: 'Interaction deleted successfully' });
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Failed to delete interaction' });
    }
};

module.exports = { logCustomerInteraction, getCustomerInteractions, updateInteractionDetails, deleteInteractionById };
