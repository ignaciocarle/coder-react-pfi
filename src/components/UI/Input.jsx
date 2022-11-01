import React from "react";
import styled from "styled-components";

import { TextField } from "@mui/material";

function Input({ label, name, value }) {
  return (
    <TextField
      variant="outlined"
      label={label}
      name={name}
      value={value}
      required
      error
      helperText
      autoComplete="off"
    />
  );
}

export default Input;
