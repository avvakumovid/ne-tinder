import React from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import MainPage from './pages/Main/MainPage';
import Header from './components/header/Header';
import RegistrationPage from './pages/Registration/RegistrationPage';
import { Login } from './pages/Login/Login';
import { useSelector } from 'react-redux';
import { useTypedSelector } from './hook/useTypedSelector';

function App() {
  const { authToken } = useTypedSelector((state) => state.user);

  return (
    <>
      {!authToken ? (
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      ) : (
        <Routes>
          <Route path="/auth" element={<AuthPage />} />
          <Route path="/" element={<MainPage />} />
          <Route path="/registration" element={<RegistrationPage />} />
        </Routes>
      )}
    </>
  );
}

export default App;
