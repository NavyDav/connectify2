import React, { Component } from 'react';
import '../../style/globalssas.css';
import { Link } from 'react-router-dom';

function Ins(props) {
  const { title, loginLink,image,text1, text2, Component } = props;

  return (
    <div className='Inscrip'>
      <div className='Inscrip2'>
        <h1>{title}</h1>
        {Component}
        <p>{text1} <Link to={loginLink}>{text2}</Link></p>
      </div>
      <img src={image} alt='Inscription'/>
    </div>
  );
}

export default Ins;
