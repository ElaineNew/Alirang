import React from 'react';
import { Link } from 'react-router-dom';
import Logo from '../logo.jpeg'


export const Navbar = () => {

  return(
    <div>
      <nav className="navbar navbar-expand-lg bg-theme">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/home"><img src={Logo} className="img-logo" alt="logo" /></Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <ul className="navbar-nav">
              <li className='nav-item'>
              <Link className="nav-link active" aria-current="page" to="/home">Home</Link>
              </li>
              <li className='nav-item'>
              <Link className="nav-link" id='menu-link' to="/menu">Menu</Link>
              </li>
              {/* <li className='nav-item'>
              <Link className="nav-link"  to="/order">Order</Link>
              </li> */}
              <li className='nav-item'>
              <Link className="nav-link" to="/contact">Contact</Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}