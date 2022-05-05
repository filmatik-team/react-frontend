import React from "react";
import { Backdrop, Box, Fade, Modal, Stack, Typography } from "@mui/material";
import { FButton, CloseButton } from "../../lib/styling";
import { TextFormInput } from "../../ui/formInputs";
import ReCAPTCHA from "react-google-recaptcha";
import { Controller, SubmitHandler, UnpackNestedValue, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { schemaFeedback } from "../../../src/validations";

interface FeedbackModalFormProps {
  email: string;
  name: string;
  text: string;
  recaptcha: boolean;
}

interface FeedbackModalProps {
  open: boolean;
  openHandler: () => void;
}

export default function FeedbackModal(props: FeedbackModalProps) {
  const { open, openHandler } = props;
  const recaptchaRef = React.useRef<ReCAPTCHA>(null);

  const {
    watch,
    control,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FeedbackModalFormProps>({
    mode: "onTouched",
    defaultValues: {
      email: "",
      name: "",
      text: "",
      recaptcha: false,
    },
    resolver: yupResolver(schemaFeedback),
    delayError: 1000,
  });

  const onSubmit: SubmitHandler<FeedbackModalFormProps> = (data: UnpackNestedValue<FeedbackModalFormProps>) => {
    // Request
    console.log(data);
    openHandler();
  };

  React.useEffect(() => {
    reset({ recaptcha: false });
  }, [open]);

  const recaptchaError = () => {
    return <Box sx={{ color: "#f44336" }}>Ошибка загрузки модуля recaptcha, перезагрузите страницу!</Box>;
  };

  return (
    <Modal
      open={open}
      onClose={openHandler}
      closeAfterTransition
      disableScrollLock
      disableRestoreFocus
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
              <Box component="form" noValidate onSubmit={handleSubmit(onSubmit)}>
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
                  name="name"
                  control={control}
                  render={({ field }) => (
                    <TextFormInput
                      text="Введите имя"
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
                  name="text"
                  control={control}
                  render={({ field }) => (
                    <TextFormInput
                      text="Введите сообщение"
                      multiline
                      rows={5}
                      sx={{ mb: "16px" }}
                      value={field.value}
                      onBlur={() => field.onBlur()}
                      onChange={(e: React.ChangeEvent<HTMLInputElement>) => field.onChange(e)}
                      error={!!errors.text?.message}
                      helperText={errors.text?.message}
                    />
                  )}
                />
                {process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ? (
                  <Controller
                    name="recaptcha"
                    control={control}
                    render={({ field }) => (
                      <ReCAPTCHA
                        ref={recaptchaRef}
                        onChange={(token) => {
                          field.onChange(token);
                        }}
                        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY as "string"}
                        onErrored={recaptchaError}
                        style={{ margin: "0 0 16px 0" }}
                      />
                    )}
                  />
                ) : (
                  console.error("RECAPTCHA_SITE_KEY is missing, update env.local")
                )}
                <FButton disabled={!watch("recaptcha", false)} text="отправить" type="submit" uppercase theme="light" />
              </Box>
            </Stack>
          </Box>
        </Box>
      </Fade>
    </Modal>
  );
}
