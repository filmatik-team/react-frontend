import type { AppProps } from "next/app"
import Head from "next/head"
import "./styles.css"

import { ThemeProvider, CssBaseline, createTheme, ThemeOptions } from "@mui/material"

import Header from "../components/common/header"

const common = {
  typography: {
    button: {
      textTransform: "none"
    },
    htmlFontSize: 18,
  },
}

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#273037"
    }
  },
  ...common
} as ThemeOptions)

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
  ...common
} as ThemeOptions)

export default function MyApp({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={darkTheme}>
    <Head>
      <title>Filmatik. Отслеживай новинки кино</title>
    </Head>
    <CssBaseline />
    <div>   {/* <AppContextProvider>  // for MobX */}
      <Header />
      <Component {...pageProps} />
    </div>  {/* </AppContextProvider> */}
  </ThemeProvider>
}
