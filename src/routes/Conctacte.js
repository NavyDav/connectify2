import React from 'react'
import '../style/globalssas.css';
import Cntact from '../components/Contacte/Cntact'; // Assurez-vous d'ajuster le chemin d'importation selon votre structure de fichiers
import FormCn from '../components/Contacte/FormCn';
import image4 from '../asset/Page-Contact /fd_contact.jpg'

function contacte() {
  return (
  <Cntact 
      title="Contactez-nous"  
      image={image4} 
      Component={<FormCn />}
  />
  )
};


export default contacte