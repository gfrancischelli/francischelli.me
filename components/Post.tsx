import { PostMeta } from "../content/posts";
import { styled } from "../components/Theme";
import { H1 } from "../components/Text";
import Meta from "../components/Meta";
import PrismTheme from "../components/PrismTheme";

const Wrapper = styled.div`
  .meta {
    margin-top: -${p => p.theme.margins.md};
    margin-bottom: ${p => p.theme.margins.lg};
    font-family: ${p => p.theme.fonts.accent};
    font-size: 14px;
    font-weight: medium;
    color: ${p => p.theme.colors.base.main};
  }
`;

type Props = {
  meta: PostMeta;
};

const Post: React.FC<Props> = ({ children, meta }) => (
  <Wrapper>
    <PrismTheme/>
    <H1>{meta.title}</H1>
    <div className="meta">
      <Meta {...meta} />
    </div>
    <div id="content">{children}</div>
  </Wrapper>
);

export default Post;
