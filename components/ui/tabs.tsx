import React from "react";
import { TabPanelStyled, TabsListStyled } from "./tabs-styles";
import { Box } from "@mui/material";
import TabPanelUnstyledProps from "@mui/base/TabPanelUnstyled/TabPanelUnstyledProps";
import TabsListUnstyledProps from "@mui/base/TabsListUnstyled/TabsListUnstyledProps";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";

interface FTabPanelProps extends TabPanelUnstyledProps {
  index: number;
  animate?: boolean;
  saveContent?: boolean; // для срабатывания опции поменять значения index и value местами при вызове компоненты
}

export const FTabPanel = (props: FTabPanelProps) => {
  const { index, value, children, animate = true, saveContent = false } = props;

  const tabPanelAttrs = (saveContent: boolean) => {
    return {
      role: "tabpanel",
      className: `${value === index ? "show" : "hide"}${!animate ? " tabs-no-animation" : ""}`,
      components: { Root: Box },
      ...(saveContent && { id: undefined }),
      ...(saveContent && { hidden: false }),
    };
  };

  return (
    <TabPanelStyled {...tabPanelAttrs(saveContent)} {...props}>
      {children}
    </TabPanelStyled>
  );
};

interface FTabsListStyledProps extends TabsListUnstyledProps {
  scrollable?: boolean;
  scrollableColor?: "dark" | "light";
  sx?: SxProps<Theme>;
}

export const FTabsListStyled = (props: FTabsListStyledProps) => {
  const { children, scrollable = true, scrollableColor = "dark" } = props;

  const scrollableBackgroundColor = {
    dark: "linear-gradient(to left, #273037, rgba(39, 48, 55, 0.1))",
    light: "linear-gradient(to left, #FFFFFF, rgba(255, 255, 255, 0.1))",
  };

  const scrollableColorStyles = {
    "&.tabs-scrollable::after": {
      content: '" "',
      position: "absolute",
      zIndex: 1,
      right: 0,
      height: "25px",
      width: "80px",
      backgroundImage: scrollableBackgroundColor[scrollableColor],
    },
  };

  return (
    <TabsListStyled
      component={Box}
      className={scrollable ? " tabs-scrollable" : ""}
      sx={{ ...scrollableColorStyles }}
      {...props}>
      {children}
    </TabsListStyled>
  );
};
