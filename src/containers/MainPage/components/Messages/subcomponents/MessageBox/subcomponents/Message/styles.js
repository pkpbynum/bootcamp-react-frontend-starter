import styled from "styled-components";
import { Flex } from "grid-styled";

export const Container = styled(Flex)`
  flex-direction: column;
  background: ${({ active, theme }) =>
    active ? theme.colors.topaz : theme.colors.rajah};
  padding: 5px;
  border-radius: 5px;
  height: 80px;
  margin-bottom: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
`;

export const Title = styled.p`
  font-family: ${({ theme }) => theme.fonts.roboto.family};
  font-weight: 700;
`;

export const Author = styled.p`
  font-family: ${({ theme }) => theme.fonts.openSans.family};
  color: black;
  font-size: 0.75em;
`;

export const Date = styled.p`
  font-family: ${({ theme }) => theme.fonts.openSans.family};
  color: grey;
  font-size: 0.75em;
  margin-bottom: 5px;
`;

export const Content = styled.p`
  font-family: ${({ theme }) => theme.fonts.openSans.family};
  color: black;
  font-size: 0.75em;
`;
