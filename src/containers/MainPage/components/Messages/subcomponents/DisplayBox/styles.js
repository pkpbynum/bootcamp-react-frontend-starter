import styled from "styled-components";
import { Flex } from "grid-styled";

export const Container = styled(Flex)`
  background: ${({ theme }) => theme.colors.topaz};
  flex: 1;
  z-index: -1;
  font-family: ${({ theme }) => theme.fonts.openSans.family};
`;
