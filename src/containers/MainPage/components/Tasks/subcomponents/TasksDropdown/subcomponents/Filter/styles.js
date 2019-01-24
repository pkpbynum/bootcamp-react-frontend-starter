import styled from "styled-components";
import { Flex } from "grid-styled";

export const Container = styled(Flex)`
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40px;
  background: ${({ theme }) => theme.colors.purpleNavy};
  user-select: none;
  cursor: pointer;
  border-bottom: 2px solid #47517f;

  &:hover {
    background: #6372b2;
  }
`;

export const Label = styled.p`
  color: white;
  font-family: ${({ theme }) => theme.fonts.openSans.family};
`;
