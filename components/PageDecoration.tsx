import { styled } from "./Theme";

const Wrapper = styled.div`
  display: flex;
  height: 8px;
  width: 100%;
  margin: 0 auto;

  & div:nth-child(1) {
    background-color: ${p => p.theme.colors.cyan.main};
    width: calc(100% / 3);
  }
  & div:nth-child(2) {
    background-color: ${p => p.theme.colors.pink.main};
    width: calc(100% / 3);
  }
  & div:nth-child(3) {
    background-color: ${p => p.theme.colors.yellow.main};
    width: calc(100% / 3);
  }

  ${p => p.theme.media.desktop} {
    & div:nth-child(1) {
      width: calc((100% - ${p => p.theme.max_width}) / 2);
    }
    & div:nth-child(2) {
      width: ${p => p.theme.max_width};
    }
    & div:nth-child(3) {
      width: calc((100% - ${p => p.theme.max_width}) / 2);
    }
  }
`;

export default () => (
  <Wrapper>
    <div />
    <div />
    <div />
  </Wrapper>
);
