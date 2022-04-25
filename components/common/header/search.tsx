import React from "react";
import { Box, ClickAwayListener } from "@mui/material";
import { SearchIcon } from "../../../icons/header";

export function Search() {
  const [open, setOpen] = React.useState(false);

  const openSearchField = () => {
    if (!open) {
      setOpen((prev) => !prev);
    }
  };

  return (
    <ClickAwayListener mouseEvent="onMouseDown" onClickAway={() => setOpen(false)}>
      <Box
        role="presentation"
        onClick={openSearchField}
        sx={{
          display: "flex",
          alignItems: "center",
        }}>
        <Box
          className={open ? "active" : ""}
          component="input"
          placeholder="Поиск фильмов, персон…"
          sx={{
            width: "18px",
            height: "24px",
            m: "0 -18px 0 0",
            p: "1px 15px",
            background: "#fff none repeat scroll 0 0",
            borderRadius: "20px",
            border: 0,
            outline: 0,
            opacity: 0,
            zIndex: 10,
            cursor: "pointer",
            transition: { mobileS: "none", laptop: "all 0.4s ease" },

            "::placeholder": {
              opacity: 0.65,
            },

            "~ .header__search-icon": {
              transition: { mobileS: "none", laptop: "all 0.4s ease" },
            },

            "&.active": {
              position: { mobileS: "absolute", laptop: "relative" },
              left: { mobileS: 0, laptop: "auto" },
              top: { mobileS: 0, laptop: "auto" },
              width: { mobileS: "100%", laptop: "200px" },
              height: { mobileS: "56px", laptop: "24px" },
              m: { mobileS: 0, laptop: "0 -18px 0 0" },
              borderRadius: { mobileS: 0, laptop: "20px" },
              opacity: 1,
              cursor: "text",
            },

            "&.active ~ .header__search-icon": {
              opacity: 0,
              visibility: "hidden",
              transition: { mobileS: "none", laptop: "all 0.4s ease" },
            },
          }}
        />
        <SearchIcon />
      </Box>
    </ClickAwayListener>
  );
}
