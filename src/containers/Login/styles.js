import styled from "styled-components";
import { Flex } from "grid-styled";

export const Container = styled(Flex)`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.purpleNavy};
`;

export const LoginContainer = styled(Flex)`
  padding: 40px 20px;
  background-color: white;
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  align-items: center;
  margin: 3em;
  border-radius: 5px;
  width: 50%;
`;

export const Input = styled.input`
  border-radius: 3px;
  /* border: none; */
  height: 2em;
  padding: 0.5em 1em;
  margin-top: 0.5em;
  width: 50%;
`;

export const Title = styled(Flex)`
  font-size: 2em;
  margin-bottom: 0.5em;
  font-family: ${({ theme }) => theme.fonts.openSans.family};
`;

export const Label = styled(Flex)`
  font-size: 1em;
  margin-bottom: 0.1em;
  margin-top: 0.5em;
  font-family: ${({ theme }) => theme.fonts.roboto.family};
  align-self: flex-start;
  margin-left: 10em;
`;

export const Button = styled.button`
  border-radius: 3px;
  margin-top: 2em;
  padding: 0.25em 1em;
  height: 2.5em;
  width: 25%;
  background-color: ${({ theme }) => theme.colors.mangoTango};
  border-color: ${({ theme }) => theme.colors.mangoTango};
  color: white;
  font-size: 1em;
`;

export const Text = styled(Flex)`
  font-size: 1em;
  margin-top: 1em;
  font-family: ${({ theme }) => theme.fonts.roboto.family};
  align-self: center;
`;
