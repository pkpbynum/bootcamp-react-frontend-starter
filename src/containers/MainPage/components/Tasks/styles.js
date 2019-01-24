import styled from "styled-components";
import { Flex } from "grid-styled";

export const Container = styled(Flex)`
  flex-direction: column;
  flex: 1;
  background: ${({ theme }) => theme.colors.rajah};
  padding: 30px;
`;

export const Title = styled.p`
  font-family: ${({ theme }) => theme.fonts.roboto.family};
  font-weight: 700;
  font-size: 3em;
  margin-bottom: 100px;
  user-select: none;
`;
