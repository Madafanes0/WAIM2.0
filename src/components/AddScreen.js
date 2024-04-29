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
        freeVersion: false,
        licenseType: "",
        paidVersion: false,
        referenceURL: "",
        toolDescription: ""
    });

    const handleChange = (e) => {
        const value = e.target.type === 'checkbox' ? e.target.checked : e.target.value;
        setFormData({
            ...formData,
            [e.target.name]: value
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('/api/', formData);
            alert('Tool added successfully!');
            setFormData({
                tool_id: "",
                toolName: "",
                contentTypeId: "",
                ecosystem: "",
                freeVersion: false,
                licenseType: "",
                paidVersion: false,
                referenceURL: "",
                toolDescription: ""
            });
        } catch (error) {
            console.error('Error adding tool:', error);
            alert('Failed to add tool. ' + error.message);
        }
    };

    return (
        <>
        <Navbar/>
        <div className="container mx-auto p-4">
            <h1 className="text-xl font-bold text-center mb-4">Add New Tool</h1>
            <form onSubmit={handleSubmit} className="space-y-4">
                <input name="tool_id" type="text" placeholder="Tool ID" value={formData.tool_id} onChange={handleChange} className="input"/>
                <input name="toolName" type="text" placeholder="Tool Name" value={formData.toolName} onChange={handleChange} className="input"/>
                <input name="contentTypeId" type="text" placeholder="Content Type ID" value={formData.contentTypeId} onChange={handleChange} className="input"/>
                <input name="ecosystem" type="text" placeholder="Ecosystem" value={formData.ecosystem} onChange={handleChange} className="input"/>
                <div>
                    <label><input name="freeVersion" type="checkbox" checked={formData.freeVersion} onChange={handleChange}/> Free Version</label>
                </div>
                <input name="licenseType" type="text" placeholder="License Type" value={formData.licenseType} onChange={handleChange} className="input"/>
                <div>
                    <label><input name="paidVersion" type="checkbox" checked={formData.paidVersion} onChange={handleChange}/> Paid Version</label>
                </div>
                <input name="referenceURL" type="text" placeholder="Reference URL" value={formData.referenceURL} onChange={handleChange} className="input"/>
                <textarea name="toolDescription" placeholder="Tool Description" value={formData.toolDescription} onChange={handleChange} className="input"></textarea>
                <button type="submit" className="button">Add Tool</button>
            </form>
        </div>
        <Footer/>
        </>
    );
};

export default AddScreen;


