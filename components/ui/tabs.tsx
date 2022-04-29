import React from "react";
import { TabPanelStyled } from "./tabs-styles";
import { Box } from "@mui/material";
import TabPanelUnstyledProps from "@mui/base/TabPanelUnstyled/TabPanelUnstyledProps";
import { TabsProps } from "@mui/material/Tabs/Tabs";
import { TabsUnstyled } from "@mui/base";

export const FTabs = (props: TabsProps) => {
  const { children } = props;
  return <TabsUnstyled>{children}</TabsUnstyled>;
};

interface FTabPanelProps extends TabPanelUnstyledProps {
  index: number;
  animate?: boolean;
  saveContent?: boolean; // для срабатывания опции поменять значения index и value местами при вызове компоненты
}

export const FTabPanel = (props: FTabPanelProps) => {
  const { index, value, children, animate = true, saveContent = false } = props;

  const tabPanelAttrs = (saveContent?: boolean) => {
    return {
      role: "tabpanel",
      className: `${value === index ? "show" : "hide"}${!animate ? " no-animation" : ""}`,
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
