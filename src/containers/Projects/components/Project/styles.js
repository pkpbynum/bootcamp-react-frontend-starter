import styled from "styled-components";
import { Flex } from "grid-styled";

export const Card = styled(Flex)`
  padding: 40px 20px;
  background-color: ${({ theme }) => theme.colors.rajah};
  flex-direction: column;
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  align-items: center;
  margin: 3em;
  border-radius: 5px;
`;

export const Title = styled(Flex)`
  font-size: 3em;
  margin-bottom: 0.5em;
  font-family: ${({ theme }) => theme.fonts.openSans.family};
`;

export const Members = styled(Flex)`
  font-size: 1em;
  font-family: ${({ theme }) => theme.fonts.roboto.family};
`;

export const Button = styled.button`
  border-radius: 3px;
  margin-top: 2em;
  padding: 0.25em 1em;
  height: 2.5em;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.purpleNavy};
  border-color: ${({ theme }) => theme.colors.purpleNavy};
  color: white;
  font-size: 1em;
`;
