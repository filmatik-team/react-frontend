import React from "react";
import { Box, Button, Link, Stack } from "@mui/material";
import { ContainerStyled } from "../../lib/styling";
import { MainLogoIcon } from "../../../icons/logo";
import { SocialTwitterButton, SocialVkButton } from "../../../icons/social";
import FeedbackModal from "./feedbackModal";
import { TRANSITION_DEFAULT } from "../../../src/constants";
import { FeedbackModalContext } from "../../../src/context";

const menuItems = [
  {
    title: "Обратная связь",
  },
  {
    title: "FAQ",
  },
  {
    title: "Рекомендации разработчиков",
  },
];

export default function Footer() {
  const [openFooterModal, setOpenFooterModal] = React.useState<boolean>(false);

  return (
    <Box
      component="footer"
      sx={{
        flex: "0 0 auto",
        p: { mobileS: "20px 0", laptop: "60px 0" },
        color: "#bdbdbd",
        fontSize: "15px",
        backgroundSize: "cover",
        backgroundColor: "#273037",
        backgroundPosition: "top center",
        backgroundRepeat: "no-repeat",
        backgroundImage: "url(https://filmatik.ru/resources/app/img/footer-bg.png)",
      }}>
      <ContainerStyled>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="space-between"
          sx={{
            display: { mobileS: "block", laptop: "flex" },
          }}>
          <Link href="/" sx={{ display: { mobileS: "none", laptop: "block" }, lineHeight: 0 }}>
            <MainLogoIcon />
          </Link>
          <Box
            component="ul"
            sx={{
              display: "flex",
              justifyContent: "center",
              flexWrap: { mobileS: "wrap", laptop: "nowrap" },
              m: { mobileS: "15px 0", laptop: 0 },
              p: 0,
              listStyle: "none",
            }}>
            {menuItems.map((menuItem, i) => (
              <Box
                component="li"
                key={menuItem.title}
                sx={{
                  m:
                    i === menuItems.length - 1
                      ? { mobileS: "0 0 10px 0", laptop: "0" }
                      : {
                          mobileS: "0 20px 10px 0",
                          laptop: "0 50px 0 0",
                        },
                  whiteSpace: { mobileS: "nowrap", laptop: "normal" },
                }}>
                <Button
                  disableRipple
                  disableElevation
                  onClick={menuItem.title === "Обратная связь" ? () => setOpenFooterModal(true) : undefined}
                  href={menuItem.title === "Обратная связь" ? undefined : "/"}
                  sx={{
                    height: "100%",
                    minWidth: "auto",
                    p: 0,
                    color: "#8C8C8C",
                    fontSize: "16px",
                    transition: TRANSITION_DEFAULT,

                    "&:hover": {
                      background: "transparent",
                      color: "#dfdfdf",
                      textDecoration: "none",
                    },
                  }}>
                  {menuItem.title}
                </Button>
              </Box>
            ))}
          </Box>
          <FeedbackModalContext.Provider value={[openFooterModal, setOpenFooterModal]}>
            <FeedbackModal />
          </FeedbackModalContext.Provider>
          <Stack
            component="ul"
            direction="row"
            sx={{
              justifyContent: { mobileS: "center", laptop: "normal" },
              margin: 0,
              padding: 0,
              listStyle: "none",
            }}>
            <Box component="li" sx={{ mr: "12px" }}>
              <SocialVkButton
                sx={{
                  height: "35px",
                  lineHeight: "35px",
                  width: "35px",
                  fontSize: "15px",
                }}
              />
            </Box>
            <Box component="li">
              <SocialTwitterButton
                sx={{
                  height: "35px",
                  lineHeight: "35px",
                  width: "35px",
                  fontSize: "15px",
                }}
              />
            </Box>
          </Stack>
        </Stack>
        <Stack
          justifyContent="center"
          sx={{
            width: "200px",
            fontFamily: "Poppins, sans-serif",
            color: "#666",
            fontSize: "14px",
            m: { mobileS: "15px auto 0", laptop: "60px auto 0" },
            textAlign: "center",
            whiteSpace: { mobileS: "nowrap", laptop: "normal" },
          }}>
          © Filmatik, {new Date().getFullYear()}
        </Stack>
      </ContainerStyled>
    </Box>
  );
}
