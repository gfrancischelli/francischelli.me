import React from "react";
import { default as Link } from "next/link";

import posts from "../content/posts";
import Posts from "../components/Posts";
import { styled } from "../components/Theme";
import A from "../components/A";
import { P, H2 } from "../components/Text";

const Wrapper = styled.main`
  margin-top: ${p => p.theme.margins.lg};
`;

const Index = () => (
  <>
    <P>
      This is my personal website. Feel free do read more{" "} 
      <Link href="/about">
        <A>about me</A>
      </Link>{" "}
      or check out some things I’ve been thinking about:
    </P>
    <Wrapper>
      <H2>Blog</H2>
      <Posts data={posts} />
    </Wrapper>
  </>
);

export default Index;
