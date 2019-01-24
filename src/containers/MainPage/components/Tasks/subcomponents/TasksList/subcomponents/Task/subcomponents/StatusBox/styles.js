import styled from "styled-components";

export const Checkbox = styled.div`
  position: relative;
  background: #f7f7f7;
  width: 1em;
  height: 1em;
  border-radius: 3px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
  overflow: hidden;

  &:before {
    position: absolute;
    display: block;
    content: "";
    left: -1em;
    width: 0.3em;
    height: 0.6em;
    border-bottom: solid #61e294 3px;
    border-right: solid #61e294 3px;
    -webkit-transform: translate(0.3em, 0em) rotate(45deg);
    transform: translate(0.3em, 0em) rotate(45deg);
    -webkit-animation: ${({ checked }) =>
      checked ? "check 0.5s forwards" : "none"};
    animation: ${({ checked }) => (checked ? "check 0.5s forwards" : "none")};
  }

  @-webkit-keyframes check {
    form {
      left: -1em;
    }
    to {
      left: 0em;
    }
  }

  @keyframes check {
    form {
      left: -1em;
    }
    to {
      left: 0em;
    }
  }
`;
