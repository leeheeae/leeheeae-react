import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
:root {
    --bg-color: ${({ theme }) => theme.bgColor};
    --text-color: ${({ theme }) => theme.textColor};
    --border-color: ${({ theme }) => theme.borderColor};
    --border-color2: ${({ theme }) => theme.borderColor2};
}

body {
    background: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.textColor};
    transition: 0.3s;
}
`;
