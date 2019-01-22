import styled from "styled-components";
import { Flex } from "grid-styled";
import { Link } from "react-router-dom";

export const SidebarWrap = styled(Flex)`
  justify-self: flex-start;
  flex-direction: column;
  justify-content: space-around;
  align-items: right;
  background-color: blue;
  height: 100vh;
  width: 10em;
`;

export const SidebarLink = styled(Flex)`
  display: block;
  font-size: 1.5rem;
  color: white;
  background: red;
  text-align: right;
  margin-right: 1em;
  cursor: pointer;
`;

export const BottomLink = styled(Link)`
  display: block;
  font-size: 1.5rem;
  color: white;
  background: red;
  text-align: right;
  margin-right: 1em;
`;

export const Group = styled(Flex)`
  flex-direction: column;
`;
