import React, { useState } from 'react';
import './App.css';
import Navi from './components/nav';
import Content from './components/content';
import Myfooter from './components/footer';
import Signup from './components/signup';
import Welcome from './components/welcome';
import AppRouter from './components/router';

function App() {
  return (
    <>
      <Navi />
        <AppRouter />
      <Myfooter />
    </>

  );
}
export default App;
 