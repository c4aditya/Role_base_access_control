# Assignment foRole_base_access_control

This is the full-stack blog application where i use React.js , node.js , mongodb , expressJs for CSS i will use Tailwind Css and CSS3

# Frontend Setup 

npm create vite@latest
paroject_name [frontend]
package_name [package.json]
cd project_name 
npm install
npm run dev  [for run the frontend ]


# backend Setup 

npm init -y 
npm install express
npm install mongoose 
npm install dotenv 
npm install nodemon 

# bckend file structure 

##### Project Description: Blog Platform with Role-Based Access Control

# Major Features
 - User Authentication & Authorization
 - Secure signup and login for all users
 - Passwords hashed with bcrypt
 - JWT-based authentication, stored in httpOnly cookies
 - Role-based access control: "admin" and "user"

# 2. Blog Post Management

- Admins can create, update, and delete blog posts
- Users can view all blog posts

# 3. Dashboards
Admin Dashboard:

Create new blog posts

Edit/update existing posts

Delete any post

View all posts in a list/grid

User Dashboard:

View all blog posts created by admins

Read post title and description

# 4. Secure API
Protected routes for admin actions (using middleware)

Public route for fetching all posts (for users)

All sensitive data (like passwords) never sent to frontend

# 5. Clean Project Structure
Backend:

config/ (database connection)

controller/ (all logic for auth & posts)

model/ (Mongoose schemas)

routes/ (API endpoints)

middlewares/ (auth/role middleware)

.env (secrets)

server.js (entry point)

Frontend:

components/ (reusable UI)

pages/ (Login, Signup, Home, etc.)

dashboard/ (AdminDashboard, UserDashboard)

styles/ (CSS/Tailwind)

App.jsx, main.jsx (entry points)

# config

this in file write the code of Database connection 

# controller 

In this code all the logic are implemented for auth and authR 

# Routes 

in this file all the routes are define ie - signUp , login, Admin 

# .env 

This file contain URL of Databse , PORT number , JWT_SECRATE and other imp thing 


# code working 

# backend file structure 

backend/
│
├── config/
│   └── database.js           # Database connection logic
│
├── controller/
│   ├── authLogin.js          # Login logic
│   ├── authSignUp.js         # Signup logic
│   ├── posts.js              # Blog post create/update/delete/view logic
│   
│
├── middlewares/
│   └── authMiddleware.js     # Role-based access control middleware
│
├── model/
│   ├── user.js               # User schema/model
│   └── post.js               # Post schema/model
│
├── routes/
│   ├── user.js               # User-related routes (signup, login)
│   └── admin.js              # Admin and protected post routes
│
├── .env                      # Environment variables (DB URL, JWT secret, etc.)
├── package.json
├── server.js                 # Main entry point (Express app)
└── README.md


## Signup API

- Takes name, email, password, and role from user.
- Checks if a user with the given email already exists in the database.
- If user exists, sends an error response: "Email is already registered.
- If not, hashes the password using bcrypt with 10 salt rounds.
- Creates a new user entry with the provided details.
- Sends a success response after successful signup.

## Login API

- Takes email and password from user.
- Verifies the user from database.
- Checks if password matches using bcrypt.
- If matched, generates JWT token valid for 2 hours.
- Stores token in httpOnly cookie.
- Sends back user info without password.



# Frontend file struture 

frontend/
│
├── public/
│   └── index.html
│
├── src/
│   │
│   ├──├── pages/                  # Major pages/screens (routed pages)
│   │   ├── Home.jsx
│   │   ├── Login.jsx
│   │   ├── Signup.jsx
│   │   
│   │
│   ├─| dashboard/              # Dashboard components (admin/user)
│   │   ├── AdminDashboard.jsx
│   │   ├── UserDashboard.jsx
│   │   
│   │
│   ├── styles/                 # CSS
│   │   ├── app.css
│   │   
│   │
│   ├── App.jsx                 # Main App component
│   ├── main.jsx                # Entry point (Vite)
│   
│
├── package.json
├── vite.config.js              
└── README.md



# for run this code in your local 

# for frontend you have to install 

- npm i vite@lates 
- cd file_file name
- npm i axios
- npm i react-dom
- npm i react-router-dom
- react-toastify
- npm run dev 

# for backend 

- npm init -y
- npm i nodemon
- npm i mongoose 
- npm i express
- npm i cors
- npm i dotenv
- npm i cors
- npm i bcrypt
- npm i cookie-parser
- npm i jsonwebtoken
- npm run dev 

# note make changes in 
packeng.json  with this command  for run the backend 
 "scripts": {
    "start": "node server.js",
    "dev": "nodemon server.js"
  },

# after this both frontend and backend run
# for Databse use mongocompass and then cpoy your ip address form [mongodb campas ] and pest it in .env file after that db also connect and start working

# for new user do signup 
# for admin login use 
email :-admin123@gmail.com;
password:-admin123


