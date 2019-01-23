import styled from "styled-components";
import { Flex } from "grid-styled";

export const Button = styled(Flex)`
  position: absolute;
  bottom: 30px;
  width: 3em;
  height: 3em;
  background: ${({ theme }) => theme.colors.purpleNavy};
  border-radius: 50%;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  cursor: pointer;
  user-select: none;

  &:hover {
    background: #6372b2;
  }
  &:before {
    display: block;
    position: absolute;
    content: "";
    width: 5px;
    height: 1.5em;
    background: white;
    transform: translate(1.4em, 0.7em) rotate(35deg);
  }

  &:after {
    display: block;
    content: "";
    width: 0;
    height: 0;
    border-top: 3px solid transparent;
    border-bottom: 3px solid transparent;
    border-right: 3px solid white;
    transform: translate(0.9em, 2.05em) rotate(-55deg);
  }
`;
