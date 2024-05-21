import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { useNavigate } from "react-router-dom";
import "./Login.css";

function Login() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        if (username === "desmond001" && password === "storefront") {
            const token = "fake_token";
            localStorage.setItem("jwtToken", token);
            localStorage.setItem("username", username);
            navigate("/dashboard");
        } else {
            alert("invalid credentials.")
        }
    };

    return (
        <section className="login-section">
            <div className="login-section-logo">
                <img src={logo} alt="Company Logo" />
            </div>
            <div className="login-section-form-wrapper">
                <form className="login-section-form" onSubmit={(e) => handleLogin(e)}>
                    <div className="login-section-form-heading">
                        <h2>Log in to your account</h2>
                        <h5>Welcome back! Please enter your details</h5>
                    </div>
                    <label className="login-section-input-field">
                        Username
                        <input
                            type="text"
                            placeholder="Enter your username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                        />
                    </label>
                    <label className="login-section-input-field">
                        Password
                        <input
                            type="password"
                            placeholder="Enter your password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                    </label>
                    <button type="submit">Login</button>
                </form>
            </div>
        </section>
    );
}

export default Login;
