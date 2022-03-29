import React from "react";
import {AppBar, Button, Stack, Toolbar} from "@mui/material"

const headerHeight = 70;

const pages = ["Каталог", "Киноафиша", "Новинки", "Топ персон"];

export default function Header() {
  return <div style={{paddingTop: 0}}>
    <AppBar
      elevation={0}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        background: "rgba(39, 48, 55, 0.7)",
        height: headerHeight,
        paddingRight: 10,
        paddingLeft: 10,
      }}
    >
      <Toolbar style={{maxWidth: 1200, margin: "auto"}}>
        <Stack direction="row" sx={{flexGrow: 1, display: {xs: "none", md: "flex"}}}>
          {pages.map((page) => (
            <Button
              key={page}
              sx={{my: "auto", color: "white", display: "block"}}
            >
              {page}
            </Button>
          ))}
        </Stack>
      </Toolbar>
    </AppBar>
  </div>
}