import React from "react";
import { Box, IconButton } from "@mui/material";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import styled from "styled-components";
import { mf } from "../../constants/deviceSize";
import { TRANSITION_DEFAULT } from "../../constants/constants";

const LargeIconButtonStyled = styled(IconButton)`
  display: none;
  position: absolute;
  bottom: calc(50% - 25px);
  margin: 0;
  padding: 0;
  background: transparent;
  font-size: 50px;
  color: #8c8c8c;
  transition: ${TRANSITION_DEFAULT};

  &:hover {
    color: #fff;
  }

  @media ${mf.laptop} {
    display: inline-flex;
  }
`;

interface NavigationArrowProps {
  onClick?: (event: React.SyntheticEvent) => void;
  sx?: SxProps<Theme>;
}

export const LargeForwardNavigationArrow = ({ sx, ...rest }: NavigationArrowProps) => {
  return (
    <LargeIconButtonStyled disableRipple sx={{ right: "1%" }} {...rest}>
      <BsChevronRight />
    </LargeIconButtonStyled>
  );
};

export const LargeBackwardNavigationArrow = ({ sx, ...rest }: NavigationArrowProps) => {
  return (
    <LargeIconButtonStyled disableRipple sx={{ left: "1%" }} {...rest}>
      <BsChevronLeft />
    </LargeIconButtonStyled>
  );
};

export const SmallForwardNavigationArrow = () => {
  return <FaChevronRight />;
};

export const SmallBackwardNavigationArrow = () => {
  return <FaChevronLeft />;
};

interface SelectArrowProps {
  className?: string;
  sx?: SxProps<Theme>;
}

export const SelectArrow = ({ sx, ...rest }: SelectArrowProps) => {
  return (
    <Box
      sx={{
        content: '" "',
        display: "block",
        width: "15px",
        height: "8px",
        background: "url(https://filmatik.ru/resources/app/img/select-arrow.svg) no-repeat",
        transition: TRANSITION_DEFAULT,

        "&.active": {
          transform: "rotate(-180deg)",
        },
        ...sx,
      }}
      {...rest}
    />
  );
};
