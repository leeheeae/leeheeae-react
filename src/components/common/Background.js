import React, { useEffect } from 'react';
import { useSpring, animated } from 'react-spring';
import styled from 'styled-components';

const BackgroundBlock = styled.div`
  width: 100%;
  height: 100vh;
  position: fixed;
  z-index: -1;

  .b1,
  .b2,
  .b3 {
    position: absolute;
    will-change: transform;
    border-radius: 50%;
    /* background: lightcoral; */
    background: var(--ball-color);
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.7);
    opacity: 0.6;
  }

  .b1 {
    width: 170px;
    height: 170px;
  }

  .b2 {
    width: 350px;
    height: 350px;
  }

  .b3 {
    width: 200px;
    height: 200px;
  }

  .b1::after,
  .b2::after,
  .b3::after {
    content: '';
    position: absolute;
    top: 50px;
    left: 50px;
    width: 50px;
    height: 50px;
    border-radius: 50%;
    background: rgba(255, 255, 255, 0.8);
  }

  .b2::after {
    top: 70px;
    left: 70px;
    width: 70px;
    height: 70px;
  }

  .b3::after {
    top: 50px;
    left: 50px;
    width: 50px;
    height: 50px;
  }

  .hooks-filter {
    position: absolute;
    width: 100%;
    height: 100%;
    filter: url('#goo');
    overflow: hidden;
  }
`;

const fast = { tension: 1200, friction: 40 };
const slow = { mass: 10, tension: 200, friction: 50 };
const trans = (x, y) => `translate3d(${x}px,${y}px,0) translate3d(-50%,-50%,0)`;

const Background = ({ children }) => {
  const [{ pos1 }, animate] = useSpring({ pos1: [0, 0], config: fast }, []);
  const [{ pos2 }] = useSpring({ pos2: pos1, config: slow }, []);
  const [{ pos3 }] = useSpring({ pos3: pos2, config: slow }, []);

  useEffect(() => {
    const handler = ({ clientX, clientY }) =>
      animate({ pos1: [clientX, clientY] });
    window.addEventListener('mousemove', handler);
    return () => window.removeEventListener('mousemove', handler);
  }, []);

  return (
    <>
      <BackgroundBlock>
        <svg style={{ position: 'absolute', width: 0, height: 0 }}>
          <filter id="goo">
            <feGaussianBlur
              in="SourceGraphic"
              result="blur"
              stdDeviation="30"
            />
            <feColorMatrix
              in="blur"
              values="1 0 0 0 0 0 1 0 0 0 0 0 1 0 0 0 0 0 30 -7"
            />
          </filter>
        </svg>
        <div className="hooks-main">
          <div className="hooks-filter">
            <animated.div
              className="b1"
              style={{ transform: pos3.to(trans) }}
            />
            <animated.div
              className="b2"
              style={{ transform: pos2.to(trans) }}
            />
            <animated.div
              className="b3"
              style={{ transform: pos1.to(trans) }}
            />
          </div>
        </div>
      </BackgroundBlock>
      {children}
    </>
  );
};

export default Background;
