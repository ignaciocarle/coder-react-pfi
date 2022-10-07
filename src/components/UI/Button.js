import styled from "styled-components";
import "../../assets/global.css";
import { Link } from "react-router-dom";

export const Button = styled(Link)`
  width: fit-content;
  padding: 0.5em 1em;
  background: var(--brand-primary);
  border: 0px;
  border-radius: 0.5em;

  color: var(--primary-200);
  font-weight: 500;
  cursor: pointer;
`;

export const ButtonOutlined = styled(Button)`
  background: none;
  border: 2px solid var(--brand-primary);
  color: inherit;
`;

export const ButtonRed = styled(Button)`
  color: red;
`;
