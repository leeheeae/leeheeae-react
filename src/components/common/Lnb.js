import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';

const LnbBlock = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  li {
    font-size: 0.96rem;
    font-weight: 500;

    a {
      color: var(--text-color);
      opacity: 0.7;
      transition: 0.2s;
    }

    &:hover a {
      opacity: 1;
    }

    &.active a {
      opacity: 1;
    }
  }

  li + li:before {
    padding: 0 1.6rem;
    color: var(--text-color);
    content: '\\B7';
  }
`;

const lnbMenu = [
  {
    name: 'Home',
    path: '/',
  },
  {
    name: 'About',
    path: '/about',
  },
  {
    name: 'Project',
    path: '/proejct',
  },
  {
    name: 'Contact',
    path: '/contact',
  },
];

const Lnb = () => {
  const { pathname } = useLocation();

  return (
    <LnbBlock>
      {lnbMenu.map((menu) => (
        <li key={menu.name} className={pathname === menu.path ? 'active' : ''}>
          <Link to={menu.path}>{menu.name}</Link>
        </li>
      ))}
    </LnbBlock>
  );
};

export default Lnb;
