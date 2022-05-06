declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobileS: true;
    mobileM: true;
    mobileL: true;
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

export const sizeMobileFirst = {
  mobileS: 0,
  mobileM: 320,
  mobileL: 576,
  tablet: 768,
  laptop: 992,
  desktop: 1280,
};

const sizeDesktopFirst = {
  mobileS: 319.98,
  mobileL: 575.98,
  tablet: 767.98,
  laptop: 991.98,
  desktop: 1279.98,
};

export const mf = {
  mobileS: `(min-width: ${sizeMobileFirst.mobileS}px)`,
  mobileM: `(min-width: ${sizeMobileFirst.mobileM}px)`,
  mobileL: `(min-width: ${sizeMobileFirst.mobileL}px)`, // Small devices (landscape phones, 576px and up)
  tablet: `(min-width: ${sizeMobileFirst.tablet}px)`, // Medium devices (tablets, 768px and up)
  laptop: `(min-width: ${sizeMobileFirst.laptop}px)`, // Large devices (desktops, 992px and up)
  desktop: `(min-width: ${sizeMobileFirst.desktop}px)`, // X-Large devices (large desktops, 1200px and up)
};

export const df = {
  mobileS: `(max-width: ${sizeDesktopFirst.mobileS}px)`,
  mobileL: `(max-width: ${sizeDesktopFirst.mobileL}px)`, // X-Small devices (portrait phones, less than 576px)
  tablet: `(max-width: ${sizeDesktopFirst.tablet}px)`, // Small devices (landscape phones, less than 768px)
  laptop: `(max-width: ${sizeDesktopFirst.laptop}px)`, // Medium devices (tablets, less than 992px)
  desktop: `(max-width: ${sizeDesktopFirst.desktop}px)`, // Large devices (desktops, less than 1200px)
};

