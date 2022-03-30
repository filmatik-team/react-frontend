import React from "react";
import styled from "styled-components";
import {IconButton} from "@mui/material";

export const BaseImgStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: 8,
  borderStyle: "none",
  verticalAlign: "middle",
} as React.CSSProperties;

export const ArrowButton = styled(IconButton)`
  position: absolute;
  display: block;
  bottom: calc(50% - 8px);
  margin: 0;
  background: transparent;
  color: #8C8C8C;
  cursor: pointer;
  font-size: 20px;
  border: 0;

  &:hover {
    color: #fff;
  }
`;

export const CarouselScrollbar = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  overflow-x: scroll;
  -ms-overflow-style: none;
  scrollbar-width: none;

  &::-webkit-scrollbar {
    display: none;
    width: 0;
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background: transparent
  }
`;

/*
const styles = {
  myStyleClassName: {
    padding: '16px 0px 16px 0px',
    '& a': {
      textDecoration: 'none',
      color: '#0000ee',
    },
    '& a:hover': {
      textDecoration: 'underline',
    },
  },
  myButtonClass: {
    '&:hover': {
      textDecoration: 'underline',
    },
  },
};*/
