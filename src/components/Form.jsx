import './../../style/index.css';
import React, { useState } from 'react';

function Hero4(props) {

    const [values, setValues] = useState({
        Email: "",
        Subject: "",
        Message: "",
    });

    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);

    const garderDonnerEmail = (event) => {
        setValues({...values, email: event.target.value})
    }
    const garderDonnerSubject = (event) => {
        setValues({...values, subject: event.target.value})
    }
    const garderDonnerMessage = (event) => {
        setValues({...values, message: event.target.value})
    }

    const garderSubmit = (event) => {
        event.preventDefault();
        if(values.email && values.subject && values.message){
            setValid(true);
        }
        setSubmitted(true);
    }
return (<>

    <div className={props.cName4}>
        <img src={props.heroimg4} alt="WEBOWING Image" />

    <div className="hero4-text">
        <h1>{props.title4}</h1>

        <form className="formulaire"
        onSubmit={garderSubmit}>
            {submitted && valid ? <div className="message-success">Success ! Thank you for your message</div> : null}
            <input 
            onChange={garderDonnerEmail}
            value={values.email}
            type="email" 
            className="chant" 
            placeholder="Email" />
            {submitted && !values.Email ? <span>L'e-mail est invalide </span> : null}
            <input 
            onChange={garderDonnerSubject}
            value={values.subject}
            type="text" 
            className="chant" 
            placeholder="Subject" />
            {submitted && !values.Subject ? <span>Invalide </span> : null}
            <input 
            onChange={garderDonnerMessage}
            value={values.message}
            type="text" 
            className="chant-" 
            placeholder="Message" />
            {submitted && !values.Message ? <span>Invalide </span> : null}
            <button type="submit" 
            className="chant--" >Submit</button>
        </form>
    </div>
    </div>

    </>)
}

export default Hero4;