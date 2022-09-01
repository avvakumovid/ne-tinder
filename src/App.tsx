import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import MainPage from './pages/Main/MainPage';
import Header from './components/header/Header';
import RegistrationPage from './pages/Registration/RegistrationPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/auth" element={<AuthPage />} />
        <Route path="/" element={<MainPage />} />
        <Route path="/registration" element={<RegistrationPage />} />
      </Routes>
    </>
  );
}

export default App;
