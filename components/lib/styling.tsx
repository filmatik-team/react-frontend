import React from "react";
import styled from "styled-components";
import { Button, ButtonProps, Container } from "@mui/material";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";
import { CONTAINER_PADDING, CONTAINER_WIDTH, TRANSITION_DEFAULT } from "../../src/constants";

/* Двуокрашенный заголовок */

interface DualColourSpanProps {
  whiteText: string;
  orangeText: string;
  style?: React.CSSProperties;
}

export function DualColourSpan({ whiteText, orangeText, style, ...other }: DualColourSpanProps) {
  return (
    <>
      <span style={{ color: "#E6E6E6", ...style }} {...other}>
        {whiteText}
      </span>
      <span style={{ color: "#fe7900", ...style }} {...other}>
        {` ${orangeText}`}
      </span>
    </>
  );
}

/* Container Element */

export const ContainerStyled = styled(Container).attrs(() => ({
  disableGutters: true,
  maxWidth: false,
  sx: {
    maxWidth: {
      mobileL: "540px",
      tablet: "720px",
      laptop: "960px",
      desktop: `${CONTAINER_WIDTH}px`,
    },
    px: {
      mobileS: "15px",
      laptop: `${CONTAINER_PADDING}px`,
    },
  },
}))``;

/* Стилизованная кнопка Filmatik */

interface FButtonProps extends ButtonProps {
  text: string;
  type?: "submit" | "reset" | "button";
  theme?: "dark" | "light";
  uppercase?: boolean;
}

export function FButton({ text, sx, theme = "dark", uppercase = false, ...rest }: FButtonProps) {
  const backgroundColor = {
    dark: {
      native: "#C9490C",
      hover: "#B6450E",
    },
    light: {
      native: "#FE7900",
      hover: "#E97000",
    },
  };

  return (
    <Button
      disableRipple
      disableElevation
      sx={{
        display: "inline-block",
        background: backgroundColor[theme]["native"],
        color: "#FFFFFF",
        border: "none",
        p: "10px 25px",
        textShadow: "1px 1px 3px rgb(0 0 0 / 25%)",
        textTransform: uppercase ? "uppercase" : "none",
        textAlign: "center",
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        userSelect: "none",
        fontFamily: "inherit",
        fontSize: "14px",
        fontWeight: "bold",
        lineHeight: 1.5,
        borderRadius: "0.25rem",
        cursor: "pointer",
        transition: TRANSITION_DEFAULT,

        "&:hover": {
          background: backgroundColor[theme]["hover"],
        },
        ...sx,
      }}
      {...rest}>
      {text}
    </Button>
  );
}

/* Close button */

interface CloseButtonProps {
  style?: React.CSSProperties;
  sx?: SxProps<Theme>;
  type?: "submit" | "reset" | "button";
  theme?: "dark" | "light";
  onClick?: (event: React.SyntheticEvent) => void;
}

export function CloseButton({ sx, theme = "light", ...rest }: CloseButtonProps) {
  const color = {
    dark: "#000",
    light: "#fff",
  };

  return (
    <Button
      disableRipple
      disableElevation
      sx={{
        position: "absolute",
        right: 0,
        top: 0,
        display: "block",
        width: "44px",
        minWidth: "auto",
        height: "44px",
        p: 0,
        lineHeight: "44px",
        textAlign: "center",
        opacity: 0.65,
        fontStyle: "normal",
        fontSize: "28px",
        overflow: "visible",
        cursor: "pointer",
        webkitAppearance: "none",
        zIndex: 10,
        boxShadow: "none",
        touchAction: "manipulation",
        color: color[theme],
        transition: TRANSITION_DEFAULT,
        ...sx,
      }}
      {...rest}>
      ×
    </Button>
  );
}
