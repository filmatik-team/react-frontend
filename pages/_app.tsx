import type { AppProps } from "next/app";
import { createTheme, CssBaseline, ThemeOptions, ThemeProvider } from "@mui/material";
import Header from "../components/common/header/header";
import { sizeMobileFirst } from "../components/lib/deviceSize";

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
      <CssBaseline />
      <div>
        {" "}
        {/* <AppContextProvider>  // for MobX */}
        <Header />
        <Component {...pageProps} />
      </div>
      {/* </AppContextProvider> */}
    </ThemeProvider>
  );
}
