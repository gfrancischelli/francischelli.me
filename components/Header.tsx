import React from "react";
import { styled } from "./Theme";
import { NextFC } from "next";
import { default as Link } from "next/link";
import A from "./A";
import { H1, H3 } from "./Text";

interface Props {
  small: boolean;
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

  #container {
    display: flex;
    justify-content: space-between;

    ${H3} {
      margin: 0;
    }
  }
`;

const Header: NextFC<Props> = ({ small }) => (
  <Wrapper small={small}>
    <div id="container">
      {!small ? <div id="hi">Hi, I'm</div> : null}
      {small ? <H3>Giovanni Francischelli</H3> : null}
      <Link prefetch href="/">
        <div>
          <A>home</A>
        </div>
      </Link>
    </div>
    {!small ? <H1>Giovanni Francischelli</H1> : null}
  </Wrapper>
);

export default Header;
