import styled from "styled-components";
import { Flex } from "grid-styled";

export const Container = styled(Flex)`
  background: ${({ theme }) => theme.colors.topaz};
  border-bottom: 1px solid ${({ theme }) => theme.colors.rajah};
  height: 2.5em;
  line-height: 2.5em;
  padding: 0 1em;
`;

export const Content = styled(Flex)`
  font-family: ${({ theme }) => theme.fonts.openSans.family};
  flex: 1;
`;

export const Item = styled(Flex)`
  width: 8%;
  justify-content: center;
  align-items: center;
`;
