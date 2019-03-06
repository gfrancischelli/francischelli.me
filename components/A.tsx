import { styled } from "./Theme";

const A = styled.a`
  cursor: pointer;
  text-decoration: underline;
  color: ${p => p.theme.colors.primary};
`;

export default A;
