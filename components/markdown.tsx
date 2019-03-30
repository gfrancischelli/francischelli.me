import A from "./A";
import { styled } from "./Theme";
import { P, Strong, H2, H3, BlockQuote, Emphasis } from "./Text";

const Pre = styled.pre`
  display: block;
  border-radius: 4px;
`;

const CodeBlock = styled.code`
  font-style: ${p => p.theme.fonts.monospace};
  line-height: 1.4;
  font-size: 14px;
`;

const components = {
  p: P,
  a: A,
  h2: H2,
  h3: H3,
  em: Emphasis,
  strong: Strong,
  blockquote: BlockQuote,
  pre: Pre,
  code: CodeBlock
};

export default components;
