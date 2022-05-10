import React, { useState, useCallback, useEffect } from 'react';
import { GlobalStyle } from './theme/GlobalStyle';
import Header from './components/common/Header';
import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';
import * as themeObject from './theme/theme';
// import Background from './components/common/Background';

const App = () => {
  //darkmode
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

  //nav
  const [activeMenu, setActiveMenu] = useState('Home');

  const onClick = (name) => {
    setActiveMenu(name);
  };

  return (
    <div id="app">
      <GlobalStyle theme={themeObject[theme]} />
      <Helmet>
        <title>Leeheeae</title>
      </Helmet>
      <Header
        toggleTheme={toggleTheme}
        mode={theme}
        theme={themeObject[theme]}
        activeMenu={activeMenu}
        onClick={onClick}
      />
      <Routes>
        <Route
          path="/"
          element={<MainPage activeMenu={activeMenu} onClick={onClick} />}
        />
        {/* NotFound */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
