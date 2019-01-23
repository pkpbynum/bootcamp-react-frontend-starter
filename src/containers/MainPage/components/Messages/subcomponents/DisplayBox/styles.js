import styled from "styled-components";
import { Flex } from "grid-styled";

export const Container = styled(Flex)`
  flex-direction: column;
  flex: 1;
  background: ${({ theme }) => theme.colors.topaz};
  padding: 30px;
`;

export const Title = styled.p`
  font-family: ${({ theme }) => theme.fonts.roboto.family};
  font-weight: 700;
  font-size: 3em;
`;
export const Author = styled.p`
  font-family: ${({ theme }) => theme.fonts.openSans.family};
`;

export const Date = styled.p`
  color: grey;
  font-family: ${({ theme }) => theme.fonts.openSans.family};
  margin-bottom: 30px;
`;
export const Content = styled.p`
  font-family: ${({ theme }) => theme.fonts.openSans.family};
`;
