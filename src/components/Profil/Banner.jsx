import React, { Component } from 'react';
import '../../style/globalssas.css';
import avatar from '../../asset/Page-profil/muse.jpeg'
import backgroundAccount from '../../asset/Page-profil/banner_profil.png'


function Banner () {
  
  return (
    <div className='bannerAccount0'>
     <img src={backgroundAccount} alt='backgroundAccount'/>
      <div className='banner0'>
      
        <img src={avatar} alt='pictureAccount'/>
        <h1>Prenom</h1>
        <p>Nom</p>
      </div>
      
    </div>
  )
};

export default Banner;
