import React from "react";
import styled from "styled-components";
import { Container } from "@mui/material";
import { CONTAINER_PADDING, CONTAINER_WIDTH } from "../../constants/constants";

/* Двуокрашенный заголовок */

interface DualColourSpanProps {
  whiteText: string;
  orangeText: string;
  style?: React.CSSProperties;
}

export const DualColourSpan = ({ whiteText, orangeText, style, ...other }: DualColourSpanProps) => {
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
};

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
