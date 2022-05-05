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
    font-weight: 500;
  }

  h1 {
    font-size: 2.2rem;
    margin: 10px 0 1rem;
  }

  h2 {
    font-size: 0.94rem;
    opacity: 0.6;
    font-weight: 300;
  }
`;
const ButtonList = styled.div``;

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
