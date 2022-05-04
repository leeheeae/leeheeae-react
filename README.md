# 포트폴리오

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
