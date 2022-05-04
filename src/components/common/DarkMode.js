import React, { useState } from 'react';
import styled, { css } from 'styled-components';
import { MdOutlineLightMode, MdOutlineModeNight } from 'react-icons/md';

const DarkModeBlock = styled.div`
  display: flex;
  align-items: center;
  width: 80px;
  height: 38px;
  background-color: #fff;
  border-radius: 40px;
  padding: 5px;
  box-shadow: 0 5px 10px rgba(0, 0, 0, 0.07);

  .icon {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 28px;
    height: 28px;
    border-radius: 50%;
    transition: 0.3s;
  }

  .bright {
    transform: translateX(20px) rotate(360deg);
    &.on {
      background-color: #f2cd60;
      transform: translateX(0) rotate(0);
    }
  }

  .dark {
    margin-left: auto;
    transform: translateX(-20px) rotate(360deg);

    &.on {
      background-color: #223240;
      transform: translateX(0) rotate(0);
    }
  }

  svg {
    color: #fff;
  }
`;

const DarkMode = () => {
  const [modeChange, setModeChamge] = useState(true);

  const darkModeClick = () => {
    setModeChamge(!modeChange);
    console.log(modeChange);
  };

  return (
    <>
      <DarkModeBlock onClick={() => darkModeClick()}>
        <div className={'icon bright ' + (modeChange ? 'on' : '')}>
          <MdOutlineLightMode size="24px" />
        </div>
        <div className={'icon dark ' + (!modeChange ? 'on' : '')}>
          <MdOutlineModeNight size="24px" />
        </div>
      </DarkModeBlock>
    </>
  );
};

export default DarkMode;
