import React, { useState } from 'react';

const FilterBox = () => {
    const [filters, setFilters] = useState({
        freeVersion: false,
        paidVersion: false,
        ecosystem: [],
        licenseType: []
    });

    const handleCheckboxChange = (filterKey, value) => {
        if (filterKey === "freeVersion" || filterKey === "paidVersion") {
            setFilters(prev => ({ ...prev, [filterKey]: !prev[filterKey] }));
        } else {
            const updatedArray = filters[filterKey].includes(value)
                ? filters[filterKey].filter(item => item !== value)
                : [...filters[filterKey], value];
            setFilters(prev => ({ ...prev, [filterKey]: updatedArray }));
        }
    };

    return (
        <div className="bg-white p-6 rounded-lg shadow space-y-4">
            <h2 className="text-xl font-semibold text-gray-900">Filter Options</h2>
            <div>
                <h4 className="font-medium text-gray-700">Free Version Available</h4>
                <label className="inline-flex items-center mt-3">
                    <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-600"
                        checked={filters.freeVersion}
                        onChange={() => handleCheckboxChange('freeVersion')}
                    />
                    <span className="ml-2 text-gray-700">Yes</span>
                </label>
            </div>
            <div>
                <h4 className="font-medium text-gray-700">Paid Version Available</h4>
                <label className="inline-flex items-center mt-3">
                    <input
                        type="checkbox"
                        className="form-checkbox h-5 w-5 text-blue-600"
                        checked={filters.paidVersion}
                        onChange={() => handleCheckboxChange('paidVersion')}
                    />
                    <span className="ml-2 text-gray-700">Yes</span>
                </label>
            </div>
            <div>
                <h4 className="font-medium text-gray-700">License Type</h4>
                {['Proprietary', 'Open Source'].map(license => (
                    <label key={license} className="block mt-2">
                        <input
                            type="checkbox"
                            className="form-checkbox h-5 w-5 text-blue-600"
                            checked={filters.licenseType.includes(license)}
                            onChange={() => handleCheckboxChange('licenseType', license)}
                        />
                        <span className="ml-2 text-gray-700">{license}</span>
                    </label>
                ))}
            </div>
        </div>
    );
};

export default FilterBox;
