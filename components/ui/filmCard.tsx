import React from "react";
import { Box, Link } from "@mui/material";

// Обложка фильма

interface FilmCardProps {
  width: string;
  height: string;
  margin: string;
  children?: React.ReactNode;
}

export function FilmCard({ width, height, margin, children }: FilmCardProps) {
  const filmCardMobileWidth = 105;
  const filmCardMobileMargin = 5;

  return (
    <Box
      sx={{
        width: { mobileS: `${filmCardMobileWidth}px`, laptop: width },
        height: { mobileS: `${filmCardMobileWidth * 1.5}px`, laptop: height },
        margin: { mobileS: `0 ${filmCardMobileMargin}px 0 0`, laptop: margin },
        position: "relative",
        outline: "none",
        border: 0,
        transition: "all 0.3s ease",
        flexShrink: 0,
      }}>
      <Link
        sx={{
          position: "relative",
          display: "block",
          width: "100%",
          height: "100%",
          border: "solid 1px transparent",
          borderRadius: "8px",
          textDecoration: "none",
          cursor: "pointer",

          "::before": {
            content: '""',
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            left: 0,
            zIndex: -1,
            margin: "-1px",
            borderRadius: "inherit",
            background: "linear-gradient(135deg, #586e7d 0%, #273037 100%)",
          },
        }}>
        {children}
      </Link>
    </Box>
  );
}
