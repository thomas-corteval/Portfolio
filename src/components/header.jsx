import React from 'react';
import { Link } from 'react-router-dom'; 
import './header.css';

function Header() {
  return (
    <header>
      <div id='header'>
        <h1>Thomas Corteval</h1>
        <div id="nav">
          <Link to="/projets"><h2>Accueil</h2></Link>
          <Link to="/projets"><h2>Projets</h2></Link>
          <Link to="/a-propos"><h2>À propos</h2></Link>
          <Link to="/contact"><h2>Contact</h2></Link>
        </div>
      </div>
      
    </header>
  );
}

export default Header;
