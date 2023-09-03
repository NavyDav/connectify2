import React from 'react';
import '../../style/globalssas.css';
import image2 from './../../asset/Page-Accueil/fd_qsn.jpg';

const Qui = () => {
    return (

    <div className='qui'>
       
        <div className='content4'>
                <h1>Qui Sommes Nous ?</h1>
                <br/>
                <p>Chez Connectify, nous sommes une plateforme sociale dynamique et inclusive, dédiée à connecter les individus du monde entier.
                    <br/> Notre objectif est de créer un espace numérique où chacun peut se sentir libre d'exprimer sa véritable identité, de partager ses passions et de tisser des liens authentiques.
                    </p>
            </div>
        <div className='img2'>
        <img  src={image2} alt='Qui'/> 
         </div>
        </div>
)};

export default Qui