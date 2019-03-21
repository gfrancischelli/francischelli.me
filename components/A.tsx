import { styled } from "./Theme";

const A = styled.a`
  position: relative;
  color: ${p => p.theme.colors.primary};

  &:hover {
    cursor: pointer;
  }

  &:before {
    content: "";
    position: absolute;
    top: calc(100% + 1px);
    left: 0;
    width: 100%;
    height: 2px;
    background-color: ${p => p.theme.colors.primary};
    transition: transform 0.2s ease-in-out;
    transform-origin: left;
    transform: scaleX(0);
  }

  &:hover:before {
    transform: scaleX(1);
    transform-origin: right;
  }
`;

export default A;
