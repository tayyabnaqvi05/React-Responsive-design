import React from 'react';
import '../App.css';
import hero from './images/hero.png';
import frame from "./images/Frame.png";
import account from "./images/account.png";
import review from "./images/Review.png"; 
import consent from "./images/consent.png";
import access from "./images/access.png";
const content = () => {
  return (
    <>
    <div className="container">
            <div className="row ">
                <div className="col-xs-12 col-md-12 col-lg-6"><img src={hero} alt=""/></div>
                <div className="col-xs-12 col-md-12 col-lg-6">
                  <div className="box">
                    <div className="welcome">
                      <h3>Welcome to the ASH Research Collaborative Data Hub Participant Portal!</h3>
                      <p>The Data Hub is a program that aims to improve the lives of people with blood diseases by finding better and more effective ways to care for patients. To learn more about the Data Hub, click the button below. </p>
                      <div className="btn-frame">
                        <button className="btn d-grid col-sm-12 col-lg-6" value=""><h5>Join the Data hub</h5></button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="work">
                <h3>How does it work?</h3>
                <p>Here is a quick overview of what steps are involved in joining the Data Hub.</p>
              </div>
              <div className="mgt">
              <div className="row">
                <div className="col-xs-12 col-md-12 col-lg-6">
                  <div className="d-flex">
                  <div><img src={account} alt="acount" className="main-icon"/></div>
                  <div className='ml-3'>  
                    <h3 className='mainhead'>Create an Account</h3>
                    <p className='maindesc'>You will provide your email address or mobile phone number and create a password.</p>
                      </div>
                    </div>
                    <div className="d-flex">
                      <div><img src={review} alt="acount" className="main-icon"/></div>
                      <div className='ml-3'>  
                        <h3 className='mainhead'>Review the consent form</h3>
                        <p className='maindesc'>You can review the purpose of the ASH RC Data Hub and the reasons why your participation is important. The consent process takes approximately fifteen minutes, but you can take as much time as you need.</p>
                          </div>
                        </div>
                        <div className="d-flex">
                          <div><img src={consent} alt="acount" className="main-icon"/></div>
                          <div className='ml-3'>  
                            <h3 className='mainhead'>Fill in the consent form</h3>
                            <p className='maindesc'>If you agree to join, you'll be asked to provide your name, date of birth, and electronic signature. You may download your signed consent form at any time.</p>
                              </div>
                            </div>
                            <div className="d-flex">
                              <div><img src={access} alt="acount" className="main-icon"/></div>
                              <div className='ml-3'>  
                                <h3 className='mainhead'>Access your profile</h3>
                                <p className='maindesc'>Your profile will provide you access to the Data Hub's consent form(s) and educational materials.</p>
                                </div>
                  </div>
                </div>
                <div className="col-xs-12 col-md-12 col-lg-6">
                  <div className="mt-5">
                   <img src={frame} alt=""/>
                  </div>
                </div>
                <div className="d-grid gap-2 col-lg-3 col-md-12 mx-auto mb-3 mt-3">
                  <button type="button" className="btn btn-danger align-items-center">Create an Account</button>
                  </div>
              </div>
            </div>
    </div>
    </>
  );
};
export default content;