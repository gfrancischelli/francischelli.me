import { styled } from "./Theme";
import SVG from "react-svg";

const Icon = styled(SVG)`
  svg {
    width: 42px;
    height: auto;
  }
  .bg {
    fill: ${p => p.theme.colors.pink.main} !important;
  }
`;

const Wrapper = styled.div`
  margin: 0 auto;
  margin-top: ${p => p.theme.margins.lg};

  ${p => p.theme.media.tablet} {
    width: 50%;
    margin-right: 0;
    margin-left: auto;
  }

  a:hover {
    cursor: pointer;
  }

  a + a {
    margin-left: ${p => p.theme.margins.md};
  }
`;

export default () => (
  <Wrapper className="social-icons">
    <a href="https://github.com/gfrancischelli" target="_blank">
      <Icon src="/static/images/github.svg" wrapper="span" />
    </a>

    <a href="https://twitter.com/totododoido" target="_blank">
      <Icon src="/static/images/twitter.svg" wrapper="span" />
    </a>
    <a href="https://linkedin.com/in/gfrancischelli" target="_blank">
      <Icon src="/static/images/linkedin.svg" wrapper="span" />
    </a>
  </Wrapper>
);
