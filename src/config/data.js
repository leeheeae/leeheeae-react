import portfolio from '../assets/images/project_portfolio.jpg';
import lol from '../assets/images/project_lol.jpg';
import su from '../assets/images/project_su.jpg';
import onepoint from '../assets/images/project_onepoint.jpg';
import bigboss from '../assets/images/project_bigboss.jpg';
import caros from '../assets/images/project_caros.jpg';
import violating from '../assets/images/project_violating.jpg';
import monitoring from '../assets/images/project_monitoring.jpg';
import { keyframes } from 'styled-components';

export const Projects = [
  {
    tag: 'PortFolio',
    title: '이희애 PortFolio',
    description: '#React #Redux ',
    link: {
      github: 'https://github.com/leeheeae/leeheeae-react',
      view: 'https://leeheeae.github.io/lol-search-react/',
    },
    img: <img src={portfolio} alt="portfolio-view" />,
  },
  {
    tag: 'Toy Proejct',
    title: 'LOL 전적 검색 사이트',
    description: '#반응형웹 #React #Redux',
    link: {
      github: 'https://github.com/leeheeae/lol-search-react',
      view: 'https://leeheeae.github.io/lol-search-react/',
    },
    img: <img src={lol} alt="lol-view" />,
  },
  {
    tag: 'Renewal',
    title: '에스유소프트 사이트(리뉴얼)',
    description: ' #반응형웹 #HTML #CSS #Vanila JS',
    link: {
      view: 'https://www.linux.kr/g5/',
    },
    img: <img src={su} alt="su-view" />,
  },
  {
    tag: 'Renewal',
    title: '원포인트 회사 사이트',
    description: ' #HTML #CSS #Vanila JS',
    link: {
      view: 'http://one-point.co.kr/',
    },
    img: <img src={onepoint} alt="onepoint-view" />,
  },
  {
    tag: 'New Project',
    title: '빅보스 모터사이클 커뮤니티/오픈마켓 솔루션',
    description: '#HTML #CSS #JQuery',
    link: {
      view: 'http://www.big-boss.co.kr/',
    },
    img: <img src={bigboss} alt="bigboss-view" />,
  },
  {
    tag: 'New Project',
    title: '캐로스 중국지사',
    description: '#HTML #CSS',
    link: {},
    img: <img src={caros} alt="caros-view" />,
  },
  {
    tag: 'Solution',
    title: '위반건축물 관리 솔루션',
    description: '#HTML #CSS #JQuery',
    link: {},
    img: <img src={violating} alt="violating-view" />,
  },
  {
    tag: 'Solution',
    title: '안전모니터링 솔루션',
    description: '#HTML #CSS #JQuery',
    link: {},
    img: <img src={monitoring} alt="monitoring-view" />,
  },
];

export const menu = ['Home', 'About', 'Skill', 'Project', 'Contact'];

export const Lotation = keyframes`
  0% {
    transform: rotate(0);
  }
  100% {
     transform: rotate(45deg);
  }
`;
