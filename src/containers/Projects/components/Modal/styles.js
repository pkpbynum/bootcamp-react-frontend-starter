import styled from "styled-components";
import { Flex } from "grid-styled";

export const ModalContainer = styled(Flex)`
  flex-direction: row;
`;

export const ModalBottomContainer = styled(Flex)`
  flex-direction: column;
  align-content: space-around;
`;

export const ModalInput = styled.input`
  border-radius: 3px;
  /* border: none; */
  height: 2em;
  padding: 0.5em 1em;
  margin-top: 0.75em;
  margin-bottom: 2em;
`;

export const ModalButton = styled.button`
  border-radius: 3px;
  margin-left: 0.5em;
  margin-right: 0.5em;
  padding: 0.25em 1em;
  height: 3em;
  border-color: ${({ theme }) => theme.colors.mangoTango};
  background-color: ${({ theme }) => theme.colors.mangoTango};
  font-family: ${({ theme }) => theme.fonts.openSans.family};
  color: white;
  align-self: flex-end;
  width: 10%;
`;

export const ModalText = styled(Flex)`
  font-family: ${({ theme }) => theme.fonts.openSans.family};
  color: black;
  text-decoration: none;
`;

export const ModalTopContainer = styled(Flex)`
  flex-direction: row;
`;
