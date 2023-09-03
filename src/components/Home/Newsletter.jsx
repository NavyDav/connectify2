import React, { useState } from "react";
import "../../style/globalssas.css";

function Newsletter() {
  const [values, setValues] = useState({
    email: "", // Utilisez "email" au lieu de "Email" pour correspondre à l'état.
  });

  const [submitted, setSubmitted] = useState(false);
  const [valid, setValid] = useState(false);

  const garderDonnerEmail = (event) => {
    setValues({ ...values, email: event.target.value });
  };

  const garderSubmit = (event) => {
    event.preventDefault();
    if (values.email) {
      setValid(true);
    }
    setSubmitted(true);
  };

  return (
    <div className="news">
      <div className="box-news">
        <h1>Newsletter</h1>
        <p>
          Inscrivez-vous à notre newsletter pour rester informé(e) et connecté(e) avec Connectify !
        </p>
        <form onSubmit={garderSubmit}>
          <input
            onChange={garderDonnerEmail}
            value={values.email}
            type="email"
            className="chant"
            placeholder="Email"
          />
          {submitted && !values.email ? <span>L'e-mail est invalide</span> : null}
          <button type="submit">S'inscrire</button>
        </form>
      </div>
    </div>
  );
}

export default Newsletter;
