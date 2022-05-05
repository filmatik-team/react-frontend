import React from "react";
import { Backdrop, Box, Fade, Modal, Stack, Typography } from "@mui/material";
import { FButton, CloseButton } from "../../lib/styling";
import { TextFormInput } from "../../ui/formInputs";
import ReCAPTCHA from "react-google-recaptcha";

interface FeedbackModalProps {
  open: boolean;
  openHandler: (e: React.SyntheticEvent<Element, Event>) => void;
}

export default function FeedbackModal(props: FeedbackModalProps) {
  const { open, openHandler } = props;

  return (
    <Modal
      open={open}
      onClose={openHandler}
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
          <CloseButton theme="dark" onClick={openHandler} />
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
                <TextFormInput autoFocus required text="Введите e-mail" sx={{ mb: "16px" }} />
                <TextFormInput required text="Введите имя" sx={{ mb: "16px" }} />
                <TextFormInput required text="Введите сообщение" multiline rows={5} sx={{ mb: "16px" }} />
                {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ? (
                  <ReCAPTCHA
                    sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as "string"}
                    style={{ margin: "0 0 16px 0" }}
                  />
                ) : (
                  console.error("RECAPTCHA_SITE_KEY is missing, update env.local")
                )}
                <FButton text="отправить" type="submit" uppercase theme="light" />
              </Box>
            </Stack>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}
