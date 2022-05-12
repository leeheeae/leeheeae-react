import React from 'react';
import styled from 'styled-components';

const ProejctItemBlock = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 4rem;

  .text-box {
    width: 368px;
    .tag {
      font-size: 1.4rem;
      font-weight: 400;
    }
    .title {
      display: block;
      margin: 30px 0 0 0;
      font-size: 2.6rem;
      font-weight: 600;
      line-height: 133%;
      letter-spacing: -0.03em;
    }
    .keyword {
      margin: 1rem 0 0 0;
      opacity: 0.8;
      font-size: 1.1rem;
      letter-spacing: 0.04375em;
      line-height: 156%;
    }
    .description {
      margin: 2.2rem 0 4rem;
      font-size: 1.1rem;
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
    width: 530px;
    height: 880px;
    text-align: left;
    background-color: #ccc;
    box-shadow: 0 5px 10px rgb(100 100 100 / 15%),
      0 2px 4px rgb(100 100 100 / 15%);
    overflow: hidden;

    img {
      display: block;
      object-fit: cover;
      width: 100%;
    }
  }
`;

const ProjectItem = ({ project }) => {
  return (
    <ProejctItemBlock>
      <div className="text-box">
        <h3 className="tag">{project.tag}</h3>
        <h2 className="title">{project.title}</h2>
        <div className="keyword">{project.keyword}</div>
        <p className="description">{project.description}</p>
        <div className="link-list">
          {project.link.github && (
            <a href={project.link.github} target="_blank" rel="noreferrer">
              <div className="btn">Gitgub</div>
            </a>
          )}
          {project.link.view && (
            <a href={project.link.view} target="_blank" rel="noreferrer">
              <div className="btn">View</div>
            </a>
          )}
        </div>
      </div>
      <div className="img-box">{project.img}</div>
    </ProejctItemBlock>
  );
};

export default ProjectItem;
