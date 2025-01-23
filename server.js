require('dotenv').config();
const express = require('express');
const swaggerUi = require('swagger-ui-express');
const swaggerSpec = require('./swagger/swaggerOptions');
const authRoutes = require('./routes/authRoutes');
const customerRoutes = require('./routes/customerRoutes');
const interactionRoutes = require('./routes/interactionRoutes');
const initializeDB = require('./db/db');

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// Initialize DB
initializeDB().then(() => {
    app.use('/api/auth', authRoutes);
    app.use('/api/customers', customerRoutes);
    app.use('/api/interactions', interactionRoutes);
    app.listen(PORT, () => {
    
    });
}).catch(err => {
    console.log('Failed to connect to the database', err);
});
