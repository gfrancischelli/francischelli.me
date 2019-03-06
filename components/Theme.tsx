import reset from "styled-reset";
import { createGlobalStyle, ThemeProps } from "styled-components";
import baseStyled, {
  ThemedStyledInterface,
  ThemeProvider as BaseThemeProvider,
  ThemeProviderComponent
} from "styled-components";

const colors = {
  primary: "#DB306F",
  background: "#FAFAFA",
  grey: {
    lighter: "#B6B6B6",
    light: "#7D7B7B",
    neutral: "#6E6366",
    dark: "#57494C"
  }
};

const margins = {
  sm: "8px",
  md: "16px",
  lg: "32px"
};

export const theme = {
  colors,
  margins
};

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Cabin:400,600,700');

  ${reset}

  *, *:before, *:after {
    box-sizing: border-box;
  }

  html, body {

    background-color: ${p => p.theme.colors.background};

    font-family: 'Cabin', sans-serif !important;
    font-weight: 400;
    font-style: normal;
    color: ${(p: ThemeProps<Theme>) => p.theme.colors.grey.light};
  }

  a {
    text-decoration: none;
  }

  p {
    line-height: 1.6;
  }
`;

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
export const ThemeProvider = BaseThemeProvider as ThemeProviderComponent<Theme>;
