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
    let pageProps = {};

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps };
  }

  render() {
    const { Component, pageProps } = this.props;

    return (
      <Container>
        <ThemeProvider theme={theme}>
          <React.Fragment>
            <GlobalStyle />
            <Layout>
              <>
                <Header>
                  {Component.Heading ? <Component.Heading /> : null}
                </Header>
                <Component {...pageProps} />
              </>
            </Layout>
          </React.Fragment>
        </ThemeProvider>
      </Container>
    );
  }
}

export default MyApp;
