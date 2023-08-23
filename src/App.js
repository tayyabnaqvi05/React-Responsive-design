import React, { useState } from 'react';
import './App.css';
import Navi from './components/nav';
import Content from './components/content';
import Myfooter from './components/footer';
import Signup from './components/signup';
import Welcome from './components/welcome';
import Login from './components/login';

function App() {
  const [showContent, setShowContent] = useState(true);
  const [showSignUp, setShowSignUp] = useState(false);
  const [showWelcome, setShowWelcome] = useState(false);

  const handleJoinUsClick = () => {
    setShowContent(false); // Hide Content
    setShowSignUp(true); // Show Signup
    setShowWelcome(false); // Hide Welcome
  };

  const handleSignUpClick = () => {
    setShowSignUp(false); // Hide Signup
    setShowWelcome(true); // Show Welcome
  };

  return (
    <div className="App">
      <Navi />
      <div className="content">
        {showContent && <Content onJoinUsClick={handleJoinUsClick} />}
        {showSignUp && <Signup onwelcome={handleSignUpClick} />}
        {showWelcome && <Welcome />}
        <Myfooter />
      </div>
      <Login />
    </div>
  );
}

export default App;
