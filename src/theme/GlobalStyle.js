import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
body {
    background: ${({ theme }) => theme.bgColor};
    color: ${({ theme }) => theme.textColor};
    transition: 0.3s;
}
`;
