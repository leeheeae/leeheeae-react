import React from 'react';
import Home from '../components/main/Home';
import About from '../components/main/About';
import Skill from '../components/main/Skill';
import Project from '../components/main/Project';
import Contact from '../components/main/Contact';

const MainPage = ({ activeMenu }) => {
  return (
    <>
      <Home activeMenu={activeMenu} />
      <About activeMenu={activeMenu} />
      <Skill activeMenu={activeMenu} />
      <Project activeMenu={activeMenu} />
      <Contact activeMenu={activeMenu} />
    </>
  );
};

export default MainPage;
