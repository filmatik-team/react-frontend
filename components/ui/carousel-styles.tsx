import React from "react";
import styled from "styled-components";
import { IconButton } from "@mui/material";
import { mf } from "../lib/deviceSize";

export const ArrowButtonStyled = styled(IconButton)`
  position: absolute;
  display: none;
  bottom: calc(50% - 10px);
  margin: 0;
  background: transparent;
  color: #8c8c8c;
  cursor: pointer;
  font-size: 20px;
  border: 0;
  line-height: 0;

  &:hover {
    color: #fff;
  }

  &.slider-button--hidden {
    display: none;
  }

  @media ${mf.laptop} {
    display: block;
  }
`;
