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
    keyword: '#React #Redux ',
    description:
      'React를 이용한 원페이지 포트폴리오 사이트, 디자인부터 기능까지 전체 구현한 페이지입니다.',
    link: {
      github: 'https://github.com/leeheeae/leeheeae-react',
      view: 'https://leeheeae.github.io/lol-search-react/',
    },
    img: <img src={portfolio} alt="portfolio-view" />,
  },
  {
    tag: 'Toy Proejct',
    title: 'LOL 전적 검색 사이트',
    keyword: '#반응형웹 #React #Redux',
    description:
      'Riot API를 이용하여 리그오브레전드 게임의 전적 검색과 실시간 게임 조회, 챔피언 정보를 확인할 수 있도록 제작하였습니다. ',
    link: {
      github: 'https://github.com/leeheeae/lol-search-react',
      view: 'https://leeheeae.github.io/lol-search-react/',
    },
    img: <img src={lol} alt="lol-view" />,
  },
  {
    tag: 'Renewal',
    title: '에스유소프트 사이트',
    keyword: ' #반응형웹 #HTML #CSS #Vanila JS',
    description:
      '에스유소프트 기업의 리뉴얼 사이트, 디자인과 HTML, CSS 퍼블리싱을 진행하였습니다.',
    link: {
      view: 'https://www.linux.kr/g5/',
    },
    img: <img src={su} alt="su-view" />,
  },
  {
    tag: 'Renewal',
    title: '원포인트 회사 사이트',
    keyword: ' #HTML #CSS #Vanila JS',
    description:
      '원포인트 기업의 리뉴얼 사이트, 전체적인 기획 참여, 디자인 및 HTML, CSS 퍼블리싱을 진행하였습니다.',
    link: {
      view: 'http://one-point.co.kr/',
    },
    img: <img src={onepoint} alt="onepoint-view" />,
  },
  {
    tag: 'New Project',
    title: '빅보스 모터사이클 커뮤니티/오픈마켓 사이트',
    keyword: '#HTML #CSS #JQuery',
    description:
      '새로 오픈한 빅보스 커뮤니티/오픈마켓 사이트의 전체적인 기획 참여, 디자인 및 HTML, CSS 퍼블리싱을 진행하였습니다.',
    link: {
      view: 'http://www.big-boss.co.kr/',
    },
    img: <img src={bigboss} alt="bigboss-view" />,
  },
  {
    tag: 'New Project',
    title: '캐로스 중국지사',
    keyword: '#HTML #CSS',
    description:
      '캐로스 중국지사의 홈페이지입니다. 전체적인 디자인과 HTML, CSS 퍼블리싱을 진행하였습니다.',
    link: {},
    img: <img src={caros} alt="caros-view" />,
  },
  {
    tag: 'Solution',
    title: '위반건축물 관리 솔루션',
    keyword: '#HTML #CSS #JQuery',
    description:
      '위반건축물 관리 솔루션의 전체적인 기획 참여, 디자인 및 HTML, CSS 퍼블리싱을 진행하였습니다.',
    link: {},
    img: <img src={violating} alt="violating-view" />,
  },
  {
    tag: 'Solution',
    title: '안전모니터링 솔루션',
    keyword: '#HTML #CSS #JQuery',
    description:
      '스마트팩토리 안전 모니터링 솔루션, 전체적인 디자인 및 HTML, CSS 퍼블리싱을 진행하였습니다.',
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
