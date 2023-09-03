import React from 'react';
import '../../style/globalssas.css'
import image1 from '../../asset/Page-Accueil/fd_actualite.jpg';


const Actualite = () => {
    return (
    <div className='actualite'>
        
            <div className='img1' >
            <img src={image1} alt='Accueil'/>
            </div>
        <div className='content3'>
                <h1>Actualité</h1>
                <br/>
                <p>Le lieu où vous pouvez vous connecter avec vos amis, partager des moments spéciaux et explorer de nouvelles rencontres.
                    <br/>Exprimez-vous à travers des photos, des vidéos et des messages, et découvrez le monde passionnant de la communauté Connectify.
                    <br/>Rejoignez-nous dès maintenant et commencez à créer des liens, à inspirer et à être inspiré. 
                    <br/>Connectify est là pour vous aider à rester connecté et à célébrer les moments de la vie, ensemble.
                    </p> 
                    </div>        
        </div>
)};

export default Actualite