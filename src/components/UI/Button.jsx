import styled from "styled-components";
import { Link } from "react-router-dom";

import { breakpoints } from "../UI/breakpoints";

export const ButtonContainer = styled.div`
  padding: 1em;
  width: 100%;
  display: flex;
  flex-flow: column;
  row-gap: 1em;
  align-items: center;

  @media ${breakpoints.lg} {
    flex-flow: row;
    justify-content: center;
    column-gap: 1em;
  }
`;

export const Button = styled(Link)`
  width: fit-content;
  padding: 0.5em 1em;
  background: var(--brand-primary);
  border: 2px solid var(--brand-primary);
  border-radius: 0.5em;

  color: var(--primary-200);
  font-size: 1.1em;
  text-align: center;
  vertical-align: middle;
  cursor: pointer;

  @media ${breakpoints.lg} {
    font-size: 0.9em;
  }
`;

export const ButtonOutlined = styled(Button)`
  background: none;
  border: 2px solid var(--brand-primary);
  color: inherit;
`;

export const ButtonRed = styled(Button)`
  color: red;
`;
