import User from "../models/User.js"; 
import Cart from "../models/Cart.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from "dotenv";

dotenv.config();

const JWT_SECRET = process.env.JWT_SECRET;

// User sign up
export const signup = async (req, res) => { 
    const { userId, username, password } = req.body; 
    try { 
        const existingUser = await User.findOne({ username }); 
        if (existingUser) { 
            return res.status(409).json({ message: "That username is taken. Try another." }); 
        } 
        const hashedPassword = await bcrypt.hash(password, 10); 
        await User.create({ userId, username, password: hashedPassword });
        await Cart.create({ cartId: userId, products: [] });
        return res.status(201).json({ message: "Sign up Successful." }); 
    } 
    catch (err) { 
        console.error(err); 
        return res.status(500).json({ message: "Sign up failed! Please try again." }); 
    } 
};

// User sign in
export const signin = async (req, res) => { 
    const {username, password} = req.body; 
    try { 
        const user = await User.findOne({ username }); 
        if (!user) {
            return res.status(401).json({ message: "Invalid username or password." }); 
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) { 
            return res.status(401).json({ message: "Invalid username or password." }); 
        }
        else { 
            const token = jwt.sign({ id: user._id, username: user.username }, JWT_SECRET, { expiresIn: '2h' });     // Generate token
            return res.status(200).json({ message: "Sign in Successful.", token, user: { userId: user.userId } }); 
        } 
    }
    catch (err) { 
        console.error(err); 
        return res.status(500).json({ message: "Sign in failed! Please try again." }); 
    } 
};



