import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import logo from './images/logo.png';
import friendship from './images/friendship.png'
const Welcome = () => {
    return (
<>
<div className="row ">
                <div className="col-xs-12 col-md-12 col-lg-12">
                  <div className="welbox">
                    <div className="welcomebox">
                    <img alt="logo" src={logo} className="logo1" />
                      <h2 className="wc">Welcome to the ASH RC Data Hub</h2>
                      <svg className="svg-line" xmlns="http://www.w3.org/2000/svg" width="598" height="2" viewBox="0 0 598 2" fill="none">
                      <path opacity="0.08" d="M0.5 1H597.5" stroke="#26363E"/>
                      </svg>hhh
                      <img alt="friendship" src={friendship} className="friendimg" />
                      <h2 className="wc">Verify your account</h2>
                      <p className="verification">A verification email has been sent to <span>elizabeth@gmail.com.</span> Please check your mailbox to verify the account before you sign in.</p>
                      <div className="friend-btn">
                      <div className="row ">
                      <Link to="/login"><button  className="btn friend" value=""><h5 className="friendsignin">Sign in now</h5></button></Link>
                      </div>
                      </div>
                      <svg className="svg-line" xmlns="http://www.w3.org/2000/svg" width="598" height="2" viewBox="0 0 598 2" fill="none">
                      <path opacity="0.08" d="M0.5 1H597.5" stroke="#26363E"/>
                      </svg>
                      <p className="newvr">It may take a minute to receive the email.
                               Haven't received it?<span className="resend">Resend a new email.</span> </p>
                     </div>
                  </div>
                </div>
              </div>
</>
  );
};  
export default Welcome;