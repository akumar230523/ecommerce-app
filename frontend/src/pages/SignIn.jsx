import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { api } from "../services/api";

import AuthContext from "../context/AuthContext";

import "../styles/Form.css";

const SignIn = () => {

    const {setUser} = useContext(AuthContext);
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    // Handle sign in
    const handleSignIn = async (e) => {
        e.preventDefault();

        if (!username || !password) {
            toast.warn("Please fill in both fields.");
            return;
        }

        try {
            const response = await api.post('/users/signin', { username, password });
            setUser(response.data?.user);
            localStorage.setItem("token", response.data?.token);
            localStorage.setItem("user", JSON.stringify(response.data?.user));
            toast.success(response.data?.message || "Sign in Successful..");
            navigate('/');
        } 
        catch (error) {
            toast.error(error.response?.data?.message || "Sign in failed! Please try again.."); 
        }
    };

    return (
        <section className="SignIn">
            <form onSubmit={handleSignIn}>
                <h2> Sign In </h2>
                <input type="text" placeholder="Username" name="username" autoComplete="username" value={username} onChange={e => setUsername(e.target.value)} required />
                <input type="password" placeholder="Password" name="password" autoComplete="current-password" value={password} onChange={e => setPassword(e.target.value)} required />
                <button type="submit" className="s-btn"> Sign In </button>
                <hr />
                <Link to='/sign-up' className="s-btn"> Sign Up </Link>
            </form>
        </section>
    );

};

export default SignIn;