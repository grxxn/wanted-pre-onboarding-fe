import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Login from './components/Login/Login';
import Main from './components/Main/Main';

function App() {
  return (
    <Routes>
      <Route path={process.env.PUBLIC_URL + '/'} element={<Login />} />
      <Route path={process.env.PUBLIC_URL + '/home'} element={<Main />} />
    </Routes>
  );
}

export default App;
