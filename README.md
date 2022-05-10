# 포트폴리오

> > 리액트를 이용한 원페이지 포트폴리오 사이트입니다.
> > 나를 나타내는 키워드와 디자인을 통해 나를 표현하기 위해 디자인하고 제작하였습니다.
> > UI/UX 디자이너로 작업했을 때의 포트폴리오와 토이프로젝트 등을 프로젝트에 추가하였습니다.
> > 디자이너로 작업했을 때의 프로젝트는 github에 올리지 못해 링크는 안걸려 있으며 이런 프로젝트를 진행했다는 정도만 알아주면 좋겠습니다.
> > 마우스를 따라다니는 공은 속도에 따라 같이 움직이기도하고 떨어졌다가 다시 붙기도 합니다. 속도에 따라 다르지만 결국에는 함께 동화되어 잘 적응을 해갈 수 있다는 뜻을 나타내기 위해 기능을 제작하였습니다.
> > 볼 제작 참고한 사이트는 https://codesandbox.io/s/ppxnl191zx?file=/src/index.js:1228-1252 입니다.
> > 부족하지만 이쁘게 봐주셨으면 좋겠습니다 :D

## 사용 🍔

**라이브러리**
`react`,`react-router-dom`,`styled-components`,`react-helmet-async`, `react-spring`

**폰트**
`pretendard`

### Section

- Home
- About
- Skill
- Project
- Contact

### 다크모드 설정하기

`useState`, `useEffect`

1. theme 폴더에 theme에 관한 Object와 GlobalStyled 설정 파일 생성
   - 최상위 컴포넌트에 해당 값을 불러옴
   - `import * as themeObject from './theme/theme';`로 import 하여 지정된 테마이름으로 객체 찾기 가능
   - GlobalStyle 컴포넌트를 생성한 후 theme 상태값을 `theme={themeObject[theme]}`형태로 내려줌
2. useState를 이용하여 현재 지정된 theme 상태값 저장
   - localStorage에 저장하여 새로고침했을 경우에도 유지가 되도록 설정
   - getItem으로 해당 테마이름을 들고옴
   - light, dark 둘다 없을 경우 기본 다크로 설정
   - 값을 return 해준 후 생성한 useState의 초기값으로 설정
3. 클릭하여 테마 변경할 수 있는 컴포넌트 생성
   - 최상위 컴포넌트에서 useCallback을 이용하여 클릭핸들러 생성
   - 이전 값을 비교하여 새로운 값 갱신 (라이트모드 => 다크모드, 라이트모드 => 다크모드 )
   - 지금 프로젝트는 Header 컴포넌트 안에 있기 때문에 props로 mdoe, theme, toggleTheme 핸들러를 내려줌
4. useEffect를 이용하여 theme의 값이 변경될 때 마다 setItem을 이용하여 로컬스토리지에 갱신
5. ThemeToggle 컴포넌트에서 받아온 값을 이용하여 상태마다 다른 액션 보여주기
