import React from "react";
import { Backdrop, Box, Checkbox, Fade, FormControlLabel, Link, Modal, Stack } from "@mui/material";
import { LoginForm, PasswordForm } from "../../ui/forms";
import { FButton, CloseButton } from "../../lib/styling";
import { TRANSITION_DEFAULT } from "../../../src/constants";
import { TabsListStyled, TabStyled } from "../../ui/tabs-styles";
import { TabsUnstyled } from "@mui/base";
import { FTabPanel } from "../../ui/tabs";
import { UserLoginModalContext } from "../../../src/context";

const UserModalLogin = () => {
  return (
    <Box component="form">
      <Box sx={{ mb: "16px" }}>
        <LoginForm text="Введите e-mail" autoFocus tab="0" sx={{ mb: "16px" }} />
        <PasswordForm tab="0" sx={{ mb: "5px" }} />
        <Link
          href=""
          sx={{
            display: "inline-block",
            color: "#484d51",
            transition: TRANSITION_DEFAULT,

            "&:hover": {
              color: "#0b0b0b",
            },
          }}>
          Забыли пароль?
        </Link>
      </Box>
      <FButton text="войти" uppercase type="submit" theme="light" />
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
        <LoginForm text="Введите e-mail" tab="1-0" sx={{ mb: "16px" }} />
        <LoginForm text="Введите имя пользователя" tab="1-1" sx={{ mb: "16px" }} />
        <PasswordForm tab="1" sx={{ mb: "16px" }} />
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
      <FButton text="зарегистрироваться" uppercase type="submit" theme="light" />
    </Box>
  );
};

export default function LoginModal() {
  const [open, setOpen] = React.useContext(UserLoginModalContext);
  const [loginModalValue, setLoginModalValue] = React.useState<number>(0);

  const handleChangeloginModal = (event: React.SyntheticEvent, newValue: number | string) => {
    setLoginModalValue(newValue as number);
  };

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
          <CloseButton theme="dark" onClick={() => setOpen(false)} />
          <Box
            sx={{
              color: "#000",
              fontSize: "16px",
              "& .nav-tabs__tab.TabUnstyled-root.Mui-selected": { color: "#0b0b0b" },
              "& .nav-tabs__tab.TabUnstyled-root:hover": { color: "#0b0b0b" },
            }}>
            <TabsUnstyled component={Box} value={loginModalValue} onChange={handleChangeloginModal}>
              <TabsListStyled>
                <TabStyled>Вход</TabStyled>
                <TabStyled>Регистрация</TabStyled>
              </TabsListStyled>
              <Box sx={{ position: "relative" }}>
                <FTabPanel index={loginModalValue} value={0}>
                  <UserModalLogin />
                </FTabPanel>
                <FTabPanel index={loginModalValue} value={1}>
                  <UserModalRegistration />
                </FTabPanel>
              </Box>
            </TabsUnstyled>
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
}
