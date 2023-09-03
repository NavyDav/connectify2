import React, { useState } from "react";
import "../../style/globalssas.css";

function RegistrationForm() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Vérification et traitement des données ici
    if (validateEmail(formData.email) && validatePassword(formData.password)) {
      console.log("Données valides :", formData);
    } else {
      console.log("Données non valides");
    }
  };

  const validateEmail = (email) => {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  };

  const validatePassword = (password) => {
    // Vérifiez ici vos critères de validation de mot de passe (par exemple, longueur minimale, caractères spéciaux, etc.)
    return password.length >= 8;
  };

  return (
    <div className="registration-form2">
      <form onSubmit={handleSubmit}>
        <label>
          Email:
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          Mot de passe:
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Valider</button>
      </form>
    </div>
  );
}

export default RegistrationForm;
