import React from "react";
import { styled } from "./Theme";
import { NextFC } from "next";
import { default as Link } from "next/link";
import A from "./A";
import { H1, H3 } from "./Text";

interface Props {
  home: boolean;
}

const Wrapper = styled("div")`
  margin-bottom: ${p => (p.small ? p.theme.margins.md : p.theme.margins.lg)};

  #hi {
    font-size: 24px;
    font-family: ${p => p.theme.fonts.main};
    color: ${p => p.theme.colors.grey.dark};
    margin-bottom: ${p => p.theme.margins.sm};
  }

  ${H1} {
    margin-left: -2px; /* Looks off to me without this */
  }

  ${A} {
    font-size: 20px;
    font-weight: bold;
    letter-spacing: 0.04em;
    font-variant: small-caps;
  }
`;

const Header: NextFC<Props> = ({ home }) => (
  <Wrapper>
    {home && (
      <>
        <div id="hi">Hi, I'm</div>
        <H1>Giovanni Francischelli</H1>
      </>
    )}
    {!home && (
      <>
        <Link prefetch href="/">
          <A>francischelli.me</A>
        </Link>
      </>
    )}
  </Wrapper>
);

export default Header;
