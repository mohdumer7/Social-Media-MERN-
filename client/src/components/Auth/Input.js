import { Grid, IconButton, InputAdornment, TextField } from "@material-ui/core";
import React from "react";

import Visibility from "@material-ui/icons/Visibility";
import Visibilityoff from "@material-ui/icons/VisibilityOff";

const Input = ({
  half,
  name,
  label,
  type,
  handleChange,
  handleShowPassword,
  autoFocus,
}) => {
  return (
    <Grid item xs={12} sm={half ? 6 : 12}>
      <TextField
        name={name}
        onChange={handleChange}
        variant="outlined"
        required
        fullWidth
        label={label}
        autoFocus={autoFocus}
        type={type}
        inputProps={
          name === "password"
            ? {
                endadornment: (
                  <InputAdornment position="end">
                    <IconButton onClick={handleShowPassword}>
                      {type === "password" ? <Visibility /> : <Visibilityoff />}
                    </IconButton>
                  </InputAdornment>
                ),
              }
            : undefined
        }
      />
    </Grid>
  );
};

export default Input;
