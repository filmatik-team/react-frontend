import React from "react";
import { FaEye, FaHeart, FaStar } from "react-icons/fa";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";
import { Box } from "@mui/material";

const counterStyles = {
  display: "flex",
  alignItems: "end",
  m: "0 5px 0 0",
  fontSize: { mobileS: "14px", desktop: "16px" },
};

interface CountersProps {
  sx?: SxProps<Theme>;
}

export const EyeCounter = ({ sx }: CountersProps) => {
  return (
    <Box sx={{ ...counterStyles, color: "#3164DB", ...sx }}>
      <FaEye />
    </Box>
  );
};

export const HeartCounter = ({ sx }: CountersProps) => {
  return (
    <Box sx={{ ...counterStyles, color: "#ff403d", ...sx }}>
      <FaHeart />
    </Box>
  );
};

export const StarCounter = ({ sx }: CountersProps) => {
  return (
    <Box sx={{ ...counterStyles, color: "#ff6d21", ...sx }}>
      <FaStar />
    </Box>
  );
};
