import React from 'react';
import Header from './components/common/Header';
import { Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import MainPage from './pages/MainPage';
import NotFoundPage from './pages/NotFoundPage';

const App = () => {
  return (
    <>
      <Helmet>
        <title>Leeheeae</title>
      </Helmet>
      <Header />
      <Routes>
        <Route path="/" element={<MainPage />} />
        {/* NotFound */}
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
};

export default App;
