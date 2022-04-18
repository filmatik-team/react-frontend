import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import { Box } from "@mui/material";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";

export function LargeForwardNavigationArrow() {
  return <div>hey</div>;
}

export function LargeBackwardNavigationArrow() {
  return <div>yeh</div>;
}

export function SmallForwardNavigationArrow() {
  return <FontAwesomeIcon icon={faChevronRight} />;
}

export function SmallBackwardNavigationArrow() {
  return <FontAwesomeIcon icon={faChevronLeft} />;
}

interface SelectArrowProps {
  className?: string;
  sx?: SxProps<Theme>;
}

export function SelectArrow({ sx, ...other }: SelectArrowProps) {
  return (
    <Box
      sx={{
        content: '" "',
        display: "block",
        width: "15px",
        height: "8px",
        background: "url(https://filmatik.ru/resources/app/img/select-arrow.svg) no-repeat",
        transition: "all 0.3s ease",

        "&.active": {
          transform: "rotate(-180deg)",
        },
        ...sx,
      }}
      {...other}
    />
  );
}
