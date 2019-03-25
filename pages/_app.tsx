import React from "react";
import { MDXProvider } from "@mdx-js/tag";
import App, { Container, NextAppContext } from "next/app";

import Layout from "../components/Layout";
import Header from "../components/Header";
import markdown from "../components/markdown";
import { ThemeProvider, theme, GlobalStyle } from "../components/Theme";
import {PageComponent} from "../components/PageComponent.d"


type PropTypes = {
  Component: PageComponent;
};

class MyApp extends App<PropTypes> {
  static async getInitialProps({ Component, ctx }: NextAppContext) {
    let pageProps = { path: ctx.pathname || "" };

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;
    // The ternary operator here fixes next export issue where path was undefined.
    const [_, _root] = pageProps.path ? pageProps.path.split("/") : "";
    const home = _root == "";

    return (
      <Container>
        <ThemeProvider theme={theme}>
          <MDXProvider components={markdown}>
            <React.Fragment>
              <GlobalStyle />
              <Layout>
                <>
                  <Header home={home} />
                  <Component {...pageProps} />
                </>
              </Layout>
            </React.Fragment>
          </MDXProvider>
        </ThemeProvider>
      </Container>
    );
  }
}

export default MyApp;
