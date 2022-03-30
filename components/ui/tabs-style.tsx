import React from "react";
import styled from "styled-components";
import {
  buttonUnstyledClasses,
  TabPanelUnstyled,
  TabsListUnstyled,
  TabUnstyled,
  tabUnstyledClasses
} from "@mui/base";

export const TabPanelStyled = styled(TabPanelUnstyled)`
  &:not(:first-child) {
    position: absolute;
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
  }

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

  &[data-visible=show] {
    opacity: 1;
    visibility: visible;
    animation: showNav .3s linear;
  }

  &[data-visible=hide] {
    opacity: 0;
    visibility: hidden;
    animation: hideNav .3s linear;
  }
`;

export const TabStyled = styled(TabUnstyled).attrs(props => ({
  onChange: props.onChange as (event: React.SyntheticEvent, newValue: number) => void
}))`
  min-width: auto;
  min-height: auto;
  margin: 0 35px 0 0;
  padding: 0;
  font-family: inherit;
  font-size: 18px;
  color: #8C8C8C;
  letter-spacing: inherit;
  cursor: pointer;
  background: 0;
  border: 0;
  outline: 0;
  transition: all 0.3s ease;

  &:hover {
    color: #bfbfbf;
  }

  &:focus {
    color: #fff;
    cursor: default;
  }

  &.${tabUnstyledClasses.selected} {
    color: #fff;
  }

  &.${buttonUnstyledClasses.disabled} {
    opacity: 0.5;
    cursor: not-allowed;
  }
`;

export const TabsListStyled = styled(TabsListUnstyled)`
  margin: 0 0 20px 0;
`;