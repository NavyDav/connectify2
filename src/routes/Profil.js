import {Component} from 'react';
import '../style/globalssas.css';
import Banner from '../components/Profil/Banner';
import { getByTitle } from '@testing-library/react';
import Navbar3 from '../components/Profil/Navbar3';
import Wall from '../components/Profil/Walls'
import Gallery from '../components/Profil/Gallery';
import Video from '../components/Profil/Video'
import Music from '../components/Profil/Music';


class Account extends Component {

    render(Component){
      return (
    <div className='account'>
           <Banner />
           <Navbar3 />
           <Wall />
           <Gallery />
           <Video />
           <Music />

</div>
    
      )
    }
  };
  
  
  export default Account;