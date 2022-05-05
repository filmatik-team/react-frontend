import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html>
      <Head>
        <link
          href="https://fonts.googleapis.com/css?family=Poppins%3A400%7CNoto+Sans%3Aitalic%2C400%7CRoboto+Condensed%3A400%2C700%7COpen+Sans%3A400&ver=5.2.4&subset=latin,cyrillic"
          // https://fonts.googleapis.com/css2?family=Comfortaa:wght@501&family=Quantico&family=Roboto+Mono:wght@200&family=Oxanium:wght@242&display=swap
          rel="stylesheet"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
