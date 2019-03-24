import { styled } from "./Theme";
import { PostMeta } from "../content/posts";
import { default as Link } from "next/link";
import Meta from "./Meta";
import A from "./A";
import { H3 } from "./Text";

type Props = {
  data: PostMeta[];
};

const Wrapper = styled.ul`
  margin-top: ${p => p.theme.margins.md};
  font-family: ${p => p.theme.fonts.accent};

  h3 {
    font-size: 22px;
    color: ${p => p.theme.colors.pink};
  }

  li + li {
    margin-top: ${p => p.theme.margins.lg};
  }

  .meta {
    margin-top: ${p => p.theme.margins.md};
  }
`;

const Posts: React.FC<Props> = ({ data }) => (
  <Wrapper>
    {data.map(({ title, path, ...meta }) => (
      <li key={path}>
        <Link href={path}>
          <H3>
            <A>{title}</A>
          </H3>
        </Link>

        <div className="meta">
          <Meta {...meta} />
        </div>
      </li>
    ))}
  </Wrapper>
);

export default Posts;
