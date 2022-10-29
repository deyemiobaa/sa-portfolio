import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <meta charset="utf-8" />
        <link rel="icon"
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🕵🏾</text></svg>" />
        <meta name="theme-color" content="#000000" />
        <meta
          property="og:image"
          content="https://res.cloudinary.com/deyemiobaa/image/upload/v1666640356/og_wuzism.png"
        />
        <meta
          name="description"
          content="Hi, I'm Sodiq. A full-stack software engineer and soft life advocate. My goal is to build products that improve the lives of people around the world."
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}