import React, { useEffect, useRef } from 'react';
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

const SkillBlock = styled(SectionBlock)`
  padding-top: 12rem;
`;

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
    name: 'Frontend Tools π',
    comment:
      'λ§ν¬μ νκ·ΈλΆν° HTTPλ₯Ό ν΅ν λ°μ΄ν° ν΅μ  λ±μ λ€μν ν΄λ‘ μμμ΄ κ°λ₯ν©λλ€.',
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
    name: 'Backend Tools π',
    comment:
      'κ°λ¨ν DB μ€κ³ λ° Nodejs λΌμ΄λΈλ¬λ¦¬λ₯Ό μ΄μ©ν μλ² μ μμ΄ κ°λ₯ν©λλ€.',
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
    name: 'Design Tools π ',
    comment:
      'μ΄λλΉμ λμμΈ ν΄μ μ΄μ©νμ¬ μ¬μ§μ νΈμ§νκ³  UI/UXμ κ΄ν λͺ¨λ  λμμΈμ μμν©λλ€.',
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
            <div className="icon">{t.icon}</div>
            <p>{t.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

const Skill = ({ activeMenu }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (activeMenu !== 'Skill') return;

    ref.current.scrollIntoView({ behavior: 'smooth' });
  }, [activeMenu]);

  return (
    <SkillBlock ref={ref}>
      <MainText>
        <h1>
          <span>μλ‘μ΄ κ²½νμ </span> <br />
          λλ €μνμ§ μλ κ°λ°μ
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
