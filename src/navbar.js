import React, { useState } from 'react'
import './styling/navbar.css'
import "bootstrap-5.3.3/dist/css/bootstrap.min.css"
import "bootstrap-5.3.3/dist/js/bootstrap.bundle.min.js"
import { Link } from 'react-router-dom';

function Navbar() {
    const [navbar, setNavbar] = useState(false);

    const effectNavbar = () => {
      if (window.scrollY > 80) {
        setNavbar(true);
      } else {
        setNavbar(false);
      }
    }
 
    window.addEventListener('scroll', effectNavbar);

    return (
      <nav className={navbar ? "fixed-top navbar navbar-expand-lg navbar-dark bg-danger" : "fixed-top navbar navbar-expand-lg navbar-dark bg-danger scrolled"}>
        <div className="container">
          <b><Link className={navbar ? "navbar-brand" : "nav-brand-effect"} to="/">Simit</Link></b>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <b><Link className="nav-link active nav-margin" aria-current="page" to="/">Home</Link></b>
              <b><Link className="nav-link active nav-margin" aria-current="page" to="/map">Map</Link></b>
              <b><Link className="nav-link active nav-margin" aria-current="page" to="/contact">Contact</Link></b>
              <b><Link className="nav-link active nav-margin" aria-current="page" to="/news">News</Link></b>
              <b><Link className="nav-link active nav-margin" aria-current="page" to="/weather">Weather</Link></b>
            </div>
          </div>
        </div>
      </nav>
    );
}

export default Navbar