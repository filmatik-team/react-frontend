import React from "react";
import styled from "styled-components";

// Двуокрашенный заголовок

interface DualColourSpanProps {
  whiteText: string,
  orangeText: string,
  style?: React.CSSProperties
}

export function DualColourSpan({whiteText, orangeText, style, ...other}: DualColourSpanProps) {
  return <>
    <span style={{color: "#E6E6E6", ...style}} {...other}>
      {whiteText}
    </span>
    <span style={{color: "#fe7900", ...style}} {...other}>
      {` ${orangeText}`}
    </span>
  </>
}

// Hover Element

interface DivHoverElementProps {
  colorNative?: string,
  colorHover?: string,
  opacityNative?: number,
  opacityHover?: number,
}

export const DivHoverElement = styled.div<DivHoverElementProps>`
  &[style] {
    color: ${props => props.colorNative};
    opacity: ${props => props.opacityNative};

    &:hover {
      color: ${props => props.colorHover};
      opacity: ${props => props.opacityHover};
    }
  }
`;

// На будущее

/*
export const FilmCard = styled.div<FilmCardProps>`
  width: ${(p:FilmCardProps) => p.width};
  height: ${(p:FilmCardProps) => p.height};
  margin: ${(p:FilmCardProps) => p.margin};
  position: relative;
  outline: none;
  border: 0;
  transition: all 0.3s ease;
  flex-shrink: 0;  
`;
*/
