import React from "react";
import styled from "styled-components";
import { buttonUnstyledClasses, TabsListUnstyled, TabUnstyled, tabUnstyledClasses } from "@mui/base";
import { TRANSITION_DEFAULT } from "../../src/constants";
import { Box } from "@mui/material";

export const TabPanelStyled = styled(Box)`
  height: 100%;
  width: 100%;
  top: 0;
  left: 0;

  @keyframes showNav {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes hideNav {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  &.show {
    opacity: 1;
    visibility: visible;
    position: relative;
    animation: showNav 0.3s linear;
  }

  &.hide {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    animation: hideNav 0.3s linear;
  }

  &.tabs-no-animation {
    animation: showNav, hideNav 0s linear;
  }
`;

export const TabStyled = styled(TabUnstyled).attrs(() => ({
  className: "nav-tabs__tab",
}))`
  min-width: auto;
  min-height: auto;
  margin: 0 35px 0 0;
  padding: 0;
  font-family: inherit;
  font-size: 18px;
  color: #8c8c8c;
  letter-spacing: inherit;
  cursor: pointer;
  background: 0;
  border: 0;
  outline: 0;
  transition: ${TRANSITION_DEFAULT};

  &:hover {
    color: #bfbfbf;
  }

  &:focus {
    color: #fff;
    cursor: default;
  }

  &.${tabUnstyledClasses.selected} {
    color: #fff;
    cursor: default;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: default;
  }
`;

export const TabsListStyled = styled(TabsListUnstyled)`
  margin: 0 0 20px 0;

  &.tabs-scrollable {
    overflow-x: scroll;
    white-space: nowrap;
    scrollbar-width: none;
  }

  &::-webkit-scrollbar {
    display: none;
    width: 0;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: transparent;
  }
`;
