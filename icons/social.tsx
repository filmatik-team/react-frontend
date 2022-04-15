import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter, faVk } from "@fortawesome/free-brands-svg-icons";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { Link } from "@mui/material";

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
  transition: "all 0.3s ease",

  "&:hover": {
    background: "#575E63",
    color: "#fff",
  },
};
const SocialIconStyled = {
  width: "46px",
};

export function SocialVk() {
  return (
    <Link href="https://vk.com/filmatik" sx={{ ...SocialLinkStyled }} rel="noopener noreferrer" target="_blank">
      <FontAwesomeIcon icon={faVk as IconProp} color="#ddd" style={SocialIconStyled} />
    </Link>
  );
}

export function SocialTwitter() {
  return (
    <Link href="https://twitter.com/FilmatikRu" sx={{ ...SocialLinkStyled }} rel="noopener noreferrer" target="_blank">
      <FontAwesomeIcon icon={faTwitter as IconProp} color="#ddd" style={SocialIconStyled} />
    </Link>
  );
}
