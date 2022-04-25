import React from "react";
import { FaComment } from "react-icons/fa";
import { Box } from "@mui/material";

export function NewsComment() {
  return (
    <Box sx={{ display: "flex", fontSize: "15px", mr: "5px" }}>
      <FaComment />
    </Box>
  );
}
