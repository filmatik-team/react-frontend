import React from "react";
import { Backdrop, Box, Button, Checkbox, Fade, FormControlLabel, IconButton, Link, Modal, Stack } from "@mui/material";
import { LoginForm, PasswordForm } from "../../ui/forms";
import { ButtonFilmatik, transitionDefault } from "../../lib/styling";
import { NavData, NavTabs } from "../../ui/tabs";
import { UserLoginModalContext } from "./header";

const UserModalLogin = () => {
  return (
    <Box component="form">
      <Box sx={{ mb: "16px" }}>
        <LoginForm text="Введите e-mail" tab="0" sx={{ mb: "16px" }} />
        <PasswordForm tab={0} sx={{ mb: "5px" }} />
        <Link
          href=""
          sx={{
            display: "inline-block",
            color: "#484d51",
            transition: transitionDefault,

            "&:hover": {
              color: "#0b0b0b",
            },
          }}>
          Забыли пароль?
        </Link>
      </Box>
      <ButtonFilmatik text="войти" uppercase type="submit" theme="light" />
    </Box>
  );
};

const UserModalRegistration = () => {
  const label = (
    <Box>
      Я согласен на обработку персональных данных согласно{" "}
      <Link
        href=""
        sx={{ color: "inherit", textDecoration: "underline", zIndex: 10, "&:hover": { textDecoration: "none" } }}>
        политике конфиденциальности
      </Link>
    </Box>
  );

  return (
    <Box component="form">
      <Box sx={{ mb: "16px" }}>
        <LoginForm text="Введите e-mail" tab="1 - 0" sx={{ mb: "16px" }} />
        <LoginForm text="Введите имя пользователя" tab="1 - 1" sx={{ mb: "16px" }} />
        <PasswordForm tab={1} sx={{ mb: "16px" }} />
        <FormControlLabel
          control={
            <Checkbox
              disableRipple
              required
              sx={{
                color: "#000",

                "&.Mui-checked": {
                  color: "#FE7900",
                },
              }}
            />
          }
          label={label}
          sx={{
            "& .MuiFormControlLabel-label": {
              fontSize: "16px",
            },
          }}
        />
      </Box>
      <ButtonFilmatik text="зарегистрироваться" uppercase type="submit" theme="light" />
    </Box>
  );
};

const NavTabsUserModalData: NavData[] = [
  {
    tabName: "Вход",
    content: <UserModalLogin />,
  },
  {
    tabName: "Регистрация",
    content: <UserModalRegistration />,
  },
];

export const LoginModal = () => {
  const [open, setOpen] = React.useContext(UserLoginModalContext);

  return (
    <Modal
      open={open}
      onClose={() => setOpen(false)}
      closeAfterTransition
      disableScrollLock
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 200,
      }}>
      <Fade in={open}>
        <Box
          sx={{
            width: { mobileS: "100%", laptop: "480px" },
            minHeight: { mobileS: "100vh", laptop: "auto" },
            m: { mobileS: 0, laptop: "40px auto" },
            p: { mobileS: "15px", laptop: "2em 3em" },
            position: "relative",
            background: "#fff",
          }}>
          <Button
            disableRipple
            disableElevation
            onClick={() => setOpen(false)}
            sx={{
              position: "absolute",
              right: 0,
              top: 0,
              display: "block",
              width: "44px",
              minWidth: "auto",
              height: "44px",
              p: 0,
              lineHeight: "44px",
              textAlign: "center",
              opacity: 0.65,
              fontStyle: "normal",
              fontSize: "28px",
              overflow: "visible",
              cursor: "pointer",
              webkitAppearance: "none",
              zIndex: 10,
              boxShadow: "none",
              touchAction: "manipulation",
              color: "#000",
              transition: transitionDefault,
            }}>
            ×
          </Button>
          <Box
            sx={{
              color: "#000",
              fontSize: "16px",
              "& .nav-tabs__tab.TabUnstyled-root.Mui-selected": { color: "#0b0b0b" },
              "& .nav-tabs__tab.TabUnstyled-root:hover": { color: "#0b0b0b" },
            }}>
            <NavTabs data={NavTabsUserModalData} defaultTab={0} animate={false} />
            <Stack>
              <Box component="p" sx={{ mb: "5px" }}>
                Или войдите, используя соц. сети:
              </Box>
              <Stack
                direction="row"
                sx={{
                  "& .auth-link": {
                    ml: "10px",
                  },

                  "& .auth-link:first-of-type": {
                    ml: 0,
                  },

                  "& .auth-icon": {
                    display: "block",
                    width: "32px",
                    height: "32px",
                    borderRadius: "3px",
                  },
                }}>
                <Link href="" className="auth-link">
                  <Box
                    className="auth-icon"
                    sx={{
                      background: "url(https://filmatik.ru/assets/a8fddd3f/authchoice.png) no-repeat 0 -136px",
                    }}
                  />
                </Link>
                <Link href="" className="auth-link">
                  <Box
                    className="auth-icon"
                    sx={{
                      background: "url(https://filmatik.ru/resources/app/img/odnoklasniki.png) no-repeat",
                      backgroundPosition: "center",
                      backgroundSize: "36px",
                    }}
                  />
                </Link>
              </Stack>
            </Stack>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};
