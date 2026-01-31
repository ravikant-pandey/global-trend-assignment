# 📝 Task Management Web Application  
**GLOBAL TREND – Full Stack Development Internship Assignment**

---

## 📌 Project Overview

This is a **full-stack Task Management Web Application** that allows users to securely create, view, update, and delete their own tasks.

The project demonstrates:
- Frontend development using **React**
- Backend REST APIs using **Node.js & Express**
- **JWT-based authentication** using HTTP-only cookies
- **MongoDB** for persistent data storage
- Clean architecture and best coding practices

---

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

---

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

---

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
