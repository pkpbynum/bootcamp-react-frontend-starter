import styled from "styled-components";
import { Flex } from "grid-styled";

export const UserPicture = styled(Flex)`
  height: 7em;
  width: 7em;
  box-shadow: inset 0 0 30px -3px;
  border-radius: 50%;
  margin-bottom: 1em;
`;

export const Container = styled(Flex)`
  flex-direction: column;
  align-items: center;
`;

export const UserName = styled.p`
  color: white;
  font-size: 0.8em;
  font-family: ${({ theme }) => theme.fonts.openSans.family};
`;
