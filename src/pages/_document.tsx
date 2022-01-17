import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang="ja">
        <Head />
        <meta
          name="google-site-verification"
          content="2g3RFD3L8SfjAIWxjXyGgGekP72TUB3dOfuhY479jz8"
        />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
