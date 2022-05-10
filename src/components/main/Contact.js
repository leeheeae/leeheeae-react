import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { SectionBlock } from '../common/Section';
import { BsMailbox, BsGithub, BsFillPhoneVibrateFill } from 'react-icons/bs';
import { Lotation } from '../../config/data';

const ContactBlock = styled(SectionBlock)`
  .title-box {
    text-align: center;

    h1 {
      font-size: 3rem;
      font-weight: 600;
      line-height: 1.5;
      position: relative;

      & span {
        display: inline-block;
        animation: ${Lotation} 0.3s linear infinite alternate;
        position: absolute;
        right: -60px;
        margin-bottom: 4px;
        transform-origin: bottom;
      }
    }
    p {
      font-size: 1.3rem;
      opacity: 0.7;
      font-weight: 400;
      line-height: 2;
      color: var(--text-color);
    }
  }

  .btn-list {
    display: flex;
    margin-top: 3rem;
    text-align: center;

    .icon + .icon {
      margin-left: 20px;
    }

    .icon a {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 64px;
      padding: 0 20px;
      border-radius: 64px;
      border: 1px solid #ccc;

      span {
        margin-left: 10px;
        font-size: 1.1rem;
        font-weight: 500;
        color: var(--text-color);
      }

      svg {
        fill: var(--text-color);
      }

      &.github {
        width: 64px;
        background-color: var(--point-color);
        border: none;
        cursor: pointer;
        padding: 0;

        svg {
          fill: #fff;
        }
      }

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;

const Contact = ({ activeMenu }) => {
  const ref = useRef(null);

  useEffect(() => {
    if (activeMenu !== 'Contact') return;

    ref.current.scrollIntoView({ behavior: 'smooth' });
  }, [activeMenu]);

  return (
    <ContactBlock ref={ref}>
      <div className="title-box">
        <h1>
          I look forward to hearing from you <span>🖐🏻</span>
        </h1>
        <p>함께 성장해고자 하는 곳의 연락을 기다립니다. </p>
      </div>
      <div className="btn-list">
        <div className="icon">
          <a href="mailto:chromeee@daum.net" className="email">
            <BsMailbox size="40px" />
            <span>chromeee@daum.net</span>
          </a>
        </div>
        <div className="icon">
          <a href="tel:010-2332-5270" className="number">
            <BsFillPhoneVibrateFill size="40px" />
            <span>010-2332-5270</span>
          </a>
        </div>

        <div className="icon">
          <a
            href="https://github.com/leeheeae/"
            target="_blank"
            rel="noreferrer"
            className="github"
          >
            <BsGithub size="42px" />
          </a>
        </div>
      </div>
    </ContactBlock>
  );
};

export default Contact;
