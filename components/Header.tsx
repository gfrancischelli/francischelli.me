import React from "react";
import { styled } from "./Theme";
import { NextFC } from "next";
import { default as Link } from "next/link";

const Wrapper = styled.div`
  margin-bottom: ${p => p.theme.margins.lg};

  #hi {
    font-size: 24px;
    color: ${p => p.theme.colors.grey.neutral};
    margin-bottom: ${p => p.theme.margins.sm};
  }

  h1 {
    font-size: 37px;
    font-weight: 600;
    font-style: normal;
    color: ${p => p.theme.colors.grey.dark};
    margin-left: -2px; /* Looks off to me without this */
  }

  h2 {
    font-size: 22px;
    margin-top: ${p => p.theme.margins.md};
    color: ${p => p.theme.colors.grey.light};
    line-height: 1.3;
  }
`;

const Header: NextFC = ({ children }) => (
  <Wrapper>
    <Link prefetch href="/">
      <a>
        <div id="hi">Hi, I'm</div>
        <h1>Giovanni Francischelli</h1>
      </a>
    </Link>
    {children ? <h2>{children}</h2> : null}
  </Wrapper>
);

export default Header;
