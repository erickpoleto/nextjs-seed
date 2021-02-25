import styled from "styled-components";

export const Button = styled.button`
  border: none;
  box-shadow: 1px 1px 3px black;
  padding: 5px 20px;
  background: ${({theme}) => theme.buttonColors.primary};
`
