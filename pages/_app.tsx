import type { AppProps } from "next/app";
import { createTheme, CssBaseline, Stack, ThemeOptions, ThemeProvider } from "@mui/material";
import Header from "../components/common/header/header";
import { sizeMobileFirst } from "../components/lib/deviceSize";
import Footer from "../components/common/footer/footer";
import React from "react";
import { UserLoggedInProvider, UserLoginModalProvider } from "../src/contexts/users/providers";
import Head from "next/head";

const common = {
  typography: {
    button: {
      textTransform: "none",
    },
    htmlFontSize: 18,
    fontFamily: "Roboto Condensed, Roboto, Helvetica, Arial, sans-serif",
  },
  breakpoints: {
    values: {
      mobileS: sizeMobileFirst.mobileS,
      mobileM: sizeMobileFirst.mobileM,
      mobileL: sizeMobileFirst.mobileL,
      tablet: sizeMobileFirst.tablet,
      laptop: sizeMobileFirst.laptop,
      desktop: sizeMobileFirst.desktop,
    },
  },
  components: {
    MuiLink: {
      styleOverrides: {
        root: {
          textDecoration: "none",
        },
      },
    },
  },
};

const darkTheme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#273037",
    },
  },
  ...common,
} as ThemeOptions);

const lightTheme = createTheme({
  palette: {
    mode: "light",
  },
  ...common,
} as ThemeOptions);

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={darkTheme}>
      <Head>
        <title>Filmatik. Отслеживай новинки кино</title>
      </Head>
      <CssBaseline />
      <Stack>
        {" "}
        {/* <AppContextProvider>  // for MobX */}
        <UserLoggedInProvider>
          <UserLoginModalProvider>
            <Header />
            <Component {...pageProps} />
          </UserLoginModalProvider>
          <Footer />
        </UserLoggedInProvider>
        <style global jsx>{`
          html,
          body,
          body > div:first-child,
          div#__next,
          div#__next > div {
            height: 100%;
          }
        `}</style>
      </Stack>
      {/* </AppContextProvider> */}
    </ThemeProvider>
  );
}
