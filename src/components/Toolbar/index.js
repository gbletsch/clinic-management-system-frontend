import React from 'react';

import './Style.css'

function Toolbar() {
  return (
    <nav className="nav-container">
      <ul>
        <li>
          <a href="#appointments">CONSULTAS</a>
        </li>
        <li>
          <a href="#news">NOTÍCIAS</a>
        </li>
        <li>
          <a href="#about-me">SOBRE</a>
        </li>
      </ul>
    </nav>
  )
}

export default Toolbar;