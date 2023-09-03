import {Component} from 'react';
import '../style/globalssas.css';

import Main from '../components/Home/Main';
import Newsletter from '../components/Home/Newsletter';
import Bienvenue from '../components/Home/Bienvenue.jsx';
import Actualite from '../components/Home/Actualité.jsx';
import Qui from '../components/Home/Qui.jsx';
import Contact from '../components/Home/Contact';

class Home extends Component {
    render(Component){
      return (
        <div className="Homerun">
              <Main /> 
              <Bienvenue />
              <Actualite />
              <Qui />
              <Contact />
              <Newsletter />
        </div>
      )
    }
  };
  
  
  export default Home;