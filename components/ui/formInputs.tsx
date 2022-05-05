import React from "react";
import {
  FormControl,
  FormHelperText,
  IconButton,
  InputAdornment,
  InputLabel,
  OutlinedInput,
  TextField,
} from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";
import { TextFieldProps } from "@mui/material/TextField/TextField";
import { FormControlProps } from "@mui/material/FormControl/FormControl";

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

type TextFormInputProps = TextFieldProps & {
  text?: string;
};

export function TextFormInput({ text, sx, ...rest }: TextFormInputProps) {
  return <TextField variant="outlined" label={text} sx={{ ...inputStyle, width: "100%", ...sx }} {...rest} />;
}

interface PasswordFormInputProps extends FormControlProps {
  helperText?: string;
  confirm?: boolean;
}

export function PasswordFormInput({ helperText, sx, confirm = false, ...rest }: PasswordFormInputProps) {
  interface ValuesStateProps {
    password: string;
    showPassword: boolean;
  }

  const [values, setValues] = React.useState({
    password: "",
    showPassword: false,
  });

  const handleChange = (prop: keyof ValuesStateProps) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: e.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
  };

  return (
    <FormControl sx={{ ...inputStyle, width: "100%", ...sx }} variant="outlined" {...rest}>
      <InputLabel>{confirm ? "Повторите пароль" : "Введите пароль"}</InputLabel>
      <OutlinedInput
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
        label={confirm ? "Повторите пароль" : "Введите пароль"}
      />
      <FormHelperText>{helperText}</FormHelperText>
    </FormControl>
  );
}
