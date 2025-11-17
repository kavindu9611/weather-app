Weather App — Setup Guide

This document provides instructions for setting up and running the Weather App locally.

1. Clone the Repository
git clone https://github.com/kavindu9611/weather-app.git

2. Install Frontend Dependencies

Navigate to the frontend directory:

cd weather-app
cd frontend
npm install

3. Install Backend Dependencies

Return to the project root and navigate to the backend directory:

cd ..
cd backend
npm install

4. Configure Environment Variables

Inside the backend directory, create a .env file and add the following:

PORT=5000

5. Start the Frontend Application

Navigate back to the frontend directory and run:

cd ../frontend
npm run dev


This will start the frontend development server.

6. Start the Backend Server

Open a new terminal window or return to the backend directory:

cd ..
cd backend
npm run dev


The backend server will start on the port specified in the .env file.

Support

If you encounter any issues during setup, please contact:

Email: kavinduwickramasinghe1920@gmail.com