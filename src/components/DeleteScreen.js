import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';

const DeleteScreen = () => {
    const [toolId, setToolId] = useState('');
    const [message, setMessage] = useState('');

    const handleInputChange = (e) => {
        setToolId(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!toolId) {
            setMessage('Please enter a valid tool ID.');
            return;
        }

        axios.delete(`/api/${toolId}`)
            .then(response => {
                setMessage('Tool deleted successfully!');
                setToolId(''); // Clear input after successful deletion
            })
            .catch(error => {
                console.error('Error deleting the tool: ', error);
                setMessage('Failed to delete the tool. Error: ' + error.message);
            });
    };

    return (
        <>
        <Navbar/>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Delete AI Tool</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="toolId" className="block text-sm font-medium text-gray-700">Tool ID:</label>
                        <input
                            type="text"
                            id="toolId"
                            value={toolId}
                            onChange={handleInputChange}
                            placeholder="Enter tool ID to delete"
                            className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        />
                    </div>
                    <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Delete Tool
                    </button>
                </form>
                {message && <p className="mt-4 text-center text-sm font-medium text-red-600">{message}</p>}
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default DeleteScreen;
