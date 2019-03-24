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
    background-color: ${(p: ThemeProps<Theme>) => p.theme.colors.base.lightest};
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
