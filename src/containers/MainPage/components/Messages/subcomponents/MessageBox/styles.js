import styled from "styled-components";

export const Container = styled.div`
  width: 300px;
  height: 100vh;
  overflow-y: scroll;
  overflow-x: hidden;
  background: ${({ theme }) => theme.colors.rajah};
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  padding: 5px;
  box-sizing: border-box;
`;

export const NoMessages = styled.p`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.openSans.family};
  color: black;
`;
