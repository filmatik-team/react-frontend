import React from "react";
import { Box, IconButton, Menu, MenuItem, Stack, Typography } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { SelectArrow } from "../../../icons/arrows";

const userMenuItems = [
  {
    title: "Личный кабинет",
  },
  {
    title: "Буду смотреть",
  },
  {
    title: "Рекомендации",
  },
  {
    title: "Комментарии",
  },
  {
    title: "Выйти",
  },
];

export function UserMenu() {
  const [anchorElUser, setAnchorElUser] = React.useState<null | HTMLElement>(null);
  const userButtonRef = React.useRef<HTMLButtonElement>(null);

  const handleOpenUserMenu = (e: React.MouseEvent<HTMLElement>) => {
    if (userButtonRef.current) userButtonRef.current.classList.toggle("active");
    setAnchorElUser(e.currentTarget);
  };
  const handleCloseUserMenu = () => {
    if (userButtonRef.current) userButtonRef.current.classList.toggle("active");
    setAnchorElUser(null);
  };

  return (
    <Box sx={{ display: { mobileS: "flex", laptop: "none" }, ml: "25px" }}>
      <Stack
        ref={userButtonRef}
        direction="row"
        alignItems="center"
        component="button"
        onClick={handleOpenUserMenu}
        sx={{
          p: 0,
          background: "transparent",
          color: "#8C8C8C",
          border: "none",
          cursor: "pointer",
          transition: "all 0.3s ease",

          "&:hover": {
            filter: "brightness(2)",
          },

          "&.active": {
            filter: "brightness(2)",
          },
        }}>
        <Typography
          sx={{
            position: "relative",
            m: "0 10px 0 0",
            p: 0,
            fontFamily: "Poppins, Roboto Condensed, sans-serif",
            fontSize: "15px",
            fontWeight: 500,
            whiteSpace: "nowrap",
          }}>
          Dmitriy
        </Typography>
        <SelectArrow className={Boolean(anchorElUser) ? "active" : undefined} />
      </Stack>
      <IconButton
        disableRipple
        aria-label="account of current user"
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={handleOpenUserMenu}
        color="inherit"
        sx={{ p: 0, fontSize: "24px", display: "none" }}>
        <MenuIcon fontSize="inherit" />
      </IconButton>
      <Menu
        id="menu-appbar"
        anchorEl={anchorElUser}
        anchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        keepMounted
        transformOrigin={{
          vertical: "top",
          horizontal: "left",
        }}
        open={Boolean(anchorElUser)}
        onClose={handleCloseUserMenu}
        sx={{
          display: { mobileS: "block", laptop: "none" },
        }}>
        {userMenuItems.map((userMenuItem) => (
          <MenuItem key={userMenuItem.title}>
            <Typography textAlign="center">{userMenuItem.title}</Typography>
          </MenuItem>
        ))}
      </Menu>
    </Box>
  );
}
