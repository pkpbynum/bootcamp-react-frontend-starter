import styled from "styled-components";
import { Flex } from "grid-styled";

export const Container = styled(Flex)`
  background: ${({ theme }) => theme.colors.rajah};
  flex: 1;
  justify-content: center;
  align-items: center;
  z-index: -1;
`;

export const InnerContainer = styled(Flex)`
  background: ${({ theme }) => theme.colors.topaz};
  height: calc(100vh - 10em);
`;
