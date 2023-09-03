import '../../style/globalssas.css';
import jpeg1 from '../../asset/Page-profil/pexels-kampus-production-5935232.jpg'
import jpeg2 from '../../asset/Page-profil/pexels-matthias-groeneveld-4200745.jpg'
import jpeg3 from '../../asset/Page-profil/pexels-sound-on-3755913.jpg'
import jpeg4 from '../../asset/Page-profil/fd_qsn.jpg'


function Gallerie () {
  
  return (
    <div className='Gallery'>
        <h1>Gallery</h1>
    <div className='galleryContent'>
    <img src={jpeg1} alt='pictureGallerie'/>
    <img src={jpeg2} alt='pictureGallerie'/>
    <img src={jpeg3} alt='pictureGallerie'/>
    <img src={jpeg4} alt='pictureGallerie'/>
        </div>
      </div>
  )
};

export default Gallerie;
