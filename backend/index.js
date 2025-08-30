import express from "express";
import dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json());

import connectDB from "./config/connectDB.js";
import productRouter from "./routes/productRouter.js";
import userRouter from "./routes/UserRouter.js";
import cartRouter from "./routes/cartRouter.js";

app.use("/products", productRouter);
app.use("/users", userRouter);
app.use("/carts", cartRouter);

const PORT = process.env.PORT || 5000;

// Function to connect to database and start server
const startServer = async () => {
    try {
        await connectDB();
        app.listen(PORT, () => {
            console.log(`Server is running at http://localhost:${PORT}`);
        });
    }
    catch (error) {
        console.error("Failed to start server:", error.message);
        process.exit(1); 
    }
};

startServer();


