import React from "react";
import {
  Box,
  Collapse,
  IconButton,
  Link,
  List,
  ListItemButton,
  ListItemText,
  Stack,
  SwipeableDrawer,
} from "@mui/material";
import { SocialTwitterButton, SocialVkButton } from "../../../icons/social";
import MenuIcon from "@mui/icons-material/Menu";
import { menuItems } from "./header";
import { SelectArrow } from "../../../icons/arrows";
import { MainLogoIcon } from "../../../icons/logo";

export default function MobileMenu() {
  const [toggleMenu, setToggleMenu] = React.useState<boolean>(false);
  const [menuItemOpen, setMenuItemOpen] = React.useState<object>({});

  const toggleDrawer = () => setToggleMenu((toggleMenu) => !toggleMenu);

  const subMenuOpen = (menuTitle: string) => {
    setMenuItemOpen((prev) => ({ ...prev, [menuTitle]: !prev[menuTitle as keyof typeof menuItemOpen] }));
  };

  const list = () => (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: "100%",
        display: "flex",
        justifyContent: "center",
        flexShrink: 0,
        backgroundColor: "#273037",
        backgroundImage: "url(https://filmatik.ru/resources/app/img/menu-bg.jpg?v1)",
        backgroundSize: "cover",
        backgroundPosition: "center top",

        "&::after": {
          position: "absolute",
          content: '""',
          right: 0,
          top: 0,
          width: "100%",
          height: "100%",
          backgroundColor: "rgba(39, 48, 55, 0.94)",
        },
      }}>
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          width: "100%",
          height: "100%",
          zIndex: 1,
          overflowY: "scroll",
        }}>
        <Box sx={{ mt: "50px" }}>
          <Link href="/" sx={{ display: "flex", justifyContent: "center", mb: "50px", cursor: "pointer" }}>
            <MainLogoIcon width={150} />
          </Link>
          <Box component="nav" sx={{ display: "flex", justifyContent: "center", mb: "50px" }}>
            <List
              sx={{
                p: 0,
                zIndex: 1,
                color: "#fff",
              }}>
              {menuItems.map((menuItem) => (
                <Box
                  key={menuItem.title}
                  sx={{
                    m: "0 0 20px 0",
                  }}>
                  <ListItemButton
                    component={menuItem.submenu.length ? "div" : "a"}
                    href={menuItem.submenu.length ? undefined : ""}
                    disableGutters
                    disableRipple
                    onClick={menuItem.submenu.length ? () => subMenuOpen(menuItem.title) : undefined}
                    sx={{
                      m: 0,
                      p: 0,

                      "&:hover": {
                        backgroundColor: "transparent",
                      },
                    }}>
                    <ListItemText
                      inset={true}
                      primary={menuItem.title}
                      disableTypography
                      sx={{
                        position: "relative",
                        flex: "none",
                        m: menuItem.submenu.length ? "0 15px 0 0" : 0,
                        p: 0,
                        fontSize: "24px",
                        fontWeight: "bold",
                      }}
                    />
                    {menuItem.submenu.length ? (
                      <SelectArrow
                        className={menuItemOpen[menuItem.title as keyof typeof menuItemOpen] ? "active" : undefined}
                        sx={{ filter: "brightness(5)" }}
                      />
                    ) : null}
                  </ListItemButton>
                  <Collapse in={menuItemOpen[menuItem.title as keyof typeof menuItemOpen]} timeout="auto" unmountOnExit>
                    <List
                      component="div"
                      disablePadding
                      sx={{
                        height: "100%",
                        m: "10px 0 0 24px",
                      }}>
                      {menuItem.submenu.map((subMenuItem, i) => (
                        <ListItemButton
                          component="a"
                          href=""
                          key={i}
                          disableGutters
                          disableRipple
                          sx={{
                            m: 0,
                            p: 0,

                            "&:hover": {
                              backgroundColor: "transparent",
                            },
                          }}>
                          <ListItemText
                            inset={true}
                            primary={subMenuItem}
                            disableTypography
                            sx={{
                              position: "relative",
                              flex: "none",
                              m: 0,
                              p: 0,
                              fontSize: "22px",
                              fontWeight: "normal",
                              lineHeight: "45px",
                            }}
                          />
                        </ListItemButton>
                      ))}
                    </List>
                  </Collapse>
                </Box>
              ))}
            </List>
          </Box>
          <Stack
            component="ul"
            direction="row"
            justifyContent="center"
            sx={{
              m: 0,
              p: 0,
              listStyle: "none",
            }}>
            <Box component="li" sx={{ mr: "12px" }}>
              <SocialVkButton />
            </Box>
            <Box component="li">
              <SocialTwitterButton />
            </Box>
          </Stack>
        </Box>
      </Box>
    </Box>
  );
  return (
    <Box sx={{ display: { mobileS: "flex", laptop: "none" }, ml: { mobileS: "20px", mobileL: "25px" } }}>
      <IconButton
        disableRipple
        aria-controls="menu-appbar"
        aria-haspopup="true"
        onClick={toggleDrawer}
        color="inherit"
        sx={{ p: 0, fontSize: "24px" }}>
        <MenuIcon fontSize="inherit" />
      </IconButton>
      <SwipeableDrawer
        anchor={"right"}
        open={toggleMenu}
        onClose={toggleDrawer}
        onOpen={toggleDrawer}
        swipeAreaWidth={20}
        sx={{
          "& .MuiDrawer-paper": {
            width: { mobileS: "72%", mobileL: "50%", tablet: "40%" },
            height: "100%",
            display: "flex",
            justifyContent: "center",
            flexShrink: 0,
          },
        }}>
        {list()}
      </SwipeableDrawer>
    </Box>
  );
}
