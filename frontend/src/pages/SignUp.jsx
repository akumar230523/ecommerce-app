import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

import "../styles/Form.css";

const SignUp = () => {

    const [form, setForm] = useState({ username: "", password: "" });

    const navigate = useNavigate();

    // Set Form Data
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // Handle sign up
    const handleSignUp = async (e) => {
        e.preventDefault();

        const { username, password } = form;
        if (!username || !password) {
            toast.warn("Please fill in both fields.");
            return;
        }

        try {
            const response = await api.post('/users/signup', { userId: username.trim(), username, password });
            toast.success(response.data?.message || "Sign up Successful..");
            navigate('/sign-in');
        } 
        catch (error) {
            toast.error(error.response?.data?.message || "Sign up failed! Please try again..");
        }
    };

    return (
        <section className="SignUp">
            <form onSubmit={handleSignUp}>
                <h2> Sign Up </h2>
                <input type="text" placeholder="Username" name="username" autoComplete="username" value={form.username} onChange={handleChange} required />
                <input type="password" placeholder="Password" name="password" autoComplete="new-password" value={form.password} onChange={handleChange} required />
                <button type="submit" className="s-btn"> Sign Up </button>
                <hr />
                <Link to='/' className="s-btn"> Cancel </Link>
            </form>
        </section>
    );

};

export default SignUp;
