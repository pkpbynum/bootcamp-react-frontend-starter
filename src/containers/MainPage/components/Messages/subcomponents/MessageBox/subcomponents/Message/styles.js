import styled from "styled-components";
import { Flex } from "grid-styled";

export const Container = styled(Flex)`
  display: block;
  height: 5em;
  border-bottom: 1px solid grey;
  width: 300px;
  text-overflow: ellipsis;
  overflow: hidden;
  padding: 5px;
`;

export const Title = styled.p`
  font-family: ${({ theme }) => theme.fonts.roboto.family};
  font-weight: 700;
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
