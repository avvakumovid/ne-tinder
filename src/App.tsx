import React, { useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import MainPage from './pages/Main/MainPage';
import Header from './components/header/Header';
import RegistrationPage from './pages/Registration/RegistrationPage';
import { Login } from './pages/Login/Login';
import { useSelector, useDispatch } from 'react-redux';
import { useTypedSelector } from './hook/useTypedSelector';
import { withCookies } from 'react-cookie';
import { setAuthToken } from './store/slices/user.slice';

function App() {
  const { authToken } = useTypedSelector((state) => state.user);
  const dispatch = useDispatch();

  useEffect(() => {
    const token = localStorage.getItem('authToken');
    if (token) {
      dispatch(setAuthToken(token));
    }
  }, []);
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

export default withCookies(App);
