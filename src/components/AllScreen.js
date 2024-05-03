import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from "./Footer";
import Navbar from "./Navbar";

const AIToolsList = () => {
    const [tools, setTools] = useState([]);

    useEffect(() => {
        // Update the URL to the endpoint from which you are fetching AI tools
        const fetchTools = async () => {
            try {
                const response = await axios.get('/api/');
                setTools(response.data); 
            } catch (error) {
                console.error('Error fetching AI tools:', error);
            }
        };

        fetchTools();
    }, []);

    return (
        <>
        <div>
            <Navbar/>
            <h1 className="text-2xl font-bold text-center my-4">List of AI Tools</h1>
            <ul>
                {tools.map((tool) => (
                    <li key={tool.tool_id} className="bg-white rounded-lg shadow-md p-6 mb-4">
                        <h2 className="text-xl font-semibold">{tool.toolName}</h2>
                        <p><strong>Ecosystem:</strong> {tool.ecosystem}</p>
                        <p><strong>Free Version:</strong> {tool.freeVersion ? 'Yes' : 'No'}</p>
                        <p><strong>License Type:</strong> {tool.licenseType}</p>
                        <p><strong>Paid Version:</strong> {tool.paidVersion ? 'Yes' : 'No'}</p>
                        <a href={tool.referenceURL} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">Learn more</a>
                        <p>{tool.toolDescription}</p>
                    </li>
                ))}
            </ul>
        </div>
            <Footer/>
        </>
    );
}

export default AIToolsList;