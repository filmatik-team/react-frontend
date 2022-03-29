import type {AppProps} from "next/app"
import Head from "next/head"
import "./styles.css"

import {ThemeProvider, CssBaseline, createTheme, ThemeOptions} from "@mui/material"

import Header from "../components/common/header"

const common = {
  typography: {
    button: {
      textTransform: "none"
    },
    htmlFontSize: 18,
  },
};

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#273037"
    }
  },
  ...common
} as ThemeOptions);

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
  ...common
} as ThemeOptions);

export default function MyApp({Component, pageProps}: AppProps) {
  return <ThemeProvider theme={darkTheme}>
    <Head>
      <link
        href="https://fonts.googleapis.com/css?family=Poppins%3A400%7CNoto+Sans%3Aitalic%2C400%7CRoboto+Condensed%3A400%2C700%7COpen+Sans%3A400&ver=5.2.4&subset=latin,cyrillic"
        // https://fonts.googleapis.com/css2?family=Comfortaa:wght@501&family=Quantico&family=Roboto+Mono:wght@200&family=Oxanium:wght@242&display=swap
        rel="stylesheet"
      />
      <title>Filmatik. Отслеживай новинки кино</title>
    </Head>

    <CssBaseline/>

    <div>   {/* <AppContextProvider>  // for MobX */}
      <Header/>

      <Component {...pageProps} />
    </div>
    {/* </AppContextProvider> */}
  </ThemeProvider>
}
