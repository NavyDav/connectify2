import React, { useState, useEffect } from 'react';

const LanguageChanger = () => {
    const languages = ["Bienvenue", "Welcome", "Bienvenido", "Willkommen"];
    const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentLanguageIndex((currentLanguageIndex + 1) % languages.length);
        }, 5000);

        return () => {
            clearInterval(intervalId);
        };
    }, [currentLanguageIndex]);

};
 
export default LanguageChanger;
