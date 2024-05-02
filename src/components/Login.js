import React, { useState } from 'react';
import axios from 'axios'; // Make sure to install axios if not already installed

function Login() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/login/', { email, password });
            console.log(response.data); // Handle your response here. For example, save the auth token.
            // Redirect to another page or update the state based on the login status
        } catch (error) {
            console.error('Login error', error.response);
            // Handle errors here, such as showing an error message
        }
    };

    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-md w-full p-6 bg-white shadow-md rounded-lg">
                <h1 className="text-3xl font-semibold mb-2 text-black text-center">Login</h1>
                <h2 className="text-sm font-semibold mb-6 text-gray-500 text-center">
                    Welcome back to Borkonator
                </h2>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="text" id="email" name="email"
                            className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                            onChange={e => setEmail(e.target.value)} />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" id="password" name="password"
                            className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300"
                            onChange={e => setPassword(e.target.value)} />
                    </div>
                    <div>
                        <button type="submit" className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 focus:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-900 transition-colors duration-300">
                            Login
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
