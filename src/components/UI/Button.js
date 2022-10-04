import styled from "styled-components";
import "../../assets/global.css";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  padding: 0.5em;
  background: none;
  border: 2px solid;
  border-radius: 10%;
`;

export const ButtonRed = styled(Button)`
  color: red;
`;
