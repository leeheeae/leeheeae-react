import React from 'react';
import styled from 'styled-components';

const HomeBlock = styled.section`
  max-width: 968px;
  width: 100%;
  height: 100%;
  min-height: 100vh;
  padding: 4.5rem 0 1rem;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const MainText = styled.div`
  text-align: center;

  h3 {
    font-size: 1rem;
    font-weight: 400;
  }

  h1 {
    font-size: 2.4rem;
    margin: 10px 0;
  }

  h2 {
    font-size: 0.94rem;
    opacity: 0.7;
    font-weight: 300;
  }
`;
const ButtonList = styled.div`
  margin-top: 30px;

  button {
    padding: 0.8rem 1rem;
    border: var(--border-color2);
    font-size: 0.84rem;
    border-radius: 3px;
    transition: 0.3s;

    & + button {
      margin-left: 8px;
    }

    &:nth-child(1) {
      background-color: var(--text-color);
      color: var(--bg-color);
    }

    &:nth-child(2) {
      background-color: var(--bg-color);
      color: var(--text-color);
    }

    &:hover {
      opacity: 0.9;
    }
  }
`;

const Home = () => {
  return (
    <HomeBlock>
      <MainText>
        <h3>Hello, I'm</h3>
        <h1>LEE HEEAE</h1>
        <h2>Frontend Developer</h2>
      </MainText>
      <ButtonList>
        <button>프로젝트 확인하기</button>
        <button>email 연락하기</button>
      </ButtonList>
    </HomeBlock>
  );
};

export default Home;
