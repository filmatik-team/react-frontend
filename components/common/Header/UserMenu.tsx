import React from "react";
import {
  Box,
  ClickAwayListener,
  Grow,
  IconButton,
  Link,
  MenuItem,
  MenuList,
  Paper,
  Popper,
  Stack,
  Typography,
} from "@mui/material";
import { SelectArrow } from "../../icons/arrows";
import { UserLoginIcon } from "../../icons/header";
import { TRANSITION_DEFAULT } from "../../../constants/constants";

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

const UserMenu = () => {
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);
  const userButtonRef = React.useRef<HTMLButtonElement>(null);
  const [arrowRef, setArrowRef] = React.useState<HTMLElement | null>(null);
  const arrow = false;

  const handleToggleUserMenu = () => {
    if (userButtonRef.current) userButtonRef.current.classList.toggle("active");
    setMenuOpen((prev) => !prev);
  };

  const handleCloseUserMenu = (e: Event | React.SyntheticEvent) => {
    if (userButtonRef.current && !userButtonRef.current.contains(e.target as HTMLElement)) {
      userButtonRef.current.classList.remove("active");
      setMenuOpen(false);
    }
  };

  function handleListKeyDown(e: React.KeyboardEvent) {
    if (e.key === "Tab") {
      e.preventDefault();
      setMenuOpen(false);
    } else if (e.key === "Escape") {
      setMenuOpen(false);
    }
  }

  return (
    <Stack alignItems="center" sx={{ ml: "25px" }}>
      <Box
        ref={userButtonRef}
        id="user-menu"
        aria-controls={menuOpen ? "user-menu" : undefined}
        aria-expanded={menuOpen ? "true" : undefined}
        aria-haspopup="true"
        onClick={handleToggleUserMenu}
        sx={{
          p: 0,
          background: "transparent",
          color: "#8C8C8C",
          border: "none",
          cursor: "pointer",
          transition: TRANSITION_DEFAULT,

          "&:hover": {
            filter: "brightness(2)",
          },

          "&.active": {
            filter: "brightness(2)",
          },
        }}>
        <Stack direction="row" alignItems="center" sx={{ display: { mobileS: "none", mobileL: "flex" } }}>
          <Typography
            sx={{
              position: "relative",
              m: "0 10px 0 0",
              p: 0,
              fontFamily: "Poppins, Roboto Condensed, sans-serif",
              fontSize: "15px",
              fontWeight: 500,
              whiteSpace: "nowrap",
              userSelect: "none",
            }}>
            Dmitriy
          </Typography>
          <SelectArrow className={menuOpen ? "active" : undefined} />
        </Stack>
        <IconButton
          disableRipple
          color="inherit"
          sx={{ display: { mobileS: "flex", mobileL: "none" }, p: 0, fontSize: "24px" }}>
          <UserLoginIcon />
        </IconButton>
      </Box>
      <Popper
        open={menuOpen}
        anchorEl={userButtonRef.current}
        role={undefined}
        transition
        disablePortal
        modifiers={[
          {
            name: "arrow",
            enabled: arrow,
            options: {
              element: arrowRef,
            },
          },
          {
            name: "offset",
            enabled: true,
            options: {
              offset: [0, 10],
            },
          },
        ]}>
        {({ TransitionProps }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: "top",
            }}>
            <Paper elevation={0}>
              <ClickAwayListener onClickAway={handleCloseUserMenu}>
                <MenuList
                  id="user-menu"
                  aria-labelledby="user-menu"
                  onKeyDown={handleListKeyDown}
                  sx={{
                    width: "auto",
                    minWidth: "120px",
                    maxHeight: "70vh",
                    p: 0,
                    backgroundColor: "#394249",
                    borderRadius: 0,
                    boxShadow: "0px 0px 20px 5px rgba(0,0,0,0.2)",
                  }}>
                  <Box
                    component="span"
                    ref={setArrowRef}
                    sx={{
                      display: arrow ? "inline" : "none",
                      position: "absolute",
                      width: "12px",
                      height: "12px",
                      background: "inherit",
                      visibility: "hidden",

                      "&::before": {
                        position: "absolute",
                        top: "-6px",
                        width: "12px",
                        height: "12px",
                        background: "inherit",
                        visibility: "visible",
                        content: "''",
                        transform: "rotate(45deg)",
                        filter: "drop-shadow(-3px -3px 4px rgba(0,0,0,0.2))",
                      },
                    }}
                  />
                  {userMenuItems.map((userMenuItem) => (
                    <MenuItem
                      className={userMenuItem.title === "Выйти" ? "user-menu__logout" : undefined}
                      disableGutters
                      disableRipple
                      key={userMenuItem.title}
                      onClick={handleToggleUserMenu}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: { mobileS: "center", mobileL: "normal" },
                        p: "10px 30px",
                        minHeight: "46px",

                        "&:hover": {
                          backgroundColor: "#46515A",
                        },

                        "&.user-menu__logout:hover": {
                          backgroundColor: "rgba(176, 44, 44, 0.6)",
                        },
                      }}>
                      <Link
                        href=""
                        sx={{
                          color: "#dfdfdf",
                          fontSize: { mobileS: "17px", mobileL: "16px" },
                          transition: TRANSITION_DEFAULT,
                        }}>
                        {userMenuItem.title}
                      </Link>
                    </MenuItem>
                  ))}
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </Stack>
  );
};

export default UserMenu;
