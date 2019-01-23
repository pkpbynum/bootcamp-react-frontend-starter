import styled from "styled-components";
import { Flex } from "grid-styled";
import { Link } from "react-router-dom";

export const SidebarWrap = styled(Flex)`
  justify-self: flex-start;
  flex-direction: column;
  justify-content: space-around;
  align-items: right;
  background-color: ${({ theme }) => theme.colors.purpleNavy};
  box-shadow: 0 0 28px rgba(0, 0, 0, 0.25), 0 0 10px rgba(0, 0, 0, 0.22);
  height: 100vh;
  width: 10em;
`;

export const SidebarLink = styled(Flex)`
  display: block;
  font-family: ${({ theme }) => theme.fonts.roboto.family};
  color: white;
  height: 1.5em;
  text-align: right;
  margin-right: 1em;
  cursor: pointer;
`;

export const BottomLink = styled(Link)`
  display: block;
  font-family: ${({ theme }) => theme.fonts.roboto.family};
  color: white;
  height: 1.5em;
  text-align: right;
  margin-right: 1em;
  text-decoration: none;
`;

export const Group = styled(Flex)`
  flex-direction: column;
`;
