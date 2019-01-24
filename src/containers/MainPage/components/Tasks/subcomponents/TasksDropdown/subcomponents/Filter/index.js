import React from "react";
import { Container, Label } from "./styles";

const Filter = ({ id, name, setFilterId, toggleDropdown }) => {
  return (
    <Container
      onClick={() => {
        setFilterId(id);
        toggleDropdown();
      }}
    >
      <Label>{name}</Label>
    </Container>
  );
};

export default Filter;
