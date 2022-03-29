import React from "react";
import styled from "styled-components";

export const BaseImgStyle = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: 8,
  borderStyle: "none",
  verticalAlign: "middle",
} as const;

export const ArrowButton = styled.button({
  position: "absolute",
  bottom: "calc(50% - 8px)",
  margin: 0,
  background: "transparent",
  color: "#8C8C8C",
  cursor: "pointer",
  fontSize: "20px",
  border: 0,
});

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
