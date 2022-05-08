import React from 'react';
import styled from 'styled-components';
import { SectionBlock } from '../common/Section';

const AboutBlock = styled(SectionBlock)``;

const MainText = styled.div`
  h1 {
    font-size: 3.8rem;
    font-weight: 700;
    line-height: 1.4;
    letter-spacing: -0.6px;
    margin: 0 0 1.6rem;

    span {
      display: inline-block;
      font-weight: 900;
      color: transparent;
      text-shadow: none;
      -webkit-text-stroke: 1px var(--text-color);
      transition: 0.5s;

      &.point {
        -webkit-text-stroke: transparent;
        color: var(--point-color);
      }
      &:hover {
        transform: scale(1.05);
      }
    }
  }

  h2 {
    font-size: 1.1rem;
    opacity: 0.9;
    font-weight: 400;
  }
`;
const ItemList = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ItemBlock = styled.div`
  width: 32%;
  background-color: var(--bg-color);
  padding: 2rem;
  border-radius: 1rem;
  box-shadow: 0 5px 10px rgb(100 100 100 / 15%),
    0 2px 4px rgb(100 100 100 / 15%);
  margin: 1rem 0;

  .emoji {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
  .text {
    line-height: 1.4;
    h3 {
      font-size: 1.1rem;
      font-weight: 800;
      margin-bottom: 6px;
    }
    font-size: 0.94rem;
    font-weight: 400;
  }
`;

const About = () => {
  return (
    <AboutBlock>
      <MainText>
        <h1>
          <span className="point">디자인</span>을 좋아하는 <span>개발자</span>
          <br />
          <span className="point">개발</span>을 좋아하는 <span>디자이너</span>
        </h1>
      </MainText>
      <ItemList>
        <ItemBlock>
          <div className="emoji">🎨</div>
          <div className="text">
            <h3>빠른 이해</h3>
            UX/UX 디자이너로 웹 제작을 처음 시작했으며, 그 경험을 통해 화면에
            보이는 부분들을 쉽게 배우고 이해합니다.
          </div>
        </ItemBlock>
        <ItemBlock>
          <div className="emoji">📣</div>
          <div className="text">
            <h3>원활한 소통</h3>
            디자인과 개발 간의 흐름을 이해하고 작업이 진행되기 때문에 디자이너,
            개발자와의 원활한 소통이 가능합니다.
          </div>
        </ItemBlock>
        <ItemBlock>
          <div className="emoji">📅</div>
          <div className="text">
            <h3>문제 해결</h3>
            다양한 경험을 통해 생기게 되는 문제를 해결하기 위해 꾸준히 고민하고
            노력합니다
          </div>
        </ItemBlock>
      </ItemList>
    </AboutBlock>
  );
};

export default About;
