import React from "react";
import { default as Link } from "next/link";

import A from "../components/A";
import { PageComponent } from "../components/PageComponent.d";

const Index: PageComponent = () => <React.Fragment />;

Index.Heading = () => (
  <>
    This is my personal website. Feel free to read{" "}
    <Link href="about">
      <A>about me</A>
    </Link>
    , check out some of my{" "}
    <Link href="thoughts">
      <A>thougthts</A>
    </Link>
    , connect on <A href="https://linkedin.in/gfrancischelli">linkedin</A>,{" "}
    visit my <A href="https://github.com/gfrancischelli">github profile</A> or
    view the{" "}
    <A href="https://github.com/gfrancischelli/francischelli.me">source code</A>
    .
  </>
);

export default Index;
