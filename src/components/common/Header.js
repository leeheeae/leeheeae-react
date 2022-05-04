import React, { useCallback } from 'react';
import styled from 'styled-components';
import ThemeToggle from './ThemeToggle';

const HeaderBlock = styled.header`
  position: fixed;
  top: 20px;
  width: 100%;
  padding: 0 1.5rem;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;

  .lnb {
    display: flex;

    li {
      padding: 0 20px;
    }
  }
`;

const Logo = styled.div`
  font-size: 1.3rem;
  font-weight: 800;
`;

const Header = ({ toggleTheme }) => {
  return (
    <HeaderBlock>
      <HeaderContainer>
        <Logo>LEEHEEAE👋🏻</Logo>
        <ThemeToggle toggle={toggleTheme} />
      </HeaderContainer>
    </HeaderBlock>
  );
};

export default Header;
