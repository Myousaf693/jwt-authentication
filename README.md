# Project Setup & Usage Guide

This MERN stack project includes user sign-up and sign-in functionality with Redux Toolkit, React Router, Tailwind CSS, and token-based authentication using JWT.

## 🖥️ Frontend Setup
### Technologies Used:

React

Redux Toolkit

React Router DOM

Axios & Fetch (for API integration)

Tailwind CSS

React Icons

React Hot Toast (for notifications)

### ✅ Installation
cd frontend
npm install
This will install the following dependencies:
axios react-router-dom react-hot-toast react-icons
### ▶️ Run the Frontend
npm run dev

##  ⚙️ Backend Setup
### Technologies Used:

Node.js

Express

MongoDB (Mongoose)

JWT (jsonwebtoken)

bcryptjs (for password hashing)

dotenv (for environment variables)

cors (for cross-origin requests)

nodemon (for development)
### ✅ Installation
cd backend
npm install
This will install the following dependencies:
bcryptjs body-parser cors dotenv express mongoose jsonwebtoken nodemon
### ▶️ Run the Backend
npx nodemon index.js
### 🔐 Environment Variables
Create a .env file in the root of your backend directory, and add the following:

PORT=5000

MONGO_URI=your_mongodb_connection_string_with_credentials

JWT_SECRET=your_jwt_secret_key
