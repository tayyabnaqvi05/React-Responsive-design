import React from 'react';
import {Routes, Route } from "react-router-dom";
import Login from './login';
import Navi from './nav';
import App from '../App';
import Content from './content';
import Signup from './signup';
import Welcome from './welcome';

const AppRouter = () => {
  return (
  
    <Routes>
      <Route index element={<Content />} />
      <Route exact path="/content" element={<Content />} />
      <Route  path="/login" element={<Login />} />
      <Route  path="/signup" element={<Signup />} />
      <Route  path="/welcome" element={<Welcome />} />
    </Routes>
  
  );
};

export default AppRouter;
