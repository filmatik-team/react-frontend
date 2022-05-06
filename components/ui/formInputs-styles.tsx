export const inputStyle = {
  "& .MuiOutlinedInput-input:-webkit-autofill": {
    boxShadow: "0 0 0 100px #e8f0fe inset",
    textFillColor: "#495057",
    caretColor: "#495057",
    borderRadius: "inherit",
  },

  "& .MuiInputLabel-root": {
    fontSize: "16px",
    lineHeight: 1.5,
    color: "#8c8c8c",
    backgroundColor: "#fff",
    backgroundClip: "padding-box",

    "&.Mui-focused": {
      color: "#fe7900",
    },

    "&.Mui-error": {
      color: "#f44336",
    },

    "&.Mui-error ~ .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#f44336",
    },
  },

  "& .MuiFormHelperText-root": {
    fontSize: "12px",
  },

  "& .MuiOutlinedInput-input": {
    color: "#495057",
    fontSize: "16px",
    lineHeight: 1.5,
  },

  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(0, 0, 0, 0.23)",
  },

  "& .MuiOutlinedInput-root:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(0, 0, 0, 0.23)",
  },

  "& .MuiOutlinedInput-root.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#fe7900",
    borderWidth: "1px",
  },
};
