import React, { useState, useEffect } from 'react';
import '../../style/globalssas.css';
import LanguageChanger from './Welcometxt';

const Bienvenue = () => {
    const languages = ["Bienvenue", "Welcome", "Bienvenido", "Willkommen"];
    const [currentLanguageIndex, setCurrentLanguageIndex] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentLanguageIndex((currentLanguageIndex + 1) % languages.length);
        }, 5000);

        return () => {
            clearInterval(intervalId);
        };
    }, [currentLanguageIndex, languages.length]);

    return (
        <div className='bienvenue'>
            <div className='content2'>
                <h1>{languages[currentLanguageIndex]}</h1>
                <br/>
                <p>"Harmonisez vos passions,<br/> partagez vos émotions avec Connectify !"</p>
            </div>
        </div>
    );
};

export default Bienvenue;
