import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Main from './components/Main/Main';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/home" element={<Main />} />
    </Routes>
  );
}

export default App;
