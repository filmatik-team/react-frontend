import React from "react";
import { Backdrop, Box, Fade, Modal, Stack, Typography } from "@mui/material";
import { FilmatikButton, CloseButton } from "../../lib/styling";
import { LoginForm, TextForm } from "../../ui/forms";
import ReCAPTCHA from "react-google-recaptcha";

export const FeedbackModalContext = React.createContext<[boolean, React.Dispatch<React.SetStateAction<boolean>>]>([
  false,
  () => {},
]);

export const FeedbackModal = () => {
  const [open, setOpen] = React.useContext(FeedbackModalContext);

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
            }}>
            <Stack>
              <Typography
                paragraph
                sx={{
                  fontSize: "18px",
                  mb: "20px",
                }}>
                Обратная связь
              </Typography>
              <Box component="form">
                <LoginForm text="Введите e-mail" tab="0-0" autoFocus sx={{ mb: "16px" }} />
                <LoginForm text="Введите имя пользователя" tab="0-1" sx={{ mb: "16px" }} />
                <TextForm text="Введите сообщение" tab="0" sx={{ mb: "16px" }} />
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as "string"}
                  style={{ margin: "0 0 16px 0" }}
                />
                <FilmatikButton text="отправить" uppercase type="submit" theme="light" />
              </Box>
            </Stack>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
};
