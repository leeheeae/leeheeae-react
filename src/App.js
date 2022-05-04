import React, { useState, useCallback } from 'react';
import { GlobalStyle } from './theme/GlobalStyle';
import HeaderContainer from './components/container/HeaderContainer';
import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';
import * as themeObject from './theme/theme';

const App = () => {
  const [darkmode, setDarkmode] = useState('light');

  const toggleTheme = useCallback(() => {
    const changeTheme = darkmode === 'light' ? 'dark' : 'light';
    setDarkmode(changeTheme);
  }, [darkmode]);

  return (
    <>
      <GlobalStyle theme={themeObject[darkmode]} />
      <Helmet>
        <title>Leeheeae</title>
      </Helmet>
      <HeaderContainer toggleTheme={toggleTheme} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* NotFound */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
