import React from 'react';
import video1 from '../../asset/Page-profil/pexels-rodnae-productions-7017804.mp4';
import '../../style/globalssas.css';

function videoSection() {
  return (
    <div className='videoSection'>
    <h1>Video</h1>
<div className='videoContent'>
<video src={video1} autoPlay muted loop></video>
    </div>

  </div>
  )
}

export default videoSection