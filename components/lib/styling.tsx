import React from "react";
import styled from "styled-components";
import { Box, Container } from "@mui/material";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";

/* Общие значения и величины по всему сайту */

export const containerWidth = 1166; // ширина контента
export const filmCardVisible = 6; // количество видимых на странице обложек в карусели
export const filmCarouselMargin = 10; // расстояние между обложками в карусели
export const transitionDefault = "all 0.3s ease"; // стандартная анимация
export const filmCatalogMargin = 3.5; // расстояние между обложками в каталоге

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

/* Hover Element */

interface DivHoverElementProps {
  colorNative?: string;
  colorHover?: string;
  opacityNative?: number;
  opacityHover?: number;
}

export const DivHoverElement = styled.div<DivHoverElementProps>`
  &[style] {
    color: ${(props) => props.colorNative};
    opacity: ${(props) => props.opacityNative};

    &:hover {
      color: ${(props) => props.colorHover};
      opacity: ${(props) => props.opacityHover};
    }
  }
`;

/* Container Element */

export const ContainerStyled = styled(Container).attrs(() => ({
  disableGutters: true,
  maxWidth: false,
  sx: {
    maxWidth: {
      mobileL: "540px",
      tablet: "720px",
      laptop: "960px",
      desktop: `${containerWidth}px`,
    },
    px: {
      mobileS: "15px",
      laptop: "25px",
    },
  },
}))``;

/* Стилизованная кнопка */

interface ButtonFilmatikProps {
  text: string;
  style?: React.CSSProperties;
  sx?: SxProps<Theme>;
  type?: "submit" | "reset" | "button";
  theme?: "dark" | "light";
  uppercase?: boolean;
  onClick?: (event: React.SyntheticEvent) => void;
}

export function ButtonFilmatik({ text, sx, theme = "dark", uppercase = false, ...rest }: ButtonFilmatikProps) {
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
    <Box
      component="button"
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
        transition: transitionDefault,

        "&:hover": {
          background: backgroundColor[theme]["hover"],
        },
        ...sx,
      }}
      {...rest}>
      {text}
    </Box>
  );
}
