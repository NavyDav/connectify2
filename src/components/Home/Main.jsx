import React from 'react';
import '../../style/globalssas.css';
import backgroundVideo from './../../asset/Page-Accueil/fd_accueil.mp4';

const Main = () => {
  return (
    <div className='main'>
      
      <h1>Connectify</h1>
    
            <video src={backgroundVideo}autoPlay muted loop></video>
        </div>
)};

export default Main