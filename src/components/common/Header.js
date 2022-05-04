import React from 'react';
import styled from 'styled-components';
import DarkMode from './DarkMode';

const HeaderBlock = styled.header`
  position: fixed;
  top: 25px;
  width: 100%;
  padding: 0 1.5rem;
`;

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
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

const Header = () => {
  return (
    <HeaderBlock>
      <HeaderContainer>
        <Logo>LEEHEEAE👋🏻</Logo>
        <DarkMode />
      </HeaderContainer>
    </HeaderBlock>
  );
};

export default Header;
