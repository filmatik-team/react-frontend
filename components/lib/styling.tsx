import React, { CSSProperties } from "react";
import styled from "styled-components";
import { ArrowButton } from "../ui/carousel-style";

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

interface FilmCardProps {
  width: string,
  height: string,
  margin: string,
  style?: CSSProperties,
  children?: React.ReactNode
}

const LinkStyled = styled.a`    
  position: relative;
  display: block;
  width: 100%;
  height: 100%;    
  border: solid 1px transparent;
  border-radius: 8px;
  text-decoration: none;
  cursor: pointer;
  &::before {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: -1;
    margin: -1px;
    border-radius: inherit;
    background: linear-gradient(135deg, #586e7d 0%, #273037 100%);
  }
`;

export function FilmCard({ width, height, margin, style, children, ...rest }: FilmCardProps) {
  return <div style={{
    width: width,
    height: height,
    margin: margin,
    position: "relative",
    outline: "none",
    border: 0,
    transition: "all 0.3s ease",
    flexShrink: 0,
    ...style
  }} {...rest}>
    <LinkStyled>{children}</LinkStyled>
  </div>
}

interface HoverElementProps {
  colornative ?: string,
  colorhover?: string,
  opacitynative?: number,
  opacityhover?: number,
}

export const HoverElement = styled.div<HoverElementProps>`
  &[style]{
    color: ${props => props.colornative};
    opacity: ${props => props.opacitynative};
    &:hover {
      color: ${props => props.colorhover};
      opacity: ${props => props.opacityhover};
    }
  }
`;

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
