# RiseKit (Backend)

##  Frontend
https://github.com/eramjabeen1/jabeen_eram_client_risekitcapstone.git


## Overview

This is the **backend** Express server and API for RiseKit, a wellness and journaling dashboard built to support developers especially parents, career switchers, and emotionally overwhelmed tech learners.

The server handles user authentication, journal entry storage, and all backend CRUD operations. It connects to a MongoDB Atlas database and serves a RESTful API consumed by the React frontend.

---

## Core Features

- RESTful API endpoints for:
  - Creating, reading, updating, deleting journal entries
- Optional JWT authentication
  - Token stored in localStorage on frontend
- Protected routes for logged-in users
- MongoDB + Mongoose schema for journal data

## Tech Stack
Node.js
Express
MongoDB (Atlas)
Mongoose
dotenv for environment configuration
JWT for authentication (can be toggled off for test mode)

## API Endpoints
GET 
api/journal
Get all journal entries for user

POST
/api/journal
Create a new journal entry

PUT
/api/journal/:id
Update an entry by ID

DELETE
/api/journal/:id
Delete an entry by ID

GET
/api/journal/seed
Add test entries (non-auth)

Auth endpoints:
POST
/api/auth/register
Register new user

POST
/api/auth/login
Login and get JWT token

## Setup Instructions
1. Clone this repo: git clone https://github.com/your-username/risekit-backend.git
cd risekit-backend
2. Install dependencies: npm install
3. Create a .env file: PORT=5000
MONGO_URI=your-mongodb-atlas-url
JWT_SECRET=your-secret
4.Start the server: npm run dev

## Database Schemas

## Current Status

## In Progress

## Acknowledgements

## Reflections
