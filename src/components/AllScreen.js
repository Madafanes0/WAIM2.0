import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Footer from "./Footer";
import Navbar from "./Navbar";

const AIToolsList = () => {
    const [tools, setTools] = useState([]);
    const [filteredTools, setFilteredTools] = useState([]);
    const [showFreeOnly, setShowFreeOnly] = useState(false);
    const [showPaidOnly, setShowPaidOnly] = useState(false);
    const [selectedEcosystem, setSelectedEcosystem] = useState('');

    useEffect(() => {
        const fetchTools = async () => {
            try {
                const response = await axios.get('/api/');
                setTools(response.data);
                setFilteredTools(response.data); // Initialize filtered tools with all tools
            } catch (error) {
                console.error('Error fetching AI tools:', error);
            }
        };

        fetchTools();
    }, []);

    useEffect(() => {
        let filtered = tools;
        if (showFreeOnly) {
            filtered = filtered.filter(tool => tool.freeVersion);
        }
        if (showPaidOnly) {
            filtered = filtered.filter(tool => tool.paidVersion);
        }
        if (selectedEcosystem) {
            filtered = filtered.filter(tool => tool.ecosystem === selectedEcosystem);
        }
        setFilteredTools(filtered);
    }, [showFreeOnly, showPaidOnly, selectedEcosystem, tools]);

    return (
        <>
            <Navbar />
            <div className="container mx-auto px-4 py-6">
                <h1 className="text-2xl font-bold text-center my-4">List of AI Tools</h1>
                <div className="flex justify-center space-x-10 mb-6">
                    <div className="form-check">
                        <input
                            type="checkbox"
                            id="freeVersion"
                            className="form-checkbox h-5 w-5 text-blue-600"
                            checked={showFreeOnly}
                            onChange={(e) => setShowFreeOnly(e.target.checked)}
                        />
                        <label htmlFor="freeVersion" className="ml-2 text-gray-700 font-medium">
                            Show Free Only
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            type="checkbox"
                            id="paidVersion"
                            className="form-checkbox h-5 w-5 text-blue-600"
                            checked={showPaidOnly}
                            onChange={(e) => setShowPaidOnly(e.target.checked)}
                        />
                        <label htmlFor="paidVersion" className="ml-2 text-gray-700 font-medium">
                            Show Paid Only
                        </label>
                    </div>
                    <div className="form-control">
                        <label htmlFor="ecosystemFilter" className="block mb-2 text-gray-700 font-medium">
                            Filter by Ecosystem:
                        </label>
                        <select
                            id="ecosystemFilter"
                            className="block w-48 px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
                            value={selectedEcosystem}
                            onChange={(e) => setSelectedEcosystem(e.target.value)}
                        >
                            <option value="">All Ecosystems</option>
                            <option value="Cloud Services">Cloud</option>
                            <option value="Applications">Applications</option>
                            <option value="Infrastructure">Infrastructure</option>
                        </select>
                    </div>
                </div>
                <ul>
                    {filteredTools.map((tool) => (
                        <li key={tool.tool_id} className="bg-white rounded-lg shadow-md p-6 mb-4">
                            <h2 className="text-xl font-semibold">{tool.toolName}</h2>
                            <p><strong>Ecosystem:</strong> {tool.ecosystem}</p>
                            <p><strong>Free Version:</strong> {tool.freeVersion ? 'Yes' : 'No'}</p>
                            <p><strong>Paid Version:</strong> {tool.paidVersion ? 'Yes' : 'No'}</p>
                            <p><strong>License Type:</strong> {tool.licenseType}</p>
                            <a href={tool.referenceURL} target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:text-blue-700">Learn more</a>
                            <p>{tool.toolDescription}</p>
                        </li>
                    ))}
                </ul>
            </div>
            <Footer />
        </>
    );
}

export default AIToolsList;