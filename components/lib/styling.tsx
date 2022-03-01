import { CSSProperties } from "react";

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