import { FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput } from "@mui/material";
import React from "react";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { SxProps } from "@mui/system";
import { Theme } from "@mui/material/styles";

const inputStyle = {
  color: "inherit",

  "&:-webkit-autofill": {
    webkitBoxShadow: "0 0 0 100px #e8f0fe inset",
    webkitTextFillColor: "#000",
    caretColor: "#000",
    borderRadius: "inherit",
  },

  "& .MuiOutlinedInput-input": {
    fontSize: "16px",
    lineHeight: 1.5,
  },

  "& .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(0, 0, 0, 0.23)",
  },

  "&:hover .MuiOutlinedInput-notchedOutline": {
    borderColor: "rgba(0, 0, 0, 0.23)",
  },

  "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
    borderColor: "#fe7900",
    borderWidth: "1px",
  },
};

interface UserProps {
  text?: string;
  tab?: number;
  sx?: SxProps<Theme>;
}

export function MailLoginForm({ text, tab, sx, ...rest }: UserProps) {
  return (
    <FormControl sx={{ width: "100%", ...sx }} variant="outlined" {...rest}>
      <InputLabel
        htmlFor={`signIn-email${tab}`}
        sx={{
          fontSize: "16px",
          lineHeight: 1.5,
          color: "#8c8c8c",
          backgroundColor: "#fff",
          backgroundClip: "padding-box",

          "&.Mui-focused": {
            color: "#fe7900",
          },
        }}>
        {text}
      </InputLabel>
      <OutlinedInput
        id={`signIn-email${tab}`}
        required
        autoFocus
        sx={{ ...inputStyle }}
        label="Введите e-mail"
        {...rest}
      />
    </FormControl>
  );
}

export function PasswordLoginForm({ tab, sx, ...rest }: UserProps) {
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
    <FormControl sx={{ width: "100%", ...sx }} variant="outlined" {...rest}>
      <InputLabel
        htmlFor={`signIn-password${tab}`}
        sx={{
          fontSize: "16px",
          lineHeight: 1.5,
          color: "#8c8c8c",
          backgroundColor: "#fff",
          backgroundClip: "padding-box",

          "&.Mui-focused": {
            color: "#fe7900",
          },
        }}>
        Введите пароль
      </InputLabel>
      <OutlinedInput
        id={`signIn-password${tab}`}
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
        sx={{ ...inputStyle }}
        label="Введите пароль"
      />
    </FormControl>
  );
}
