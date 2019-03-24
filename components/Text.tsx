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

  text-transform: uppercase;
  letter-spacing: 0.05em;
  line-height: 1.3;
  color: ${p => p.theme.colors.base.dark};
`;

const StrongWrapper = styled.span`
  position: relative;

  span#hidden {
    display: hidden;
  }

  span#text {
    position: absolute;
    top: 2px;
    left: 0px;
    line-height: 1;
    z-index: 3;
    color: ${p => p.theme.colors.yellow.dark};
  }

  span#bg {
    position: absolute;
    z-index: 1;
    top: -3px;
    left: -3px;
    width: calc(100% + 5px);
    height: calc(100% + 5px);
    transform: skewX(-10deg);
    background-color: ${p => p.theme.colors.yellow.main};
    opacity: 1;
  }
`;

export const Strong: React.FC = ({ children }) => (
  <StrongWrapper>
    <span id="bg" />
    <span id="text">{children}</span>
    <span id="hidden">{children}</span>
  </StrongWrapper>
);
