import { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';

const GlobalStyle = createGlobalStyle`
     ${reset};
    :root{
      --primary-color: #312e81;
      --hover-color: #4338ca;
      --text-color: white;
    }
    html,body {
      font-size: 62.5%;
    }
    
`;

export default GlobalStyle;
