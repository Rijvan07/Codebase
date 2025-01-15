import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
const SignupForm = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [errors, setErrors] = useState({});
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [user, setUser] = useState({});
    const [isUserValid, setIsUserValid] = useState(false);

  const location = useLocation();
  
  const queryParams = new URLSearchParams(location.search);

  const searchTerm = queryParams.get('user_id'); 

    const validateForm = () => {
        const newErrors = {};
        if (!email || !/\S+@\S+\.\S+/.test(email)) {
            newErrors.email = 'Please enter a valid email address';
        }
        if (!password || password.length < 6) {
            newErrors.password = 'Password must be at least 6 characters';
        }
        if (password !== confirmPassword) {
            newErrors.confirmPassword = 'Passwords do not match';
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        // if (!validateForm()){
        // setLoading(true);
        // setErrors({});
        // setSuccess(false);
        // alert("CHECK..!")
        // return;
        // }
        const userDetails = {
            email: email,
            password: password
        }
        try {
            const response = await axios.post('http://localhost:5000/forgot_password/forgot_password', userDetails);
            if (response.data.status) {
                alert(response.data.message);
            } else {
                alert(response.data.message);
            }
        } catch (err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
    };

    const getUser = async () => {
        try {
            const response = await axios.get(`http://localhost:5000/get_user/get_user/${searchTerm}`);
            if (response.data.status) {
                // alert(response.data.message);
                setIsUserValid(true);
                console.log(response.data)
            } else {
                alert(response.data.message);
            }
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {

        getUser()

    }, []);


    return (
        <div className="signup-form-container">
            <div className="signup-form-box">
                <h2>Create an Account</h2>
                {
                    isUserValid ? <>
                        <form onSubmit={handleSubmit}>
                            <div className="input-group">
                                <label htmlFor="email">Email Address</label>
                                <input
                                    type="email"
                                    id="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                />
                                {errors.email && <p className="error-message">{errors.email}</p>}
                            </div>

                            <div className="input-group">
                                <label htmlFor="password">Password</label>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                />
                                {errors.password && <p className="error-message">{errors.password}</p>}
                            </div>

                            <div className="input-group">
                                <label htmlFor="confirm-password">Confirm Password</label>
                                <input
                                    type="password"
                                    id="confirm-password"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    required
                                />
                                {errors.confirmPassword && (
                                    <p className="error-message">{errors.confirmPassword}</p>
                                )}
                            </div>

                            {success && <p className="success-message">Account created successfully!</p>}

                            <button type="submit" disabled={loading} className="submit-btn">
                                {loading ? 'Creating Account...' : 'Create Account'}
                            </button>
                        </form>
                    </> : <>
                        <div className="">
                            <strong>
                                Unable to find user try after some time!
                            </strong>
                        </div>
                    </>
                }

            </div>
        </div>
    );
};

export default SignupForm;
