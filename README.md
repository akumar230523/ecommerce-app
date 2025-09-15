# E-commerce Application
A full-stack **E-commerce App** built with the **MERN** stack. Features include product browsing, search, filtering, cart management, and a secure checkout process.

---

## 🛠️ Technology Stack
- **Frontend** – HTML, CSS, React, Axios
- **Backend** – Node.js, Express.js
- **Database** – MongoDB (Atlas)
- **Authentication** – JWT (JSON Web Tokens)
- **Version control** – Git & GitHub

## 🚀 Setup
1. Clone the repository:
    ```
    git clone https://github.com/akumar230523/ecommerce-app.git
    ```
2. Navigate the project folder:
    ```
    cd ecommerce-app
    ```
3. Backend Setup:
    ```
    cd backend
    npm install
    ```
    Create a **.env** file in the backend/ folder
    ```
    MONGO_URL=your_mongodb_connection_string
    PORT=5000
    JWT_SECRET=your_jwt_secret_key
    ```
4. Frontend Setup:
    ```
    cd frontend
    npm install
    ```
    Create a **.env** file in the frontend/ folder
    ```
    VITE_API_URL=http://localhost:5000
    ```
5. Run the Application:
    - Start backend
    ```
    cd backend
    npm run dev
    ```
    - Start frontend
    ```
    cd frontend
    npm run dev
    ```
    - Open the app in your browser at http://localhost:5173

## ✨ Features
- **Product Listing** – A list of products with essential details.
- **Search & Filters** – Search products by title and filter by category.
- **User Authentication** – Sign up, Sign in, and token-based authentication using JWT.
- **Product Details** – Detailed product information page.
- **Cart Management** – Add, remove, and update quantity of cart items.
- **Error Handling** – Strong validation and error management.
- **Responsive Design** – Fully optimized for desktop, tablet, and mobile devices.

## 🔗 Live Demo
👉 [ShoppyGlobe](https://shoppyglobe-u7kv.onrender.com/)

---


