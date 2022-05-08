import React from 'react';
import styled from 'styled-components';
import ThemeToggle from './ThemeToggle';
import Lnb from './Lnb';

const HeaderBlock = styled.header`
  position: fixed;
  width: 100%;
  top: 40px;
  padding: 0 4rem;
`;

const HeaderContainer = styled.div`
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    margin: auto;
  }
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
        <nav>
          <Lnb />
        </nav>
        <ThemeToggle toggle={toggleTheme} mode={mode} theme={theme} />
      </HeaderContainer>
    </HeaderBlock>
  );
};

export default Header;
