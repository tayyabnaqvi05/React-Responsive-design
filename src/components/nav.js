import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import logo from './images/logo.png';
const Navi = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container">
            <Link to="/content" className="navbar-brand"><img alt="logo" src={logo} className="logo" /></Link>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="/" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    ENGLISH
                  </a>
                  <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a className="dropdown-item" href="/">ENGLISH</a>
                    <a className="dropdown-item" href="/">SPANISH</a>
                  </div>
                </li>
                <li className="nav-item active">
                <Link to="/login" className="nav-link text-danger">SIGN IN<span className="sr-only">(current)</span></Link>
                </li>
                
              </ul>
            </div>
          </div>
          </nav>
    </>
  );
};
export default Navi;
