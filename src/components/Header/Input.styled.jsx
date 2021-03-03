import styled from "styled-components";
const Input = styled.input`
  font-size: medium;
  display: flex;
  flex-direction: column;
  color: ${props => props.inputColor || "palevioletred"};
  `;

  export default Input;