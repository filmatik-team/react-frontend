import React from "react";
import { AppBar, Box, Button, IconButton, Link, Stack, Toolbar } from "@mui/material";
import { ContainerStyled } from "../../lib/styling";
import Search from "./search";
import LoginModal from "./loginModal";
import MobileMenu from "./mobileMenu";
import { UserLogoutIcon } from "../../../icons/header";
import { MainLogoIcon } from "../../../icons/logo";
import { TRANSITION_DEFAULT } from "../../../src/constants";
import { UserLoggedInContext, UserLoginModalContext } from "../../../src/contexts/users/contexts";
import UserMenu from "./userMenu";

export const menuItems = [
  {
    title: "Премьеры",
    submenu: [],
  },
  {
    title: "Фильмы",
    submenu: ["Каталог", "Новинки", "Лучшие"],
  },
  {
    title: "Медиа",
    submenu: ["Новости", "Анонсы", "Рецензии"],
  },
  {
    title: "Персоны",
    submenu: [],
  },
];

export default function Header() {
  const headerHeight = 50;

  const [scroll, setScroll] = React.useState<boolean>(false);
  const [, setOpenUserModal] = React.useContext(UserLoginModalContext);
  const [isLoggedIn] = React.useContext(UserLoggedInContext);
  const headerRef = React.useRef<HTMLDivElement>(null);
  const scrollRef = React.useRef<boolean>(false);

  scrollRef.current = scroll;

  const handleScroll = React.useCallback(() => {
    const topCoords = (headerRef.current as HTMLDivElement).getBoundingClientRect().top + window.scrollY;
    if (topCoords > 0 && !scrollRef.current) {
      setScroll((scroll) => !scroll);
    }
    if (topCoords === 0 && scrollRef.current) {
      setScroll((scroll) => !scroll);
    }
  }, []);

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <AppBar
      ref={headerRef}
      className={`header ${scroll ? "header--dense" : null}`}
      position="fixed"
      sx={{
        top: 0,
        left: 0,
        right: 0,
        width: "100%",
        p: 0,
        background: { mobileS: "#273037", laptop: "rgba(39, 48, 55, 0.8)" },
        height: { mobileS: "56px", laptop: headerHeight },
        transition: TRANSITION_DEFAULT,
        zIndex: 100,

        "&:hover": {
          background: "#273037",
        },

        "&.header--dense": {
          background: "#273037",
        },
      }}>
      <ContainerStyled>
        <Toolbar
          disableGutters
          sx={{ position: "inherit", minHeight: { mobileS: "55px", laptop: headerHeight }, height: "100%", m: "auto" }}>
          <Stack direction="row" alignItems="center" sx={{ height: "100%" }}>
            <Box sx={{ display: "flex" }}>
              <Link href="/" sx={{ lineHeight: 0 }}>
                <MainLogoIcon />
              </Link>
            </Box>
            <Box
              component="nav"
              sx={{
                display: { mobileS: "none", laptop: "flex" },
                height: "50px",
                ml: "100px",
                p: 0,
                alignItems: "center",
                listStyle: "none",
              }}>
              {menuItems.map((menuItem) => (
                <Button
                  disableRipple
                  disableFocusRipple
                  disableElevation
                  key={menuItem.title}
                  sx={{
                    height: "100%",
                    p: 0,
                    "&:hover": {
                      backgroundColor: "#394249",
                    },
                  }}>
                  <Link
                    href=""
                    sx={{
                      display: "flex",
                      alignItems: "center",
                      height: "100%",
                      p: "0 20px",
                      color: "#dedede",
                      fontSize: "16px",
                      transition: TRANSITION_DEFAULT,

                      "&:hover": {
                        background: "#394249",
                      },

                      "&:hover ~ .header__submenu": {
                        visibility: "visible",
                        opacity: 1,
                      },
                    }}>
                    {menuItem.title}
                  </Link>
                  {menuItem.submenu.length === 0 ? null : (
                    <Box
                      className="header__submenu"
                      component="ul"
                      sx={{
                        position: "absolute",
                        left: 0,
                        top: "100%",
                        width: "200px",
                        m: 0,
                        p: "10px 0",
                        zIndex: 4,
                        borderRadius: "0",
                        background: "#394249",
                        boxSizing: "border-box",
                        fontSize: "1rem",
                        opacity: 0,
                        visibility: "hidden",
                        transition: ".1s",

                        "&:hover": {
                          opacity: 1,
                          visibility: "visible",
                        },
                      }}>
                      {menuItem.submenu.map((submenuItem, i) => (
                        <Box
                          key={i}
                          component="li"
                          sx={{
                            position: "relative",
                            width: "100%",
                            height: "40px",
                            m: 0,
                            p: 0,
                            listStyle: "none",

                            "&:hover": {
                              background: "#46515A",
                            },
                          }}>
                          <Link
                            href=""
                            sx={{
                              display: "flex",
                              alignItems: "center",
                              height: "100%",
                              p: "0 20px",
                              color: "#dedede",
                              transition: TRANSITION_DEFAULT,
                            }}>
                            {submenuItem}
                          </Link>
                        </Box>
                      ))}
                    </Box>
                  )}
                </Button>
              ))}
            </Box>
          </Stack>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              height: "100%",
              ml: "auto",
            }}>
            <Search />
            {isLoggedIn ? (
              <UserMenu />
            ) : (
              <>
                <IconButton
                  disableRipple
                  onClick={() => setOpenUserModal(true)}
                  sx={{ display: "flex", ml: { mobileS: "20px", mobileL: "25px" }, p: 0, background: "none" }}>
                  <UserLogoutIcon />
                </IconButton>
                <LoginModal />
              </>
            )}
            <MobileMenu />
          </Stack>
        </Toolbar>
      </ContainerStyled>
    </AppBar>
  );
}
