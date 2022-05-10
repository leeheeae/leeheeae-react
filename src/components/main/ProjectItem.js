import React from 'react';
import styled from 'styled-components';

const ProejctItemBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  .text-box {
    .tag {
      /* font-size: 1.5vw; */
      font-size: 1.4rem;
      font-weight: 400;
    }
    .title {
      display: block;
      margin: 30px 0 0 0;
      /* font-size: 2.58333vw; */
      font-size: 2.6rem;
      font-weight: 600;
      line-height: 133%;
      letter-spacing: -0.03em;
    }
    .description {
      margin: 1rem 0 0 0;
      opacity: 0.8;
      font-size: 1.1rem;
      /* font-size: 1.16667vw; */
      letter-spacing: 0.04375em;
      line-height: 156%;
    }
    .link-list {
      margin: 2.5rem 0 0 0;
      display: flex;

      .btn {
        padding: 1rem 2.5rem;
        background-color: var(--point-color);
        color: #fff;
        font-size: 0.96rem;
        font-weight: 400;
        border-radius: 2px;

        &:hover {
          opacity: 0.8;
        }
      }

      a + a {
        margin-left: 10px;
      }
    }
  }
  .img-box {
    height: 90vh;
    width: 54.925vh;
    max-width: 43vw;
    max-height: 71.81vw;
    text-align: left;
    background-color: #ccc;
  }
`;

const ProjectItem = ({ project }) => {
  return (
    <ProejctItemBlock>
      <div className="text-box">
        <h3 className="tag">{project.tag}</h3>
        <h2 className="title">{project.title}</h2>
        <p className="description">{project.description}</p>
        <div className="link-list">
          {project.link.github && (
            <a href={project.link.github} target="_blank" rel="noreferrer">
              <div className="btn">Gitgub</div>
            </a>
          )}
          <a href={project.link.view} target="_blank" rel="noreferrer">
            <div className="btn">View</div>
          </a>
        </div>
      </div>
      <div className="img-box"></div>
    </ProejctItemBlock>
  );
};

export default ProjectItem;