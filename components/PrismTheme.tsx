import defaultTheme from "prism-theme-night-owl";
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  ${defaultTheme}
  .token {
    background: none!important;
  }
  pre,
  pre code {
    margin: 0!important;
    margin-bottom: 16px!important;
  }
`;
