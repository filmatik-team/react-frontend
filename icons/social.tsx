import React from "react";
import { Box, Link } from "@mui/material";
import { FaVk, FaTwitter } from "react-icons/fa";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";

const socialLinkStyled = {
  display: "flex",
  alignItems: "center",
  height: "46px",
  lineHeight: "46px",
  width: "46px",
  fontSize: "20px",
  background: "#484d51 none repeat scroll 0 0",
  borderRadius: "50%",
  color: "#ddd",
  transition: process.env.NEXT_PUBLIC_TRANSITION_DEFAULT,

  "&:hover": {
    background: "#575E63",
    color: "#fff",
  },
};
const socialIconStyled = {
  width: "46px",
};

interface SocialProps {
  sx?: SxProps<Theme>;
}

export function SocialVkButton({ sx }: SocialProps) {
  return (
    <Link href="https://vk.com/filmatik" sx={{ ...socialLinkStyled, ...sx }} rel="noopener noreferrer" target="_blank">
      <Box component={FaVk} sx={{ ...socialIconStyled }} />
    </Link>
  );
}

export function SocialTwitterButton({ sx }: SocialProps) {
  return (
    <Link
      href="https://twitter.com/FilmatikRu"
      sx={{ ...socialLinkStyled, ...sx }}
      rel="noopener noreferrer"
      target="_blank">
      <Box component={FaTwitter} sx={{ ...socialIconStyled }} />
    </Link>
  );
}
