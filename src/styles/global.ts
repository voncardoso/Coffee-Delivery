import {createGlobalStyle} from 'styled-components'
  
export const GlobalStyles = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }   

    body{
        background: ${(props) => props.theme['background']};
        color: ${(props) => props.theme['base-text']};
        -webkit-font-smoothing: antialiased;
    }
`;