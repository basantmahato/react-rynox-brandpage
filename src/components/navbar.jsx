import React, { useState } from 'react';
import './navbar.css';
import { faBars, faTimes ,faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  // explicit functions
  const openMenu = () => setIsOpen(true);
  const closeMenu = () => setIsOpen(false);
  

  return (
    <div className="navbar">
      <Link to="/" onClick={closeMenu} className="logo">Rynox</Link>

      
      <div className={`menu ${isOpen ? "active" : ""}`}>
        <ul>
          <li><Link to="/" onClick={closeMenu}>Home</Link></li>
          <li><Link to="/about" onClick={closeMenu}>About</Link></li>
          <li><Link to="/services" onClick={closeMenu}>Services</Link></li>
          <li><Link to="/contact" onClick={closeMenu}>Contact</Link></li>
        </ul>
      </div>



      <div className="login">

      <button style={{margin:"5px"}}> <Link to="/cart" onClick={closeMenu} className="cart">
            <FontAwesomeIcon style={{color:"#fff"}}  icon={faCartShopping} size="x" />
          </Link>
        </button>

        <Link to="/login" onClick={closeMenu}>
          <button>Login</button>
        </Link>
      </div>

      
     
      <div className="toggleBtn">
        {isOpen ? (
          <button onClick={closeMenu}>
            <FontAwesomeIcon icon={faTimes} size="2x" />
          </button>
        ) : (
          <button onClick={openMenu}>
            <FontAwesomeIcon icon={faBars} size="2x" />
          </button>
        )}
      </div>
    </div>


  );
};

export default Navbar;
