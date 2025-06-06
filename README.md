# On Demand Service Delivery (ODS)

This is a minimal proof-of-concept for a full-stack service booking platform.

## Backend
- **Node.js + Express + TypeScript** located in `server/`.
- Provides basic endpoints for registration, login, category management and booking management.
- Uses in-memory storage for simplicity. Replace with MongoDB in a real deployment.

### Running the Backend
1. Install dependencies:
   ```bash
   cd server
   npm install
   ```
2. Build and start the server:
   ```bash
   npm run build && npm start
   ```
   The API will be available on `http://localhost:3001`.

## Frontend
- **React** app in `client/` using CDN scripts.
- Fetches categories and bookings from the backend and displays them.

### Running the Frontend
Open `client/index.html` in your browser. Ensure the backend is running so API requests succeed.

## Features
- User registration and login endpoints.
- CRUD operations for service categories.
- Booking creation, update and deletion.
- Simple dashboard showing categories and existing bookings.

This project is intentionally lightweight and meant as a starting point for a more complete implementation.
