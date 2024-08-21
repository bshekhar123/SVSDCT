import React from 'react';

function TogglePill({activeOption, setActiveOption}) {

    const handleToggle = () => {
        setActiveOption((prevOption) => (prevOption === 1 ? 2 : 1));
    };

    return (
        <div className="flex items-center space-x-4">
            <button onClick={handleToggle} className={`py-2 px-4 rounded-md focus:outline-none ${activeOption === 1 ? 'bg-white text-black' : 'text-white'
                }`}>
                Phone
            </button>
            <button onClick={handleToggle} className={`py-2 px-4 rounded-md focus:outline-none ${activeOption === 2 ? 'bg-white text-black' : 'text-white'
                }`}>
                Email
            </button>
        </div>
    );
};

export default TogglePill;