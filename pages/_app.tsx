import type { AppProps } from "next/app";
import { createTheme, CssBaseline, Stack, ThemeOptions, ThemeProvider } from "@mui/material";
import { sizeMobileFirst } from "../constants/deviceSize";
import React from "react";
import { UserLoggedInProvider, UserLoginModalProvider } from "../context/user/UserProviders";
import Head from "next/head";
import "../assets/styles/global.css";
import Header from "../components/common/Header/Header";
import Footer from "../components/common/Footer/Footer";

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
      </Stack>
      {/* </AppContextProvider> */}
    </ThemeProvider>
  );
}
