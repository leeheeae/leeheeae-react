import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { SectionBlock } from '../common/Section';
import ProjectItem from './ProjectItem';
import { Projects } from '../../config/data';

const ProjectBlock = styled(SectionBlock)`
  padding-top: 12rem;
  .project-list {
    width: 1000px;
  }
`;

const MainText = styled.div`
  text-align: center;
  margin-bottom: 3rem;
  h1 {
    font-size: 4rem;
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
    }
  }

  h2 {
    font-size: 1.1rem;
    opacity: 0.9;
    font-weight: 400;
  }
`;

const Project = ({ activeMenu }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (activeMenu !== 'Project') return;

    ref.current.scrollIntoView({ behavior: 'smooth' });
  }, [activeMenu]);

  return (
    <ProjectBlock ref={ref}>
      <MainText>
        <h1>
          <span>featured</span> Projects
        </h1>
      </MainText>
      <div className="project-list">
        {Projects.map((info) => (
          <ProjectItem project={info} key={info.title} />
        ))}
      </div>
    </ProjectBlock>
  );
};

export default Project;
