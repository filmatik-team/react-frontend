import React from "react";
import { FaEye, FaHeart, FaStar } from "react-icons/fa";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";
import { Box } from "@mui/material";

const counterStyles = {
  m: "0 5px 0 0",
  fontSize: { mobileS: "14px", desktop: "16px" },
};

interface CountersProps {
  sx?: SxProps<Theme>;
}

export function EyeCounter({ sx }: CountersProps) {
  return <Box component={FaEye} sx={{ ...counterStyles, color: "#3164DB", ...sx }} />;
}

export function HeartCounter({ sx }: CountersProps) {
  return <Box component={FaHeart} sx={{ ...counterStyles, color: "#ff403d", ...sx }} />;
}

export function StarCounter({ sx }: CountersProps) {
  return <Box component={FaStar} sx={{ ...counterStyles, color: "#ff6d21", ...sx }} />;
}
