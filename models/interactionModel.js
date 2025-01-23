const initializeDB = require('../db/db');

// Log an interaction
const logInteraction = async (customerId, note, followUpDate) => {
    const db = await initializeDB();
    const result = await db.run(
        'INSERT INTO interactions (customer_id, note, follow_up_date) VALUES (?, ?, ?)',
        [customerId, note, followUpDate]
    );
    return { id: result.lastID, customerId, note, followUpDate };
};

// Get interactions by customer ID
const getInteractionsByCustomerId = async (customerId) => {
    const db = await initializeDB();
    const interactions = await db.all('SELECT * FROM interactions WHERE customer_id = ?', [customerId]);
    return interactions;
};

// Update an interaction
const updateInteraction = async (id, note, followUpDate) => {
    const db = await initializeDB();
    const result = await db.run(
        'UPDATE interactions SET note = ?, follow_up_date = ? WHERE id = ?',
        [note, followUpDate, id]
    );
    return result.changes > 0 ? { id, note, followUpDate } : null;
};

// Delete an interaction
const deleteInteraction = async (id) => {
    const db = await initializeDB();
    const result = await db.run('DELETE FROM interactions WHERE id = ?', [id]);
    return result.changes > 0;
};

module.exports = { logInteraction, getInteractionsByCustomerId, updateInteraction, deleteInteraction };
