import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="icon" href="/favicon-orange.svg" type="image/svg+xml" />
        <link rel="icon" href="/favicon-orange.svg" />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
