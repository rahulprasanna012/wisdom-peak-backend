const express = require('express');
const {
    logCustomerInteraction,
    getCustomerInteractions,
    updateInteractionDetails,
    deleteInteractionById,
} = require('../controllers/interactionController');
const router = express.Router();

/**
 * @swagger
 * /interactions:
 *   post:
 *     summary: Log an interaction
 *     description: This endpoint logs a new interaction for a customer.
 *     parameters:
 *       - name: customerId
 *         in: body
 *         description: The ID of the customer for the interaction.
 *         required: true
 *         schema:
 *           type: integer
 *       - name: note
 *         in: body
 *         description: The note describing the interaction.
 *         required: true
 *         schema:
 *           type: string
 *       - name: followUpDate
 *         in: body
 *         description: The follow-up date for the interaction.
 *         required: false
 *         schema:
 *           type: string
 *           format: date
 *     responses:
 *       201:
 *         description: Interaction logged successfully
 */
router.post('/', logCustomerInteraction);

/**
 * @swagger
 * /interactions/{customerId}:
 *   get:
 *     summary: Get all interactions for a customer
 *     description: This endpoint retrieves all interactions for a specific customer.
 *     parameters:
 *       - name: customerId
 *         in: path
 *         description: The ID of the customer to fetch interactions for.
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: A list of interactions for the customer
 */
router.get('/:customerId', getCustomerInteractions);

/**
 * @swagger
 * /interactions/{id}:
 *   put:
 *     summary: Update an interaction
 *     description: This endpoint updates the details of an interaction.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The ID of the interaction to update.
 *         required: true
 *         schema:
 *           type: integer
 *       - name: note
 *         in: body
 *         description: The updated note for the interaction.
 *         required: false
 *         schema:
 *           type: string
 *       - name: followUpDate
 *         in: body
 *         description: The updated follow-up date for the interaction.
 *         required: false
 *         schema:
 *           type: string
 *           format: date
 *     responses:
 *       200:
 *         description: Interaction updated successfully
 *       404:
 *         description: Interaction not found
 */
router.put('/:id', updateInteractionDetails);

/**
 * @swagger
 * /interactions/{id}:
 *   delete:
 *     summary: Delete an interaction
 *     description: This endpoint deletes an interaction by ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: The ID of the interaction to delete.
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Interaction deleted successfully
 *       404:
 *         description: Interaction not found
 */
router.delete('/:id', deleteInteractionById);

module.exports = router;
