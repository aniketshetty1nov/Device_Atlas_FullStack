Device Atlas Fullstack Test Project
----------------------------------------

Description

This project is a simple fullstack application where users can submit user-agents, which are then stored in a MongoDB database and displayed in a frontend table. It includes functionalities like input validation, table sorting, and pop-up notifications on successful or failed operations.

Technologies Used
Backend: Node.js, Express, MongoDB
Frontend: React, CSS
Database: MongoDB (via Mongoose)

<img width="460" alt="image" src="https://github.com/user-attachments/assets/53772e9c-119a-4eb2-9ff2-60f8d5226a84" />

------------------------------------- 
Backend Setup (Express & MongoDB)
-------------------------------------
1 Open terminal and Navigate to the backend folder:

---> cd backend

2 Install dependencies if any:
---> npm install

3 Run the backend server:
---> node app.js

The backend will be running on http://localhost:5001

-------------------------------------
Frontend Setup (React)
-------------------------------------

1 Open 2nd Terminal and Navigate to the device-atlas-frontend folder:
---> cd device-atlas-frontend

2 Install dependencies:
---> npm install

3 Run the frontend application:
---> npm start

API Endpoints

POST /fetch-devices: Accepts user-agents and saves them to the database.
GET /devices: Retrieves all stored devices from the database.

--------------------------------------------------------------------------
----------------------------The User Interface----------------------------
--------------------------------------------------------------------------

1) The web Page

<img width="1464" alt="Image" src="https://github.com/user-attachments/assets/083ebe3b-73c9-4b47-a8a6-6a1e1d4e22a4" />


2) The Input Validation for Blank User Agents

<img width="991" alt="image" src="https://github.com/user-attachments/assets/ae25bc8e-2ea6-410f-94d0-87ac422b903a" />


3) Input Validation for checking valid User Agents

<img width="991" alt="image" src="https://github.com/user-attachments/assets/8b30f6ed-c932-4be0-99e0-99a70f51e6d5" />


4) Post Request to get the device data from DeviceAtlas web and save them in mongoDB database and update it in the UI

<img width="1133" alt="image" src="https://github.com/user-attachments/assets/e2f47394-55be-433e-80f4-0ff86ac17e43" />

5) Filters for Tablet Devices only

<img width="1138" alt="image" src="https://github.com/user-attachments/assets/51b1c6fa-5483-4fb1-98f0-aa134bb44234" />


6) Filters for Mobile Devices only

<img width="1139" alt="image" src="https://github.com/user-attachments/assets/80954ef8-3896-4502-bdea-f2343aeb87e0" />


7) Filters before sorting as per "OsVersion"

<img width="560" alt="image" src="https://github.com/user-attachments/assets/314478b3-fc82-431c-bb8d-98cca32f69b5" />

8) Filters after sorting as per "OsVersion"

<img width="560" alt="image" src="https://github.com/user-attachments/assets/a03a579f-598f-47ca-aee6-a1d376e2290a" />




Author - Aniket Shetty
