# CRM System API

A backend system for managing customers, users, and interactions, built using Node.js, Express, and SQLite.

## **Features**

- **User Authentication**: Register, login, and JWT-based authentication.
- **Customer Management**: CRUD operations on customer data.
- **Interaction Management**: Log and manage interactions with customers.
- **API Documentation**: Full API reference and Swagger UI.

## **Base URL**

The base URL for accessing the API:https://wisdom-peak-backend-36s1.onrender.com

## **API DOC**

Doc-Link :[CRM_API_Documentation.pdf](https://github.com/user-attachments/files/18524499/CRM_API_Documentation.pdf)



Replace `wisdom-serice` with the actual name of your Heroku app or your server's domain/IP.

## **Authentication**

### **Register User**

- **Endpoint**: `/api/auth/register`
- **Method**: `POST`
- **Description**: Registers a new user.
  
  **Request**:
  ```json
  {
      "username": "john_doe",
      "email": "john@example.com",
      "password": "securepassword"
  }



Response:

json
{
    "id": 1,
    "username": "john_doe",
    "email": "john@example.com"
}
Login User
Endpoint: /api/auth/login

Method: POST

Description: Authenticates a user and returns a JWT token.

Request:

json
{
    "email": "john@example.com",
    "password": "securepassword"
}
Response:

json
{
    "token": "jwt-token"
}
Customer Management
Get All Customers
Endpoint: /api/customers

Method: GET

Description: Retrieves a paginated list of customers.

Query Parameters:

page: (optional) Page number (default: 1)
limit: (optional) Number of items per page (default: 10)
Response:

json

{
    "customers": [
        {
            "id": 1,
            "name": "Acme Inc",
            "email": "contact@acme.com",
            "phone": "1234567890",
            "company": "Acme",
            "created_at": "2025-01-01",
            "updated_at": "2025-01-02"
        }
    ],
    "pagination": {
        "page": 1,
        "limit": 5,
        "total": 15
    }
}
Create a Customer
Endpoint: /api/customers

Method: POST

Description: Adds a new customer.

Request:

json

{
    "name": "Acme Inc",
    "email": "contact@acme.com",
    "phone": "1234567890",
    "company": "Acme"
}
Response:

json

{
    "id": 1,
    "name": "Acme Inc",
    "email": "contact@acme.com",
    "phone": "1234567890",
    "company": "Acme",
    "created_at": "2025-01-01",
    "updated_at": "2025-01-01"
}
Interaction Management
Get Interactions for a Customer
Endpoint: /api/customers/:customerId/interactions

Method: GET

Description: Retrieves interactions for a specific customer.

Response:

json

{
    "interactions": [
        {
            "id": 1,
            "customer_id": 1,
            "note": "Followed up regarding contract details.",
            "follow_up_date": "2025-01-10"
        }
    ]
}
Swagger API Documentation
You can view the Swagger API documentation at the following URL:


https://wisdom-peak-backend-36s1.onrender.com/api-docs
The Swagger UI provides interactive API documentation, allowing you to explore all available endpoints, test them, and view request/response examples.

Environment Variables
Make sure to configure the following environment variables on your server or in your .env file:

PORT: The port on which the server runs (default: 3000).
DATABASE_URL:https://wisdom-peak-backend-36s1.onrender.com
