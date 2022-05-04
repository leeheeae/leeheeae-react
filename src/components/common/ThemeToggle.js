import React from 'react';
import styled from 'styled-components';
import { MdDarkMode, MdLightMode } from 'react-icons/md';

const ThemeToggleBlock = styled.button`
  background-color: ${(props) => props.theme.bgColor};
  border: ${(props) => props.theme.borderColor};
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 42px;
  height: 42px;
  border-radius: 50%;
  box-shadow: ${(props) =>
    props.mode === 'dark'
      ? '0px 5px 10px rgba(40, 40, 40, 1), 0px 2px 4px rgba(40, 40, 40, 1)'
      : '0 5px 10px rgba(100, 100, 100, 0.15), 0 2px 4px rgba(100, 100, 100, 0.15)'};
  svg {
    color: ${({ theme }) => theme.textColor};
  }
  &:hover {
    opacity: 0.7;
  }
`;

const ThemeToggle = ({ toggle, mode, theme }) => {
  return (
    <ThemeToggleBlock onClick={toggle} mode={mode} theme={theme}>
      {mode === 'dark' ? <MdDarkMode /> : <MdLightMode />}
    </ThemeToggleBlock>
  );
};

export default ThemeToggle;
