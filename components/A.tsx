import { styled } from "./Theme";

const A = styled.a`
  position: relative;
  color: ${p => p.theme.colors.pink.main};
  transition: background-color 0.15s ease-in-out;

  &:hover {
    cursor: pointer;
    background-color: ${p => p.theme.colors.pink.light};
  }
`;

export default A;
