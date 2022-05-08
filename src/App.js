import React, { useState, useCallback, useEffect, useRef } from 'react';
import { GlobalStyle } from './theme/GlobalStyle';
import Header from './components/common/Header';
import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';
import * as themeObject from './theme/theme';
// import Background from './components/common/Background';

const App = () => {
  const getInitialTheme = useCallback(() => {
    let theme = window.localStorage.getItem('app_theme');
    const INVALID_THEME = theme !== 'light' && theme !== 'dark';
    if (!theme || INVALID_THEME) {
      const { matches } = window.matchMedia('(prefers-color-scheme: dark)');
      theme = matches ? 'dark' : 'light';
    }
    return theme;
  }, []);

  const [theme, setTheme] = useState(getInitialTheme);

  const toggleTheme = useCallback(() => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('app_theme', theme);
  }, [theme]);

  return (
    <div>
      <GlobalStyle theme={themeObject[theme]} />
      <Helmet>
        <title>Leeheeae</title>
      </Helmet>
      <Header
        toggleTheme={toggleTheme}
        mode={theme}
        theme={themeObject[theme]}
      />
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* NotFound */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
