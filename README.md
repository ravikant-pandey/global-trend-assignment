# 📝 Task Management Web Application  
**GLOBAL TREND – Full Stack Development Internship Assignment**


## 📌 Project Overview

This is a **full-stack Task Management Web Application** that allows users to securely create, view, update, and delete their own tasks.

The project demonstrates:
- Frontend development using **React**
- Backend REST APIs using **Node.js & Express**
- **JWT-based authentication** using HTTP-only cookies
- **MongoDB** for persistent data storage
- Clean architecture and best coding practices


## 🚀 Features

### 🔐 Authentication
- User Signup & Login
- JWT authentication using **HTTP-only cookies**
- Secure logout
- Protected backend routes

### ✅ Task Management
- Create tasks
- View logged-in user’s tasks only
- Update task (title, description, status)
- Delete task
- Latest tasks displayed first
- Empty state handling (No tasks yet)

### 🎨 Frontend
- Responsive UI using **React + Tailwind CSS**
- Reusable components (Navbar, TaskCard, Footer)
- Mobile-friendly design
- Clean and simple UI

### 🗄️ Backend
- RESTful APIs
- User-based authorization (ownership checks)
- MongoDB with Mongoose
- Organized folder structure

## 🛠️ Tech Stack

### Frontend
- React (Vite)
- Tailwind CSS
- Axios
- React Router DOM
- Lucide React (Icons)

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- JWT (jsonwebtoken)
- bcryptjs
- cookie-parser
- dotenv
- cors
- nodemon

## 1️⃣ Clone the Repository
git clone https://github.com/ravikant-pandey/global-trend-assignment
cd global-trend-assignment


🔧 Backend Setup (Node.js + Express)
## 2️⃣ Navigate to Backend Folder
cd backend


### Backend Folder Overview

This folder contains the complete server-side logic of the application, including:

- **API Routes**  
  Define all RESTful endpoints for authentication and task management.

- **Controllers**  
  Handle request logic such as creating, updating, deleting tasks, and user authentication.

- **Models**  
  Mongoose schemas for `User` and `Task`, defining the structure of database documents.

- **Database Connection**  
  MongoDB connection setup using Mongoose for persistent data storage.

- **Authentication Logic**  
  JWT-based authentication implemented with HTTP-only cookies, including middleware to protect routes.


## 3️⃣ Install Backend Dependencies
npm install


This installs all required backend libraries such as:

- express  
- mongoose  
- jsonwebtoken  
- bcryptjs  
- cookie-parser  
- cors  
- nodemon


## 4️⃣ Create Backend Environment File

Create a file named .env inside the backend folder.

- PORT=5000
- MONGO_URI=mongodb://127.0.0.1:27017/taskmanager
- JWT_SECRET=your_jwt_secret_key
- NODE_ENV=development

**Explanation:**

- PORT → Backend server port
- MONGO_URI → MongoDB connection string
- JWT_SECRET → Secret key for signing JWT tokens
- CORS

## ⚠️ .env file is not pushed to GitHub for security reasons.

## 5️⃣ Start Backend Server
npm run dev

**If everything is correct, you should see:**
- MongoDB connected
- Server running on port 5000


Backend URL:
http://localhost:port

🎨 Frontend Setup (React + Vite)
## 6️⃣ Navigate to Frontend Folder

Open a new terminal, then:
cd frontend

## 7️⃣ Install Frontend Dependencies
npm install

**This installs:**

- React
- React Router DOM
- Axios
- Tailwind CSS
- Lucide React icons

## 8️⃣ Create Frontend Environment File
Create a file named .env inside the frontend folder.
VITE_BACKEND_URL=http://localhost:5000

## 9️⃣ Start Frontend Development Server
npm run dev


# Frontend URL:

http://localhost:5173

## 📂 Project Structure

GLOBAL-TREND-ASSIGNMENT/
│
├── backend/
│   ├── src/
│   │   ├── controllers/
│   │   ├── db/
│   │   ├── middleware/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── util/
│   │   └── index.js
│   │
│   ├── .env
│   ├── .gitignore
│   ├── package.json
│   └── package-lock.json
│
├── frontend/
│   ├── public/
│   ├── src/
│   │   ├── assets/
│   │   ├── components/
│   │   ├── context/
│   │   ├── page/
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   │
│   ├── .env
│   ├── index.html
│   ├── vite.config.js
│   ├── eslint.config.js
│   ├── package.json
│   └── package-lock.json
│
├── preview1.png
├── preview2.png
├── preview3.png
├── preview4.png
└── README.md
