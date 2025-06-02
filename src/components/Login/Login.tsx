import React, { useState, useEffect, useCallback } from 'react';
import logo from '../../assets/logo.png';
import { useNavigate, Link } from "react-router-dom";
import axios from 'axios';
import './Login.css';

interface LoginFormState {
    email: string;
    password: string;
}

function Login() { 
    const [formData, setFormData] = useState<LoginFormState>({
        email: '',
        password: '',
    });
    const [error, setError] = useState<string>('');
    const [success, setSuccess] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(false);
    const navigate = useNavigate();

    const handleLogin = useCallback(async (email: string, password: string) => {
        setError('');
        setSuccess('');
        setLoading(true);
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_API_BASE_URL}/user/login`,
                { email, password }
            );
            const { token } = response.data;
            localStorage.setItem('jwtToken', token);
            localStorage.setItem('email', email);
            setSuccess('Login successful');
            setTimeout(() => {
                navigate('/dashboard');
            }, 1000);
        } catch (err: any) {
            let message = 'Login failed';
            if (err?.response?.status === 401) {
                message = 'Invalid email or password';
            } else if (err?.response?.data?.message) {
                message = err.response.data.message;
            }
            setError(message);
        } finally {
            setLoading(false);
        }
    }, [navigate]);

    useEffect(() => {
        if (error) {
            const errorTimer = setTimeout(() => setError(''), 2000);
            return () => clearTimeout(errorTimer);
        }
        if (success) {
            const successTimer = setTimeout(() => setSuccess(''), 2000);
            return () => clearTimeout(successTimer);
        }
    }, [error, success]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { email, password } = formData;
        if (!email.trim() || !password.trim()) {
            setError("Please fill in all fields.");
            return;
        }
        handleLogin(email, password);
    };

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <>
            {loading && (
                <div className="loading-screen">
                    <svg className="loader" viewBox="0 0 48 30" width="48px" height="30px">
                        {/* Loader SVG code */}
                        <g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1">
                            <g transform="translate(9.5,19)">
                                <circle className="loader_tire" r="9" strokeDasharray="56.549 56.549"></circle>
                                <g className="loader_spokes-spin" strokeDasharray="31.416 31.416" strokeDashoffset="-23.562">
                                    <circle className="loader_spokes" r="5"></circle>
                                    <circle className="loader_spokes" r="5" transform="rotate(180,0,0)"></circle>
                                </g>
                            </g>
                            <g transform="translate(24,19)">
                                <g className="loader_pedals-spin" strokeDasharray="25.133 25.133" strokeDashoffset="-21.991" transform="rotate(67.5,0,0)">
                                    <circle className="loader_pedals" r="4"></circle>
                                    <circle className="loader_pedals" r="4" transform="rotate(180,0,0)"></circle>
                                </g>
                            </g>
                            <g transform="translate(38.5,19)">
                                <circle className="loader_tire" r="9" strokeDasharray="56.549 56.549"></circle>
                                <g className="loader_spokes-spin" strokeDasharray="31.416 31.416" strokeDashoffset="-23.562">
                                    <circle className="loader_spokes" r="5"></circle>
                                    <circle className="loader_spokes" r="5" transform="rotate(180,0,0)"></circle>
                                </g>
                            </g>
                            <polyline className="loader_seat" points="14 3,18 3" strokeDasharray="5 5"></polyline>
                            <polyline className="loader_body" points="16 3,24 19,9.5 19,18 8,34 7,24 19" strokeDasharray="79 79"></polyline>
                            <path className="loader_handlebars" d="m30,2h6s1,0,1,1-1,1-1,1" strokeDasharray="10 10"></path>
                            <polyline className="loader_front" points="32.5 2,38.5 19" strokeDasharray="19 19"></polyline>
                        </g>
                    </svg>
                </div>
            )}
            <div className='container'>
                <div className='LogInlogo1'>
                    <img src={logo} alt="Company Logo" />
                </div>

                <div className='Login-text1'>
                    Log in to your account
                </div>
                <div className='Login-text2'>
                    Welcome back! Please enter your details.
                </div>

                <form onSubmit={handleSubmit}>
                    <div className="message-container">
                        {error && <div className="error-message">{error}</div>}
                        {success && <div className="success-message">{success}</div>}
                    </div>

                    <div className='email'>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            placeholder="Enter your email"
                            required
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
                            required
                        />
                    </div>

                    <button className='btn' type="submit" disabled={loading}>Login</button>
                </form>

                <div className="redirect-login">
                    Don't have an account? <Link to="/signup">Sign Up</Link>
                </div>
            </div>
        </>
    );
}

export default Login;