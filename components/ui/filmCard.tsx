import React from "react";
import {LinkStyled} from "./filmCard-style"

// Обложка фильма

interface FilmCardProps {
  width: string,
  height: string,
  margin: string,
  style?: React.CSSProperties,
  children?: React.ReactNode
}

export function FilmCard({width, height, margin, style, children, ...rest}: FilmCardProps) {
  return (
    <div style={{
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
  )
}