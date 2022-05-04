import React, { useState, useCallback } from 'react';
import { GlobalStyle } from './theme/GlobalStyle';
import Header from './components/common/Header';
import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';
import * as themeObject from './theme/theme';

const App = () => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = useCallback(() => {
    const changeTheme = theme === 'light' ? 'dark' : 'light';
    setTheme(changeTheme);
  }, [theme]);

  return (
    <>
      <GlobalStyle theme={themeObject[theme]} />
      <Helmet>
        <title>Leeheeae</title>
      </Helmet>
      <Header toggleTheme={toggleTheme} mode={theme} />
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* NotFound */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
