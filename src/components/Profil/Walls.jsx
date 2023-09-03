import React, { Component } from 'react';
import '../../style/globalssas.css';
import homer from '../../asset/Page-profil/homer.jpeg'
import backgroundAccount from '../../asset/Page-profil/banner_profil.png'


function Banner () {
  
  return (
    <div className='myWall'>
        <h1>My Walls</h1>
    <div className='Wall'>
        <div className='tweet'>
        <h2>Le Rap US Rap FR</h2>
        <p>8:10</p>
        </div>
      <div className='imgTweet'>
        <img src={homer} alt='pictureAccount'/>
        <h2>J'aime le classique...</h2>
        <p>14:20</p>
      </div>

      <div className='tweetZone'>
        <div className='tweetInit'>
            <input type="text" name="écrivez votre message" />
        </div>
      </div>
      
      </div>
      
    </div>
  )
};

export default Banner;
