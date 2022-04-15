import React from "react";
import { TabPanelStyled, TabStyled, TabsListStyled } from "./tabs-styles";
import { Box } from "@mui/material";
import { TabsUnstyled } from "@mui/base";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";

interface TabPanelProps {
  index: number;
  value: number;
  animate?: boolean;
  children?: React.ReactNode;
  sx?: SxProps<Theme>;
  components?: { Root?: React.ElementType };
}

function TabPanel(props: TabPanelProps) {
  const { index, value, animate, children } = props;
  return (
    <TabPanelStyled
      className={`${value === index ? "show" : "hide"} ${!animate ? "no-animation" : undefined}`}
      role="tabpanel"
      {...props}>
      {children}
    </TabPanelStyled>
  );
}

interface TabProps {
  onChange: (event: React.SyntheticEvent, newValue: number) => void;
  children?: React.ReactNode;
}

function Tab(props: TabProps) {
  const { children } = props;
  return (
    <TabStyled className="nav-tabs__tab" {...props}>
      {children}
    </TabStyled>
  );
}

export interface NavData {
  tabName: string;
  content: React.ReactNode;
}

interface NavTabsProps {
  data: NavData[];
  defaultTab: number;
  animate?: boolean;
  style?: React.CSSProperties;
  sx?: SxProps<Theme>;
}

export function NavTabs({ data, defaultTab, animate = true, ...rest }: NavTabsProps) {
  const [value, setValue] = React.useState(defaultTab);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <TabsUnstyled component={Box} value={value} {...rest}>
      <TabsListStyled>
        {data.map((item) => (
          <Tab onChange={handleChange} key={item.tabName}>
            {item.tabName}
          </Tab>
        ))}
      </TabsListStyled>
      <Box sx={{ position: "relative" }}>
        {data.map((item, i) => (
          <TabPanel animate={animate} components={{ Root: Box }} index={i} value={value} key={item.tabName}>
            {item.content}
          </TabPanel>
        ))}
      </Box>
    </TabsUnstyled>
  );
}
