// SignupForm.jsx
import React, { useState } from 'react';
import axios from 'axios';
import { BACKEND_BASE_URL } from '../Api/Api';
import '../Forms/SignupForm.css';
import { useNavigate } from 'react-router-dom';

function SignupForm() {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessages, setErrorMessages] = useState(null);

    const navigate = useNavigate()

    const getFirstName = (e) => setFirstName(e.target.value);
    const getLastName = (e) => setLastName(e.target.value);
    const getEmail = (e) => setEmail(e.target.value);
    const getPassword = (e) => setPassword(e.target.value);

    const signupFormSubmit = async (e) => {
        e.preventDefault();

        // store data in object format
        const userData = {
            first_name: firstName,
            last_name: lastName,
            email: email,
            password: password,
        };

        const headers = {
            'Content-Type': 'application/json',
        };

        try {
            // make a HTTP post request to specific API and pass data throught POST request.
            const response = await axios.post(`${BACKEND_BASE_URL}/api/users/register/`, userData, { headers });
            console.log("signed in user:", response.data.email);
            navigate('/login')
        } catch (error) {
            if (error.response && error.response.status === 400) {
                // Validation error occurred
                setErrorMessages(error.response.data);
            } else {
                console.error("Error during signup:", error.response.data);
                // Handle other types of errors
            }
        }
    }

    return (
        <div>
            <form onSubmit={signupFormSubmit}>
                <div className="signup-form">
                    <input type="text" placeholder='name' onChange={getFirstName} />
                    <input type="text" placeholder='last name' onChange={getLastName} />
                    <input type="email" placeholder='email' onChange={getEmail} />
                    <input type="password" placeholder='password' onChange={getPassword} />
                    <button type='submit'>Sign up</button>
                </div>
            </form>

            {errorMessages && (
                <div className="error-messages">
                    <p>Registration failed. Please fix the following errors:</p>
                    <ul>
                        {Object.entries(errorMessages).map(([field, messages]) => (
                            messages.map((message, index) => (
                                <li key={`${field}-${index}`}>{message}</li>
                            ))
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}

export default SignupForm;
