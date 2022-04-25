import React from "react";
import { Box, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";

const inputStyle = {
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

interface UserProps {
  text?: string;
  tab?: number | string;
  sx?: SxProps<Theme>;
  autoFocus?: boolean;
}

export function LoginForm({ text, tab, sx, autoFocus = false, ...rest }: UserProps) {
  return (
    <FormControl sx={{ ...inputStyle, width: "100%", ...sx }} variant="outlined" {...rest}>
      <InputLabel htmlFor={`signIn-email-${tab}`}>{text}</InputLabel>
      <OutlinedInput id={`signIn-email-${tab}`} autoFocus={autoFocus} required label="Введите e-mail" {...rest} />
    </FormControl>
  );
}

export function PasswordForm({ tab, sx, ...rest }: UserProps) {
  interface State {
    password: string;
    showPassword: boolean;
  }

  const [values, setValues] = React.useState<State>({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop: keyof State) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
  };

  return (
    <FormControl sx={{ ...inputStyle, width: "100%", ...sx }} variant="outlined" {...rest}>
      <InputLabel htmlFor={`signIn-password-${tab}`}>Введите пароль</InputLabel>
      <OutlinedInput
        id={`signIn-password-${tab}`}
        required
        type={values.showPassword ? "text" : "password"}
        value={values.password}
        onChange={handleChange("password")}
        endAdornment={
          <InputAdornment position="end" sx={{ color: "#8c8c8c" }}>
            <IconButton
              disableRipple
              aria-label="toggle password visibility"
              onClick={handleClickShowPassword}
              onMouseDown={handleMouseDownPassword}
              edge="end"
              sx={{ color: "inherit" }}>
              {values.showPassword ? <VisibilityOff /> : <Visibility />}
            </IconButton>
          </InputAdornment>
        }
        label="Введите пароль"
      />
    </FormControl>
  );
}

interface MessageFormProps {
  text?: string;
  tab?: number | string;
  sx?: SxProps<Theme>;
}

export function TextForm({ text, tab, sx, ...rest }: MessageFormProps) {
  return (
    <Box sx={{ ...inputStyle, ...sx }}>
      <TextField id={`outlined-multiline-static-${tab}`} label={text} multiline fullWidth rows={5} {...rest} />
    </Box>
  );
}
