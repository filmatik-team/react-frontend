import React from "react";
import { Box, Link } from "@mui/material";
import { transitionDefault } from "../components/lib/styling";
import { FaVk, FaTwitter } from "react-icons/fa";

const SocialLinkStyled = {
  display: "flex",
  alignItems: "center",
  height: "46px",
  lineHeight: "46px",
  width: "46px",
  fontSize: "20px",
  background: "#484d51 none repeat scroll 0 0",
  borderRadius: "50%",
  textAlign: "center",
  color: "#ddd",
  transition: transitionDefault,

  "&:hover": {
    background: "#575E63",
    color: "#fff",
  },
};
const SocialIconStyled = {
  width: "46px",
};

export function SocialVkButton() {
  return (
    <Link href="https://vk.com/filmatik" sx={{ ...SocialLinkStyled }} rel="noopener noreferrer" target="_blank">
      <Box component={FaVk} sx={{ ...SocialIconStyled }} />
    </Link>
  );
}

export function SocialTwitterButton() {
  return (
    <Link href="https://twitter.com/FilmatikRu" sx={{ ...SocialLinkStyled }} rel="noopener noreferrer" target="_blank">
      <Box component={FaTwitter} sx={{ ...SocialIconStyled }} />
    </Link>
  );
}
