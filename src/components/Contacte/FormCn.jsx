import { useState } from 'react';
import '../../style/globalssas.css';
import image3 from './../../asset/Page-Contact /fd_contact.jpg';

const Contact = (props) => {
    const [values, setValues] = useState({
        email: "",
        subject: "",
        message: "",
    });

    const [submitted, setSubmitted] = useState(false);
    const [valid, setValid] = useState(false);

    const garderDonnerEmail = (event) => {
        setValues({ ...values, email: event.target.value });
    };
    const garderDonnerSubject = (event) => {
        setValues({ ...values, subject: event.target.value });
    };
    const garderDonnerMessage = (event) => {
        setValues({ ...values, message: event.target.value });
    };

    const garderSubmit = (event) => {
        event.preventDefault();
        if (validateEmail(values.email) && values.subject && values.message) {
            setValid(true);
        }
        setSubmitted(true);
    };

    const validateEmail = (email) => {
        const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailPattern.test(email);
    };

    return (
        <div className='Cctt'>
            <div className='Cctt2'>
                <form onSubmit={garderSubmit}>
                    <div className='email'>
                        <label>Email:</label>
                        <input
                            type='email'
                            name='email'
                            value={values.email}
                            onChange={garderDonnerEmail}
                            className={submitted && !validateEmail(values.email) ? 'invalid' : ''}
                            required
                        />
                        {submitted && !validateEmail(values.email) && <div className='erreur-email'>L'email est invalide.</div>}
                    </div>
                    <div className='subject'>
                        <label>Sujet:</label>
                        <input
                            type='text'
                            name='subject'
                            value={values.subject}
                            onChange={garderDonnerSubject}
                            required
                        />
                    </div>
                    <div className='message'>
                        <label>Message:</label>
                        <textarea
                            name='message'
                            value={values.message}
                            onChange={garderDonnerMessage}
                            required
                        />
                    </div>
                    <button type='submit' className='bouton-envoyer'>Envoyer</button>
                </form>
            </div>
        </div>
    );
}

export default Contact;
