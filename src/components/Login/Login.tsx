import React, { useState, useEffect } from 'react';
import logo from '../../assets/logo.png';
import { useNavigate } from "react-router-dom";
import axios from 'axios';
import './Login.css';


interface LoginFormState {
    username: string;
    password: string;
}

function Login() {
    const [formData, setFormData] = useState<LoginFormState>({
        username: '',
        password: '',
    });
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<string>('');
    const navigate = useNavigate();

    const handleLogin = async (username: string, password: string) => {
        if (username === 'desmond001' && password === 'storefront') {
            const token = 'fake_token';
            localStorage.setItem('jwtToken', token);
            localStorage.setItem('username', username);
            setSuccess('Login successful');
            setTimeout(() => {
                navigate('/dashboard');
            }, 1000);
        } else {
            setError('Invalid username or password');
        }
    };

    useEffect(() => {
        const errorTimer = setTimeout(() => {
            setError('');
        }, 1000);

        const successTimer = setTimeout(() => {
            setSuccess('');
        }, 1000);

        return () => {
            clearTimeout(errorTimer);
            clearTimeout(successTimer);
        };
    }, [error, success]);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { username, password } = formData;
        handleLogin(username, password);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='container'>
                <div className='logo1'>
                    <img src={logo} alt="Company Logo" />
                </div>
                <div>
                    <div className='Login-text1'>
                        Log in to your account
                    </div>
                    <div className='Login-text2'>
                        Welcome back! Please enter your details.
                    </div>
                </div>
                <div className='input-section'>
                    <div className='username'>
                        <label htmlFor="username">Username</label>
                        <input
                            type="text"
                            id="username"
                            name="username"
                            value={formData.username}
                            onChange={handleChange}
                            placeholder="Enter your username"
                        />
                    </div>
                    <div className='password'>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            placeholder="Enter your password"
                        />
                    </div>
                </div>
                {error && <div className="error-message">{error}</div>}
                {success && <div className="success-message">{success}</div>}
            </div>
            <button className='btn' type="submit">Login</button>
        </form>
    );
}

export default Login;
