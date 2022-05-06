import React from "react";
import { Box } from "@mui/material";

export const BannerSeparator = () => {
  return (
    <Box sx={{ display: { mobileS: "none", laptop: "block" }, m: "0 auto", textAlign: "center" }}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="270"
        height="50"
        viewBox="0 0 494 38"
        fill="#dbdbdb"
        filter="drop-shadow(1px 1px 10px black);">
        <path d="M243.4 12.4c-6.4 2.8-6.2 12.5.2 15.2 4.2 1.8 7.8 1 10.4-2.3 3.5-4.5 1.9-10.3-3.7-13.2-2.7-1.4-3.1-1.3-6.9.3zM212.5 17.1c-8.3 1.6-16.1 1.8-105.7 1.8C43 19 10 19.3 10 20c0 .7 32.7 1 96.2 1 93.1 0 96.5.1 107 2.1l10.8 2.1 6-2.4c3.3-1.2 6-2.5 6-2.8 0-.8-11.4-5-13-4.9-.8.1-5.5.9-10.5 2zM264.3 17.2c-2.9 1.1-5.3 2.4-5.3 2.8 0 .4 2.6 1.7 5.8 2.9l5.9 2.2 10.7-2c10.4-2 13.8-2.1 107.2-2.1 63.6 0 96.4-.3 96.4-1s-32.8-1-96.3-1c-92 0-96.8-.1-107.2-2-6-1.1-11.1-2-11.4-1.9-.3 0-3 1-5.8 2.1z" />
      </svg>
    </Box>
  );
};
