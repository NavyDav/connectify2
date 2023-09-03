import logo from './logo.svg';
import { Route, Routes } from 'react-router-dom';
import Home from './routes/Home1'
import Footer from './components/Footer';
import Connexion from './routes/Connexion';
import Inscription from './routes/Inscription'
import Navbar from './components/Navbar';
import Contacte from './routes/Conctacte';
import Profil from './routes/Profil';
import './style/globalssas.css';


function App() {
  return (
    <div className='App'>
    <Navbar />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/connexion" element={<Connexion />} />
      <Route path="/inscription" element={<Inscription />} />
      <Route path="/contacte" element={<Contacte />} />
      <Route path="/profil" element={<Profil />} />

    </Routes>
    <Footer />
  </div>
  );
}

export default App;
