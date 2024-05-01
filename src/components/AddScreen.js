import React, { useState } from 'react';
import axios from 'axios';
import Navbar from './Navbar';
import Footer from './Footer';

const AddScreen = () => {
    const [formData, setFormData] = useState({
        tool_id: "",
        toolName: "",
        contentTypeId: "",
        ecosystem: "",
        licenseType: "",
        referenceURL: "",
        toolDescription: "",
        freeVersion: false,
        paidVersion: false
    });
    const [message, setMessage] = useState('');

    const handleChange = (e) => {
        const { name, type, checked, value } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('/api/', formData);
            setMessage('Tool added successfully!');
            setFormData({
                tool_id: "",
                toolName: "",
                contentTypeId: "",
                ecosystem: "",
                licenseType: "",
                referenceURL: "",
                toolDescription: "",
                freeVersion: false,
                paidVersion: false
            });
        } catch (error) {
            console.error('Error adding tool:', error);
            setMessage('Failed to add tool. ' + error.message);
        }
    };

    return (
        <>
        <Navbar/>
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
            <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-md">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-4">Add New AI Tool</h1>
                <form onSubmit={handleSubmit} className="space-y-4">
                    {/* Mapping through formData to render input fields */}
                    {Object.entries(formData).map(([key, value]) => {
                        const isCheckbox = key.includes("Version");
                        return (
                            <div key={key} className="flex flex-col">
                                <label htmlFor={key} className="block text-sm font-medium text-gray-700 capitalize">{key.replace(/([a-z])([A-Z])/g, '$1 $2')}</label>
                                {isCheckbox ? (
                                    <input
                                        type="checkbox"
                                        id={key}
                                        name={key}
                                        checked={value}
                                        onChange={handleChange}
                                        className="mt-1"
                                    />
                                ) : (
                                    <input
                                        type="text"
                                        id={key}
                                        name={key}
                                        value={value}
                                        onChange={handleChange}
                                        placeholder={`Enter ${key.replace(/([a-z])([A-Z])/g, '$1 $2')}`}
                                        className="mt-1 block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                                    />
                                )}
                            </div>
                        );
                    })}
                    <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                        Add Tool
                    </button>
                </form>
                {message && <p className="mt-4 text-center text-sm font-medium text-green-600">{message}</p>}
            </div>
        </div>
        <Footer/>
        </>
    );
};

export default AddScreen;
