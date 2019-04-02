import reset from "styled-reset";
import baseStyled, {
  ThemeProps,
  createGlobalStyle,
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
    light: "#FAFAEA",
    main: "#F7FD87",
    dark: "#8A6117"
  },
  cyan: {
    light: "#E2F9FB",
    main: "#56DCF2",
    dark: "#3782A2"
  },
  base: {
    lightest: "#F3F8FA",
    light: "#7E96B2",
    main: "#596B8E",
    dark: "#404A6C",
    darker: "#2A2D4B"
  }
};

const margins = {
  sm: "8px",
  md: "16px",
  lg: "32px",
  xl: "64px"
};

const fonts = {
  main: "'Source Sans Pro', sans-serif;",
  accent: "'Playfair Display', serif",
  monospace: "'Source Code Pro', monospace"
};

const media = {
  desktop: `@media (min-width: 992px)`,
  tablet: `@media (min-width: 768px)`,
  phone: `@media (min-width: 576px)`
};

export const theme = {
  media,
  fonts,
  colors,
  margins,
  max_width: "640px"
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

  a, p, h1, h2, h3, h4, h5 {
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
