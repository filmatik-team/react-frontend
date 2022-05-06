import { Button, ButtonProps } from "@mui/material";
import { TRANSITION_DEFAULT } from "../../../constants/constants";
import React from "react";

/* Стилизованная кнопка Filmatik */

interface FButtonProps extends ButtonProps {
  text: string;
  type?: "submit" | "reset" | "button";
  theme?: "dark" | "light";
  uppercase?: boolean;
}

const FButton = ({ text, sx, theme = "dark", uppercase = false, ...rest }: FButtonProps) => {
  const backgroundColor = {
    dark: {
      native: "#C9490C",
      hover: "#B6450E",
      disabled: {
        color: "",
        background: "",
      },
    },
    light: {
      native: "#FE7900",
      hover: "#E97000",
      disabled: {
        color: "rgba(255, 255, 255, 0.6)",
        background: "#999",
      },
    },
  };

  return (
    <Button
      disableRipple
      disableElevation
      sx={{
        display: "inline-block",
        background: backgroundColor[theme]["native"],
        color: "#FFFFFF",
        border: "none",
        p: "10px 25px",
        textShadow: "1px 1px 3px rgb(0 0 0 / 25%)",
        textTransform: uppercase ? "uppercase" : "none",
        textAlign: "center",
        whiteSpace: "nowrap",
        verticalAlign: "middle",
        userSelect: "none",
        fontFamily: "inherit",
        fontSize: "14px",
        fontWeight: "bold",
        lineHeight: 1.5,
        borderRadius: "0.25rem",
        cursor: "pointer",
        transition: TRANSITION_DEFAULT,

        "&:hover": {
          background: backgroundColor[theme]["hover"],
        },
        "&:disabled": {
          color: backgroundColor[theme]["disabled"]["color"],
          background: backgroundColor[theme]["disabled"]["background"],
        },
        ...sx,
      }}
      {...rest}>
      {text}
    </Button>
  );
};

export default FButton;
