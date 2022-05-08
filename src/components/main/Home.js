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

  h1 {
    font-size: 4.4rem;
    font-weight: 800;
    line-height: 1.2;
    letter-spacing: -1px;
    margin: 0 0 1.6rem;

    p {
      color: transparent;
      text-shadow: none;
      -webkit-text-stroke: 1px var(--text-color);
    }
  }

  h2 {
    font-size: 1.1rem;
    opacity: 0.9;
    font-weight: 400;
  }
`;
const ButtonList = styled.div`
  margin-top: 5rem;

  button {
    padding: 1.1rem 2.5rem;
    border: var(--border-color2);
    font-size: 1rem;
    font-weight: 500;
    border-radius: 4px;
    transition: 0.3s;

    & + button {
      margin-left: 8px;
    }

    &:nth-child(1) {
      background-color: var(--text-color);
      color: var(--bg-color);
      border: none;
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
        <h1>
          <p>A passionate developer</p>
          who wants to run together
        </h1>
        <h2>함께 달리고 싶은 열정적 프론트앤드 개발자 이희애입니다.</h2>
      </MainText>
      <ButtonList>
        <button>프로젝트 확인하기</button>
        <button>email 연락하기</button>
      </ButtonList>
    </HomeBlock>
  );
};

export default Home;
