import React from 'react'
import { Link } from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
    <div>
      
        <nav>
        <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/gallery">Gallery</Link></li>
        </ul>
    </nav>

    </div>
  )
}

export default Header
