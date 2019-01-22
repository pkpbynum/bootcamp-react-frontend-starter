import styled from "styled-components";
import { Flex } from "grid-styled";

export const Container = styled(Flex)`
  background-color: ${({ theme }) => theme.colors.purpleNavy};
  height: 3em;
  width: 100%;
  justify-content: space-around;
`;

export const NavItems = styled(Flex)`
  list-style: none;
  margin: 0;
  padding: 0;
`;

export const Text = styled(Flex)`
  font-family: ${({ theme }) => theme.fonts.openSans.family};
  color: white;
  text-decoration: none;
  margin-top: 1em;
`;

export const Button = styled.button`
  border-radius: 3px;
  margin-left: 0.5em;
  margin-right: 0.5em;
  padding: 0.25em 1em;
  height: 3em;
  border-color: ${({ theme }) => theme.colors.mangoTango};
  background-color: ${({ theme }) => theme.colors.mangoTango};
  font-family: ${({ theme }) => theme.fonts.openSans.family};
`;

export const Input = styled.input`
  border-radius: 3px;
  border: none;
  height: 2em;
  padding: 0.5em 1em;
  margin-top: 1em;
`;
