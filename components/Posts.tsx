import { styled } from "./Theme";
import { PostMeta } from "../content/posts";
// import { default as Link } from "next/link";

type Props = {
  data: PostMeta[];
};

const Wrapper = styled.ul`
  h3 {
    color: ${p => p.theme.colors.grey.light};
    font-size: 22px;
  }

  a {
    text-decoration: none;
  }

  li + li {
    margin-top: ${p => p.theme.margins.lg};
  }

  #length {
    font-size: "14px";
    color: ${p => p.theme.colors.grey.lighter};
    margin-top: ${p => p.theme.margins.md};
  }
`;

const Posts: React.FC<Props> = ({ data }) => (
  <Wrapper>
    {data.map(({ title, path, length }) => (
      <li>
        <a href={path}>
          <h3>{title}</h3>
        </a>
        <div id="length">{length} min read</div>
      </li>
    ))}
  </Wrapper>
);

export default Posts;
