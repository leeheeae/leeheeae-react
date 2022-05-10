import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { menu } from '../../config/data';

const LnbBlock = styled.ul`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  li {
    font-size: 0.96rem;
    font-weight: 500;
    color: var(--text-color);
    opacity: 0.7;
    transition: 0.2s;
    cursor: pointer;

    &:hover {
      opacity: 1;
    }

    &.active {
      opacity: 1;
    }
  }

  li + li:before {
    padding: 0 1.6rem;
    color: var(--text-color);
    content: '\\B7';
  }
`;

const Menu = ({ activeMenu, onClick }) => {
  return (
    <LnbBlock>
      {menu.map((name) => (
        <li
          key={name}
          onClick={() => onClick(name)}
          className={activeMenu === name ? 'active' : ''}
        >
          {name}
        </li>
      ))}
    </LnbBlock>
  );
};

export default Menu;
