import React from 'react';
import '../style/globalssas.css';
import Ins from '../components/Inscription/Ins';
import Formulaire from '../components/Inscription/Formulaire';
import image2 from '../asset/Page-Inscription/pexels-budgeron-bach-5158233.jpg';
import { Link } from 'react-router-dom';

function inscription () {
  return (
 <Ins 
      title="inscription" 
      text1="Vous avez déja un compte ?" 
      loginLink="/Connexion" 
      text2="Connectez-vous." 
      image={image2} 
      Component={<Formulaire />}
      />
  )
};

export default inscription;
