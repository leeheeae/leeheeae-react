import React from 'react';
import styled from 'styled-components';
import ThemeToggle from './ThemeToggle';
import Lnb from './Lnb';

const HeaderBlock = styled.header`
  position: fixed;
  width: 100%;
  /* top: 20px;
  padding: 0 1.5rem; */
  top: 30px;
  padding: 0 3rem;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Logo = styled.div`
  font-size: 1.4rem;
  font-weight: 800;
`;

const Header = ({ toggleTheme, mode, theme }) => {
  return (
    <HeaderBlock>
      <HeaderContainer>
        <Logo>LEEHEEAE👋🏻</Logo>
        <Lnb />
        <ThemeToggle toggle={toggleTheme} mode={mode} theme={theme} />
      </HeaderContainer>
    </HeaderBlock>
  );
};

export default Header;
