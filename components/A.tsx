import { styled } from "./Theme";

const A = styled.a`
  cursor: pointer;
  color: ${p => p.theme.colors.primary};
`;

export default A;
