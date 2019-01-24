import React from "react";
import { Button } from "./styles";

const InputButton = ({ toggleInput }) => (
  <Button
    onClick={() => {
      toggleInput();
    }}
  />
);
export default InputButton;
