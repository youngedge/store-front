import React, { useState, useCallback } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import './signup.css';

function SignUp() {
    const [formData, setFormData] = useState({ 
        firstName: '', 
        lastName: '', 
        email: '', 
        password: '' 
    });
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleRegister = useCallback(async (firstName: string, lastName: string, email: string, password: string) => {
        setError('');
        setSuccess('');
        setLoading(true);
        try {
            const response = await axios.post(
                `${import.meta.env.VITE_API_BASE_URL}/user/register`,
                { firstName, lastName, email, password }
            );
            setSuccess('Registration successful');
            setTimeout(() => {
                navigate('/login');
            }, 1000);
        } catch (err: any) {
            const message = err?.response?.data?.message || 'Registration failed';
            setError(message);
        } finally {
            setLoading(false);
        }
    }, [navigate]);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const { firstName, lastName, email, password } = formData;
        if (!firstName.trim() || !lastName.trim() || !email.trim() || !password.trim()) {
            setError("Please fill in all fields.");
            return;
        }
        handleRegister(firstName, lastName, email, password);
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
        <div className="signup-wrapper">
            <div className="signup-image-section">
            </div>
            <div className="signup-container">
                <form onSubmit={handleSubmit}>
                    <div className='SignUplogo1'>
                      <img src={logo} alt="Company Logo" />
                    </div>

                    {error && <div className="error">{error}</div>}
                    {success && <div className="success">{success}</div>}

                    <div className='firstName-txt'>
                      <label htmlFor="firstName">First Name</label>
                      <input
                        type="text"
                        id="firstName"
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleChange}
                        placeholder="Enter your first name"
                        required
                        aria-label="First Name"
                      />
                    </div>

                    <div className='lastName-txt'>
                      <label htmlFor="lastName">Last Name</label>
                      <input
                        type="text"
                        id="lastName"
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleChange}
                        placeholder="Enter your last name"
                        required
                        aria-label="Last Name"
                      />
                    </div>

                    <div className='email-txt'>
                      <label htmlFor="email">Email</label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        required
                        aria-label="Email"
                      />
                    </div>

                    <div className='password-txt'>
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        id="password"
                        name="password"
                        value={formData.password}
                        onChange={handleChange}
                        placeholder="Enter your password"
                        required
                        aria-label="Password"
                      />
                    </div>

                    <div className='SignUp-text0'>
                        Sign up to your account
                    </div>
                    <div className='Login-text2'>
                        Welcome back! Please enter your details.
                    </div>

                    <button type="submit" disabled={loading}>
                        {loading ? 'Signing up...' : 'Sign Up'}
                    </button>

                    <div className="redirect-signup">
                        Already have an account? <Link to="/">Log In</Link>
                    </div>
                </form>
            </div>
        </div>
        </>
    );
}

export default SignUp;