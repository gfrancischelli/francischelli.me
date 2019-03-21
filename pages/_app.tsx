import React from "react";
import App, { Container, NextAppContext } from "next/app";
import Layout from "../components/Layout";
import Header from "../components/Header";
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
    const [_, _root] = pageProps.path ? pageProps.path.split("/") : "/";
    const thoughts_page = _root == "thoughts";

    return (
      <Container>
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <GlobalStyle />
            <Layout>
              <>
                <Component {...pageProps} />
              </>
            </Layout>
          </React.Fragment>
                  <Header small={thoughts_page} />
        </ThemeProvider>
      </Container>
    );
  }
}

export default MyApp;
