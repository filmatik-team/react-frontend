import React from "react";
import { Backdrop, Box, Checkbox, Fade, FormControlLabel, Link, Modal, Stack } from "@mui/material";
import { PasswordFormInput, TextFormInput } from "../../ui/formInputs";
import { FButton, CloseButton } from "../../lib/styling";
import { TRANSITION_DEFAULT } from "../../../src/constants";
import { TabStyled } from "../../ui/tabs-styles";
import { TabsUnstyled } from "@mui/base";
import { FTabPanel, FTabsListStyled } from "../../ui/tabs";
import { UserLoggedInContext, UserLoginModalContext } from "../../../src/contexts/users/contexts";
import { Controller, SubmitHandler, UnpackNestedValue, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaLogin, schemaRegister } from "../../../src/validations";

interface UserDetailsProps {
  email?: string;
  name?: string;
  password?: string;
  passwordConfirmation?: string;
  checkbox?: boolean;
}

const UserModalLoginForm = () => {
  const [, setIsLoggedIn] = React.useContext(UserLoggedInContext);
  const [, setOpen] = React.useContext(UserLoginModalContext);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserDetailsProps>({
    mode: "onTouched",
    defaultValues: {
      email: "",
    },
    resolver: yupResolver(schemaLogin),
  });

  const onSubmit: SubmitHandler<UserDetailsProps> = (data: UnpackNestedValue<UserDetailsProps>) => {
    // Request
    console.log(data);
    setIsLoggedIn(true);
    setOpen(false);
  };

  return (
    <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ mb: "16px" }}>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextFormInput
              autoFocus
              text="Введите e-mail"
              sx={{ mb: "16px" }}
              value={field.value}
              onBlur={() => field.onBlur()}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => field.onChange(e)}
              error={!!errors.email?.message}
              helperText={errors.email?.message}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <PasswordFormInput
              sx={{ mb: "5px" }}
              onBlur={() => field.onBlur()}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => field.onChange(e)}
              error={!!errors.password?.message}
              helperText={errors.password?.message}
            />
          )}
        />
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
      <FButton text="войти" type="submit" uppercase theme="light" />
    </Box>
  );
};
const UserModalRegistrationForm = () => {
  const [, setIsLoggedIn] = React.useContext(UserLoggedInContext);
  const [, setOpen] = React.useContext(UserLoginModalContext);

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

  const onSubmit: SubmitHandler<UserDetailsProps> = (data: UnpackNestedValue<UserDetailsProps>) => {
    // Request
    console.log(data);
    setIsLoggedIn(true);
    setOpen(false);
  };

  const {
    watch,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<UserDetailsProps>({
    mode: "onTouched",
    defaultValues: {
      email: "",
      name: "",
      checkbox: true,
    },
    resolver: yupResolver(schemaRegister),
  });

  return (
    <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
      <Box sx={{ mb: "16px" }}>
        <Controller
          name="email"
          control={control}
          render={({ field }) => (
            <TextFormInput
              text="Введите e-mail"
              sx={{ mb: "16px" }}
              value={field.value}
              onBlur={() => field.onBlur()}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => field.onChange(e)}
              error={!!errors.email?.message}
              helperText={errors.email?.message}
            />
          )}
        />
        <Controller
          name="name"
          control={control}
          render={({ field }) => (
            <TextFormInput
              text="Введите логин"
              sx={{ mb: "16px" }}
              value={field.value}
              onBlur={() => field.onBlur()}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => field.onChange(e)}
              error={!!errors.name?.message}
              helperText={errors.name?.message}
            />
          )}
        />
        <Controller
          name="password"
          control={control}
          render={({ field }) => (
            <PasswordFormInput
              sx={{ mb: "16px" }}
              onBlur={() => field.onBlur()}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => field.onChange(e)}
              error={!!errors.password?.message}
              helperText={errors.password?.message}
            />
          )}
        />
        <Controller
          name="passwordConfirmation"
          control={control}
          render={({ field }) => (
            <PasswordFormInput
              confirm
              sx={{ mb: "16px" }}
              onBlur={() => field.onBlur()}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => field.onChange(e)}
              error={!!errors.passwordConfirmation?.message}
              helperText={errors.passwordConfirmation?.message}
            />
          )}
        />
        <Controller
          name="checkbox"
          control={control}
          render={({ field }) => (
            <FormControlLabel
              checked={!!field.value}
              value={field.value}
              onBlur={() => field.onBlur()}
              onChange={(e: React.SyntheticEvent) => field.onChange(e)}
              control={
                <Checkbox
                  disableRipple
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
          )}
        />
      </Box>
      <FButton disabled={!watch("checkbox", true)} text="зарегистрироваться" type="submit" uppercase theme="light" />
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
        timeout: 100,
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
              <FTabsListStyled scrollableColor="light">
                <TabStyled>Вход</TabStyled>
                <TabStyled>Регистрация</TabStyled>
              </FTabsListStyled>
              <Box sx={{ position: "relative" }}>
                <FTabPanel index={loginModalValue} value={0} animate={false}>
                  <UserModalLoginForm />
                </FTabPanel>
                <FTabPanel index={loginModalValue} value={1} animate={false}>
                  <UserModalRegistrationForm />
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
