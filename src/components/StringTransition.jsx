import React, { useState, useEffect } from 'react';

const strings = [
    "Your Passion for giving is Commendable",
    "Don’t wait. This time is to Give",
    "Definitely, You Can Donate More",
    "Join our mission, and change a life.",
    "You have the Power to Bring Happiness",
    "One Man, Many Efforts",
];

function StringTransition() {
    const [currentStringIndex, setCurrentStringIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentStringIndex((prevIndex) => (prevIndex + 1) % strings.length);
        }, 3000);

        return () => clearInterval(intervalId);
    }, []);

    return (
        <p className="text-xl font-semibold mt-3">{strings[currentStringIndex]}</p>
    );
};

export default StringTransition;