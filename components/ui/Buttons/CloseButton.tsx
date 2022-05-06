import React from "react";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";
import { Button } from "@mui/material";
import { TRANSITION_DEFAULT } from "../../../constants/constants";

/* Close button */

interface CloseButtonProps {
  style?: React.CSSProperties;
  sx?: SxProps<Theme>;
  type?: "submit" | "reset" | "button";
  theme?: "dark" | "light";
  onClick?: (event: React.SyntheticEvent) => void;
}

const CloseButton = ({ sx, theme = "light", ...rest }: CloseButtonProps) => {
  const color = {
    dark: "#000",
    light: "#fff",
  };

  return (
    <Button
      disableRipple
      disableElevation
      sx={{
        position: "absolute",
        right: 0,
        top: 0,
        display: "block",
        width: "44px",
        minWidth: "auto",
        height: "44px",
        p: 0,
        lineHeight: "44px",
        textAlign: "center",
        opacity: 0.65,
        fontStyle: "normal",
        fontSize: "28px",
        overflow: "visible",
        cursor: "pointer",
        webkitAppearance: "none",
        zIndex: 10,
        boxShadow: "none",
        touchAction: "manipulation",
        color: color[theme],
        transition: TRANSITION_DEFAULT,
        ...sx,
      }}
      {...rest}>
      ×
    </Button>
  );
};

export default CloseButton;
