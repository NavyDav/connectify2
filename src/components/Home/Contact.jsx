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
        if (values.email && values.subject && values.message) {
            setValid(true);
        }
        setSubmitted(true);
    };

    return (
        <div className='Contact'>
            <div className='img3'>
                <img src={image3} alt="Contact" />
            </div>
            <div className='contactRight'>
                <h1>Nous Contacter</h1>
                <form className="formulaire" onSubmit={garderSubmit}>
                    {submitted && valid ? (
                        <div className="message-success">Success ! Thank you for your message</div>
                    ) : null}

                    <div className="input-container">
                        <label>Email:</label>
                        <input
                            onChange={garderDonnerEmail}
                            value={values.email}
                            type="email"
                            className="chant"
                            placeholder="Email"
                        />
                        {submitted && !values.email ? <span>L'e-mail est invalide</span> : null}
                    </div>

                    <div className="input-container">
                        <label>Subject:</label>
                        <input
                            onChange={garderDonnerSubject}
                            value={values.subject}
                            type="text"
                            className="chant"
                            placeholder="Subject"
                        />
                        {submitted && !values.subject ? <span>Sujet invalide</span> : null}
                    </div>

                    <div className="input-container">
                        <label>Message:</label>
                        <textarea
                            onChange={garderDonnerMessage}
                            value={values.message}
                            className="chant--"
                            placeholder="Message"
                        />
                        {submitted && !values.message ? <span>Message invalide</span> : null}
                    </div>

                    <button type="submit" className="chant--">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contact;
