import styled from "styled-components";
import { Flex } from "grid-styled";

export const Container = styled(Flex)`
  flex-direction: column;
  background: ${({ theme }) => theme.colors.topaz};
  width: 300px;
  overflow: scroll;
  border-right: 1px solid grey;
  height: calc(100vh - 10em);
`;
