Device Atlas Fullstack Test Project

Description

This project is a simple fullstack application where users can submit user-agents, which are then stored in a MongoDB database and displayed in a frontend table. It includes functionalities like input validation, table sorting, and pop-up notifications on successful or failed operations.

Technologies Used
Backend: Node.js, Express, MongoDB
Frontend: React, CSS
Database: MongoDB (via Mongoose)

<img width="460" alt="image" src="https://github.com/user-attachments/assets/53772e9c-119a-4eb2-9ff2-60f8d5226a84" />


Backend Setup (Express & MongoDB)

1 Open terminal and Navigate to the backend folder:

---> cd backend

2 Install dependencies if any:
---> npm install

3 Run the backend server:
---> node app.js

The backend will be running on http://localhost:5001


Frontend Setup (React)

1 Open 2nd Terminal and Navigate to the device-atlas-frontend folder:
---> cd device-atlas-frontend

2 Install dependencies:
---> npm install

3 Run the frontend application:
---> npm start

API Endpoints

POST /fetch-devices: Accepts user-agents and saves them to the database.

GET /devices: Retrieves all stored devices from the database.


Author
Aniket Shetty
