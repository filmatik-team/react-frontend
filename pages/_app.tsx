import type { AppProps } from "next/app";
import { createTheme, CssBaseline, Stack, ThemeOptions, ThemeProvider } from "@mui/material";
import Header from "../components/common/header/header";
import { sizeMobileFirst } from "../components/lib/deviceSize";
import Footer from "../components/common/footer/footer";
import { UserLoggedInContext } from "../src/context/users/context";
import React from "react";

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
  const [isLoggedIn, setIsLoggedIn] = React.useState<boolean>(false);

  return (
    <ThemeProvider theme={darkTheme}>
      <CssBaseline />
      <Stack>
        {" "}
        {/* <AppContextProvider>  // for MobX */}
        <UserLoggedInContext.Provider value={[isLoggedIn, setIsLoggedIn]}>
          <Header />
          <Component {...pageProps} />
        </UserLoggedInContext.Provider>
        <Footer />
      </Stack>
      {/* </AppContextProvider> */}
    </ThemeProvider>
  );
}
