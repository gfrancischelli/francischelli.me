import Document, { Head, Main, NextScript, NextDocumentContext } from "next/document";
import { ServerStyleSheet } from "styled-components";

type Props = {
  style_tags: string;
}

export default class MyDocument extends Document<Props> {
  static getInitialProps({ renderPage } : NextDocumentContext) {
    const sheet = new ServerStyleSheet();

    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );

    const style_tags = sheet.getStyleElement();

    return { ...page, style_tags };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta charSet="UTF-8" />
          <meta
            name="viewport"
            content="width=device-width, minimum-scale=1.0"
          />
          {this.props.style_tags}
          <link rel="shortcut icon" href="/static/favicon.ico" type="image/x-icon"/>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}
