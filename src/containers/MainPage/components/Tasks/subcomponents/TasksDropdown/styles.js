import styled from "styled-components";

export const Dropdown = styled.div`
  position: absolute;
  top: 100px;
  width: 150px;
  height: ${({ active }) => (active ? "auto" : "40px")};
  border-radius: 5px;
  overflow: hidden;
`;
