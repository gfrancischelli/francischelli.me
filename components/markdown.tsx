import A from "./A";
import { styled } from "./Theme";
import { P, Strong, H2, H3, BlockQuote, Emphasis } from "./Text";

const Pre = styled.pre`
  display: block;
  border-radius: 4px;
  margin-top: ${p => p.theme.margins.md} !important;
`;

const CodeBlock = styled.code`
  font-family: ${p => p.theme.fonts.monospace} !important;
  line-height: 1.4;
  font-size: 14px;
`;

const InlineCode = styled.code`
  background: none;
  font-family: ${p => p.theme.fonts.monospace} !important;
  color: #1673ca;
  line-height: 1.4;
  background-color: ${p=> p.theme.colors.yellow.light};
  &:before,
  &:after {
    content: "\`";
    content: "";
  }

  ${P} & {
    font-size: 16px;
  }

  ${H2} & {
    font-size: 24px;
  }

  ${H3} & {
    font-size: 20px;
  }
`;

const Ol = styled.ol`
  margin: ${p => p.theme.margins.md} 0;
  padding-left: ${p => p.theme.margins.lg};
  list-style-type: decimal;
`;

const Li = styled.li`
  font-size: 18px;
  line-height: 1.4;
  color: ${p => p.theme.colors.base.main};
  font-family: ${p => p.theme.fonts.main};
  padding-left: ${p => p.theme.margins.sm};
  & + & {
    margin-top: ${p => p.theme.margins.sm};
  }
`;

const components = {
  p: P,
  a: A,
  h2: H2,
  h3: H3,
  ol: Ol,
  li: Li,
  em: Emphasis,
  strong: Strong,
  blockquote: BlockQuote,
  pre: Pre,
  code: CodeBlock,
  inlineCode: InlineCode
};

export default components;
