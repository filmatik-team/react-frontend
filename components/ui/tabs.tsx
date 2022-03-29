import React from "react";
import {TabsUnstyled} from "@mui/base";
import {TabPanelStyled, TabStyled, TabsListStyled} from "./tabs-style"
import {Box} from "@mui/material";

interface TabPanelProps {
  index: number;
  value: number;
  children?: React.ReactNode;
}

function TabPanel(props: TabPanelProps) {
  const {index, value, children} = props;
  return (
    <TabPanelStyled
      className="tab-pane"
      data-visible={value === index ? "show" : "hide"}
      role="tabpanel"
      {...props}
    >
      {children}
    </TabPanelStyled>
  );
}

interface TabProps {
  onChange: any,
  children?: React.ReactNode,
}

function Tab(props: TabProps) {
  const {children} = props;
  return <TabStyled {...props}>{children}</TabStyled>;
}

interface NavTabsProps {
  data: any[],
  defaultTab: number,
  style?: React.CSSProperties,
}

export function NavTabs({data, defaultTab}: NavTabsProps) {
  const [value, setValue] = React.useState(defaultTab);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };
  return (
    <TabsUnstyled value={value}>
      <TabsListStyled>
        {data.map((item, i) => (
          <Tab onChange={handleChange} key={i}>{item.tabName}</Tab>
        ))}
      </TabsListStyled>
      <Box sx={{position: "relative", minHeight: "279px"}}>
        {data.map((item, i) => (
          <TabPanel index={i} value={value} key={i}>{item.content}</TabPanel>
        ))}
      </Box>
    </TabsUnstyled>
  )
}