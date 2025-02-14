import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './styling/App.css';
import 'bootstrap-5.3.3/dist/css/bootstrap.min.css';
import "bootstrap-5.3.3/dist/js/bootstrap.bundle.min.js";
import Home from './home';
import Navbar from './navbar'
import Weather from './weather';
import AnginTopan from './content/angin-topan';

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/angin-topan" element={<AnginTopan />} />
          <Route path="/weather" element={<Weather />} /> 
        </Routes>
      </Router>
    </div>
  )
}

export default App;