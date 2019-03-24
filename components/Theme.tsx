import reset from "styled-reset";
import { createGlobalStyle, ThemeProps } from "styled-components";
import baseStyled, {
  ThemedStyledInterface,
  ThemeProvider as BaseThemeProvider,
  ThemeProviderComponent
} from "styled-components";

const colors = {
  pink: {
    light: "#FEE6F3",
    main: "#ED4F89"
  },
  yellow: {
    main: "#F7FD87",
    dark: "#8A6117"
  },
  cyan: {
    light: "#E2F5FB",
    main: "#56CCF2",
    dark: "#4F89A2"
  },
  background: "#FAFAFA",
  base: {
    lightest: "#F9FAFA",
    light: "#8C8DA6",
    main: "#5F6781",
    dark: "#474966",
    darker: "#3B3D4E"
  }
};

const margins = {
  sm: "8px",
  md: "16px",
  lg: "32px"

const fonts = {
  main: "'Source Sans Pro', sans-serif;",
  accent: "'Playfair Display', serif",
  monospace: "'Source Code Pro', monospace"
};

};

export const theme = {
  fonts,
  colors,
  margins
};

export const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Playfair+Display:900|Source+Code+Pro|Source+Sans+Pro:400,600,600i');

  ${reset}

  *, *:before, *:after {
    box-sizing: border-box;
  }

  html, body {
    background-color: ${(p: ThemeProps<Theme>) => p.theme.colors.base.lightest};
  }

  a, p, span, h1, h2, h3, h4, h5 {
    font-weight: 400;
    text-decoration: none;
    font-family: ${(p: ThemeProps<Theme>) => p.theme.fonts.main};
    color: ${(p: ThemeProps<Theme>) => p.theme.colors.base.main};
  }

  p {
    line-height: 1.6;
  }
`;

export type Theme = typeof theme;
export const styled = baseStyled as ThemedStyledInterface<Theme>;
export const ThemeProvider = BaseThemeProvider as ThemeProviderComponent<Theme>;
