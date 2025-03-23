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

1) The web Page

<img width="1470" alt="Image" src="https://github.com/user-attachments/assets/fa04f934-61f5-441c-bba7-8da996379154" />

2) Input Validation

<img width="1021" alt="Image" src="https://github.com/user-attachments/assets/ebf77af1-f810-48cb-a8fa-4a8612957fb0" />

3) Input Validation

<img width="931" alt="Image" src="https://github.com/user-attachments/assets/b1fd5ff2-119e-488c-98a5-0310375fb57f" />

4) Post Request to save user agents and get only Tablet data.

<img width="1257" alt="Image" src="https://github.com/user-attachments/assets/64eeeccf-74bb-4823-94ec-0175dce81d9e" />

<img width="1262" alt="Image" src="https://github.com/user-attachments/assets/e4152837-5300-4177-aefd-f258f6b78ca9" />

5) Filters before and after sorting as per "Model, Vendor,OsName, OsVersion"

<img width="777" alt="Image" src="https://github.com/user-attachments/assets/81034636-61b2-40f7-94bb-7bbd338e5e7c" />

<img width="777" alt="Image" src="https://github.com/user-attachments/assets/75eb62cf-08c1-415d-8d65-92ddbf9a1047" />



Author
-Aniket Shetty
