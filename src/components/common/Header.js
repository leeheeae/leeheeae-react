import React from 'react';
import styled from 'styled-components';
import ThemeToggle from './ThemeToggle';
import Menu from './Menu';
import { Lotation } from '../../config/data';

const HeaderBlock = styled.header`
  position: fixed;
  width: 100%;
  min-width: 968px;
  padding: 40px 4rem 0;
  backdrop-filter: blur(2px);
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
  display: flex;
  align-items: flex-end;
  font-size: 1.4rem;
  font-weight: 800;
  cursor: pointer;

  & span {
    margin-bottom: 4px;
    transform-origin: bottom;
  }
  &:hover span {
    display: inline-block;
    animation: ${Lotation} 0.3s linear infinite alternate;
  }
`;

const Header = ({ toggleTheme, mode, theme, activeMenu, onClick }) => {
  return (
    <HeaderBlock>
      <HeaderContainer>
        <Logo onClick={() => onClick('Home')}>
          LEEHEEAE<span>👋🏻</span>
        </Logo>
        <nav>
          <Menu activeMenu={activeMenu} onClick={onClick} />
        </nav>
        <ThemeToggle toggle={toggleTheme} mode={mode} theme={theme} />
      </HeaderContainer>
    </HeaderBlock>
  );
};

export default Header;
