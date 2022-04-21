import React from "react";
import { Box, ClickAwayListener } from "@mui/material";
import { transitionDefault } from "../../lib/styling";

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
        sx={{
          display: "flex",
          alignItems: "center",
        }}>
        <Box
          className={open ? "active" : ""}
          component="input"
          placeholder="Поиск фильмов, персон…"
          onClick={openSearchField}
          sx={{
            width: "18px",
            height: "24px",
            m: "0 -18px 0 0",
            p: "1px 15px",
            background: "#fff none repeat scroll 0 0",
            borderRadius: "20px",
            border: 0,
            outline: 0,
            transition: "all 0.4s ease",
            opacity: 0,
            zIndex: 10,
            cursor: "pointer",

            "::placeholder": {
              opacity: 0.65,
            },

            "&.active": {
              width: "200px",
              opacity: 1,
              cursor: "text",
            },

            "&.active ~ .header__search-icon": {
              opacity: 0,
              visibility: "hidden",
              transition: "all 0.4s ease",
            },
          }}
        />
        <Box
          component="img"
          className="header__search-icon"
          src="https://filmatik.ru/resources/app/img/search.svg"
          alt="search"
          sx={{
            width: "18px",
            height: "24px",
            opacity: 1,
            zIndex: 1,
            cursor: "pointer",
            transition: "all 0.4s ease",
          }}
        />
      </Box>
    </ClickAwayListener>
  );
}
