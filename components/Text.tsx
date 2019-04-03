import { styled } from "./Theme";

export const P = styled.p`
  font-size: 18px;
  line-height: 1.6;
  font-weight: medium;

  & + & {
    margin-top: ${p => p.theme.margins.md};
  }
`;

export const H1 = styled.h1`
  margin-bottom: ${p => p.theme.margins.lg};

  font-size: 40px;
  font-weight: bold;
  font-family: ${p => p.theme.fonts.accent};
  color: ${p => p.theme.colors.base.darker};

  line-height: 1.15;
  letter-spacing: 0.03em;
`;

export const H2 = styled.h2`
  margin-top: ${p => p.theme.margins.lg};
  margin-bottom: ${p => p.theme.margins.md};

  font-size: 28px;
  font-weight: bold;
  color: ${p => p.theme.colors.base.darker};
`;

export const H3 = styled.h3`
  position: relative;
  margin-top: ${p => p.theme.margins.lg};
  margin-bottom: ${p => p.theme.margins.md};

  font-size: 22px;
  font-weight: 600;

  letter-spacing: 0.05em;
  line-height: 1.3;
  color: ${p => p.theme.colors.base.dark};
`;

export const Strong = styled.strong`
  font-weight: bold;
`;

export const Emphasis = styled.em`
  font-style: italic;
`;

export const BlockQuote = styled.blockquote`
  padding: ${p => p.theme.margins.md};
  margin: ${p => p.theme.margins.lg} 0;
  border-left: 8px solid ${p => p.theme.colors.cyan.main};
  background-color: ${p => p.theme.colors.cyan.light};
  color: ${p => p.theme.colors.cyan.dark};
`;
