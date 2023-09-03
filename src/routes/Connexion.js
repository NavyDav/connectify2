import React from 'react'
import '../style/globalssas.css';
import Connex from '../components/Connexion/Connex'; // Assurez-vous d'ajuster le chemin d'importation selon votre structure de fichiers
import Formulaire2 from '../components/Connexion/Formulaire2';
import image3 from '../asset/Page-Connexion/fd_connexion.jpg'

function connexion() {
  return (
  <Connex 
      title="Connexion" 
      text1="Pas de compte ?" 
      loginLink="/Inscription" 
      text2="Inscrivez-vous." 
      image={image3} 
      Component={<Formulaire2 />}
  />
  )
};


export default connexion