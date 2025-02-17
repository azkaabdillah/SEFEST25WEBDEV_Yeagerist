import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styling/App.css';
import 'bootstrap-5.3.3/dist/css/bootstrap.min.css';
import "bootstrap-5.3.3/dist/js/bootstrap.bundle.min.js";
import Home from './home';
import Navbar from './navbar'
import Weather from './weather';
import Contact from './contact';
import News from './news';
import Map from './map'
import Footer from './footer';
import AnginTopan from './content/angin-topan';
import BadaiPetir from './content/badai-petir';
import Banjir from './content/banjir';
import GempaBumi from './content/gempa-bumi';
import GelombangPanas from './content/gelombang-panas';
import GunungMeletus from './content/gunung-meletus';
import KebakaranHutan from './content/kebakaran-hutan';
import Kekeringan from './content/kekeringan';
import TanahLongsor from './content/tanah-longsor';
import Tsunami from './content/tsunami';


function App() {
  return (
    <div className="App d-flex flex-column min-vh-100">
      <Router>
        <Navbar />
        <Routes>
          <Route index element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/weather" element={<Weather />} /> 
          <Route path="/contact" element={<Contact />} /> 
          <Route path="/news" element={<News />} />
          <Route path="/map" element={<Map />} />

          <Route path="/angin-topan" element={<AnginTopan />} />
          <Route path="/badai-petir" element={<BadaiPetir />} />
          <Route path="/banjir" element={<Banjir />} />
          <Route path="/gempa-bumi" element={<GempaBumi />} />
          <Route path="/gelombang-panas" element={<GelombangPanas />} />
          <Route path="/gunung-meletus" element={<GunungMeletus />} />
          <Route path="/kebakaran-hutan" element={<KebakaranHutan />} />
          <Route path="/kekeringan" element={<Kekeringan />} />
          <Route path="/tanah-longsor" element={<TanahLongsor />} />
          <Route path="/tsunami" element={<Tsunami />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  )
}

export default App;