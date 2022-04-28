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
import { SelectArrow } from "../../../icons/arrows";
import { UserLoginIcon } from "../../../icons/header";
import { TRANSITION_DEFAULT } from "../../../src/constants";

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
  const [menuOpen, setMenuOpen] = React.useState<boolean>(false);
  const userButtonRef = React.useRef<HTMLButtonElement>(null);

  const handleOpenUserMenu = () => {
    if (userButtonRef.current) userButtonRef.current.classList.add("active");
    setMenuOpen((prev) => !prev);
  };

  const handleCloseUserMenu = (e: Event | React.SyntheticEvent) => {
    if (userButtonRef.current && !userButtonRef.current.contains(e.target as HTMLElement)) {
      userButtonRef.current.classList.toggle("active");
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
    <Box sx={{ display: { mobileS: "flex", laptop: "flex" }, height: "100%", ml: "25px" }}>
      <Box
        ref={userButtonRef}
        id="user-menu"
        aria-controls={menuOpen ? "user-menu" : undefined}
        aria-expanded={menuOpen ? "true" : undefined}
        aria-haspopup="true"
        component="button"
        onClick={handleOpenUserMenu}
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
        placement="bottom-start"
        transition
        disablePortal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{
              transformOrigin: placement === "bottom-start" ? "left top" : "right top",
            }}>
            <Paper>
              <ClickAwayListener onClickAway={handleCloseUserMenu}>
                <MenuList
                  autoFocusItem={menuOpen}
                  id="user-menu"
                  aria-labelledby="user-menu"
                  onKeyDown={handleListKeyDown}
                  sx={{
                    width: "auto",
                    minWidth: "120px",
                    maxHeight: "70vh",
                    p: 0,
                    backgroundColor: "#293339",
                    borderRadius: 0,
                    boxShadow: "0 0 0 1px rgb(68 68 68 / 11%)",
                  }}>
                  {userMenuItems.map((userMenuItem) => (
                    <MenuItem
                      className={userMenuItem.title === "Выйти" ? "user-menu__logout" : undefined}
                      disableGutters
                      disableRipple
                      key={userMenuItem.title}
                      onClick={handleCloseUserMenu}
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: { mobileS: "center", mobileL: "normal" },
                        p: "10px 30px",

                        "&.user-menu__logout:hover": {
                          backgroundColor: "rgba(176, 44, 44, 0.6)",
                        },
                      }}>
                      <Link
                        href=""
                        sx={{
                          color: "#dfdfdf",
                          fontSize: { mobileS: "17px", mobileL: "15px" },
                          fontWeight: { mobileS: "bold", mobileL: "normal" },
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
    </Box>
  );
}
