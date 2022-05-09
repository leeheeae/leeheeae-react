import React from 'react';
import styled from 'styled-components';
import { SectionBlock } from '../common/Section';
import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiReact,
  SiMysql,
  SiMongodb,
  SiExpress,
  SiAdobephotoshop,
  SiAdobeillustrator,
  SiAdobexd,
} from 'react-icons/si';
import { RiVuejsFill } from 'react-icons/ri';
import { FaNodeJs } from 'react-icons/fa';
import Wavy from '../svg/Wavy';

const SkillBlock = styled(SectionBlock)``;

const MainText = styled.div`
  text-align: center;
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
    }
  }

  h2 {
    font-size: 1.1rem;
    opacity: 0.9;
    font-weight: 400;
  }
`;

const ItemList = styled.div`
  width: 100%;

  .item {
    padding: 2rem;
    line-height: 1.5;
    text-align: center;

    & + .item {
      margin-bottom: 2rem;
    }

    h3 {
      font-size: 1.5rem;
      font-weight: 800;
    }
    .sub-text {
      margin-top: 4px;
      font-size: 1rem;
    }
    .tools-list {
      margin-top: 1.4rem;
      display: flex;
      justify-content: center;

      li {
        width: 90px;
        text-align: center;
        transition: 0.3s;

        .icon {
          width: 42px;
          height: 42px;
          margin: 0 auto 3px;
          text-align: center;
        }
        p {
          font-size: 0.9rem;
        }

        &:hover {
          color: var(--point-color);

          .icon svg {
            fill: var(--point-color);
          }
        }
      }
    }
  }
`;

const ToolsListInfo = [
  {
    name: 'Frontend Tools 🚗',
    comment:
      '마크업 태그부터 HTTP 통신을 통한 데이터까지 다양한 툴을 이용하여 작업이 가능합니다.',
    tools: [
      {
        name: 'HTML',
        icon: <SiHtml5 size="42px" />,
      },
      {
        name: 'CSS',
        icon: <SiCss3 size="42px" />,
      },
      {
        name: 'Vanila JS',
        icon: <SiJavascript size="42px" />,
      },
      {
        name: 'React JS',
        icon: <SiReact size="42px" />,
      },
      {
        name: 'Vue Js',
        icon: <RiVuejsFill size="42px" />,
      },
    ],
  },
  {
    name: 'Backend Tools 🚓',
    comment:
      '마크업 태그부터 HTTP 통신을 통한 데이터까지 다양한 툴을 이용하여 작업이 가능합니다.',
    tools: [
      {
        name: 'NODE JS',
        icon: <FaNodeJs size="42px" />,
      },
      {
        name: 'MYSQL',
        icon: <SiMysql size="42px" />,
      },
      {
        name: 'MongoDB',
        icon: <SiMongodb size="42px" />,
      },
      {
        name: 'exporess',
        icon: <SiExpress size="42px" />,
      },
      {
        name: 'Koa',
        icon: <FaNodeJs size="42px" />,
      },
    ],
  },
  {
    name: 'Design Tools 🎁 ',
    comment:
      '어도비의 디자인 툴을 이용하여 사진을 편집하고 UI/UX에 관한 모든 디자인을 작업합니다.',
    tools: [
      {
        name: 'Photoshop',
        icon: <SiAdobephotoshop size="42px" />,
      },
      {
        name: 'Illustrator',
        icon: <SiAdobeillustrator size="42px" />,
      },
      {
        name: 'Adobe XD',
        icon: <SiAdobexd size="42px" />,
      },
    ],
  },
];

const Tools = ({ tool }) => {
  return (
    <div className="item">
      <h3>{tool.name}</h3>
      <p className="sub-text">{tool.comment}</p>
      <ul className="tools-list">
        {tool.tools.map((t) => (
          <li key={t.name}>
            <div class="icon">{t.icon}</div>
            <p>{t.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Skill = () => {
  return (
    <SkillBlock>
      <MainText>
        <h1>
          <span>새로운 경험을 </span> <br />
          두려워하지 않는 개발자
        </h1>
      </MainText>
      <ItemList>
        {ToolsListInfo.map((tool, index) => (
          <Tools tool={tool} key={index} />
        ))}
      </ItemList>
    </SkillBlock>
  );
};

export default Skill;
