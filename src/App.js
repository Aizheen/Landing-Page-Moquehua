import './App.css';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Ubicacion from './components/Ubicacion';
import Tarjetas from './components/Tarjetas';
import SomosMoquehua from './components/SomosMoquehua';
import Footer from './components/Footer';
import BtnWp from './components/Btn-wp';

function App() {
  return (
    <div className="App">
     <BtnWp/>
     <Navbar/>
     <Hero/>
     <SomosMoquehua/>
     <Tarjetas/>
     <Ubicacion/>
     <Footer/>
    </div>
  );
}

export default App;
