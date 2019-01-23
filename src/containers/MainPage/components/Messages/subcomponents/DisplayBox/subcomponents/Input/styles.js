import styled from "styled-components";
import { Flex } from "grid-styled";
export const TitleInput = styled.input`
  display: block;
  font-size: 18px;
  height: 1.5em;
  border: none;
  border-radius: 5px;
  margin-bottom: 30px;

  &:focus {
    outline: none;
  }
`;

export const ContentInput = styled.textarea`
  display: block;
  font-size: 18px;
  flex: 1;
  border: none;
  border-radius: 5px;
  margin-bottom: 60px;

  &:focus {
    outline: none;
  }
`;

export const Button = styled(Flex)`
  position: absolute;
  bottom: 30px;
  padding: 1em;
  font-family: ${({ theme }) => theme.fonts.roboto.family};
  color: white;
  background: ${({ theme }) => theme.colors.purpleNavy};
  border-radius: 5px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  cursor: pointer;
  user-select: none;

  &:hover {
    background: #6372b2;
  }
`;
