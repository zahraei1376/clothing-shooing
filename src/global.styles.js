import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
    *,
    *::before,
    *::after{
        padding: 0;
        margin: 0;
        box-sizing: border-box;
    }

    body{
        margin: 0;
        font-size:62.5%;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        font-family: 'Open Sans Condensed', sans-serif;
        padding: 2rem 3rem;

        @media screen and (max-width:37.5em){
            padding: 1rem;
        }
    }
    code {
        font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
        monospace;
    }
`;