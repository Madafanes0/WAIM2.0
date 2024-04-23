import React, { useState } from 'react';


function Login() {
    
    const [email, setEmail]= useState('');
    const [password, setPassword]= useState('');
    
    function handleSubmit(e){
        e.preventDefault();
        
    }
    return (
        
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-md w-full p-6 bg-white shadow-md rounded-lg">
                <h1 className="text-3xl font-semibold mb-2 text-black text-center">Sign Up</h1>
                <h2 className="text-sm font-semibold mb-6 text-gray-500 text-center">
                    Borkonator is the best place to learn and share knowledge
                </h2>
                <div className="mb-4">
                    <button type="button" className="w-full flex justify-center items-center gap-2 bg-white text-sm text-gray-600 py-2 px-4 rounded-md hover:bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-200 transition-colors duration-300">
                        Sign Up with Google
                    </button>
                </div>
                <div className="text-sm text-gray-600 text-center mb-4">
                    <p>or with email</p>
                </div>
                <form onSubmit={handleSubmit} >
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
                        <input type="text" id="email" name="email" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" 
                        onChange={e=>setEmail(e.target.value)}    />
                        
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input type="password" id="password" name="password" className="mt-1 p-2 w-full border rounded-md focus:border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-300 transition-colors duration-300" 
                        onChange={e=>setPassword(e.target.value)}    />
                    </div>
                    <div>
                        <button type="submit" className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 focus:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transition-colors duration-300">
                            Sign Up
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Login;
