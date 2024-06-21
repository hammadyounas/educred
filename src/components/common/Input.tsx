import React from "react";
import { TextField, InputAdornment } from "@mui/material";

interface CustomTextFieldProps {
  type?: string;
  placeholder?: string;
  name?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  error?: React.ReactNode;
  success?: React.ReactNode;
}

const CustomTextField: React.FC<CustomTextFieldProps> = ({
  type,
  placeholder,
  error,
  name,
  value,
  onChange,
  startIcon,
  endIcon,
  success,
}) => {
  return (
    <>
      <TextField
        margin="normal"
        fullWidth
        type={type}
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        variant="outlined"
        placeholder={placeholder}
        InputProps={{
          startAdornment: startIcon ? (
            <InputAdornment position="start">{startIcon}</InputAdornment>
          ) : null,
          endAdornment: endIcon ? (
            <InputAdornment position="end">{endIcon}</InputAdornment>
          ) : null,
        }}
        sx={{
          fontFamily: "Inter",
          fontWeight: "400",
          fontSize: "16px",
          lineHeight: "26px",
          "& .MuiOutlinedInput-root": {
            backgroundColor: error ? "#FDF2F2" : "#F3F4F6",
            color: error ? "#DE3B40" : "#171A1F",
            borderRadius: "8px",
          },
          "& fieldset": {
            border: "none",
          },
          "&.Mui-focused fieldset": {
            border: "none",
          },
        }}
      />
      {error ? error : success ? success : null}
    </>
  );
};

export default CustomTextField;
