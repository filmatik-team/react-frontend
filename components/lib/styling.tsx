import React, { CSSProperties } from "react";
import styled from "styled-components";

interface DualColourSpanProps {
  whiteText: string,
  orangeText: string,
  style?: CSSProperties
}

export function DualColourSpan({ whiteText, orangeText,style, ...other }: DualColourSpanProps) {
  return <>
    <span style={{ color: "#E6E6E6", ...style }} {...other}>
      {whiteText}
    </span>
    <span style={{ color: "#fe7900", ...style }} {...other}>
      {` ${orangeText}`}
    </span>
  </>
}

export const CarouselScrollbar = styled.div`
  display: flex;
  width: 100%;
  overflow: hidden;
  overflow-x: scroll;
  scroll-behavior: smooth;
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

interface FilmCardProps {
  width: string,
  margin: string,
}

export const FilmCard = styled.div<FilmCardProps>`
  width: ${(p:FilmCardProps) => p.width};
  margin: ${(p:FilmCardProps) => p.margin};
  position: relative;
  height: 279px;  
  outline: none;
  border: 0;
  transition: all 0.3s ease;
  flex-shrink: 0;  
`;
