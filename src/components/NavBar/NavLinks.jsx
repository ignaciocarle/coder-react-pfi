import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

function NavLinks({ categories }) {
  return (
    <>
      <StyledNavLinks>
        {categories.map((category) => (
          <NavLink to={"category/" + category.name} key={category.id}>
            <p>{category.name}</p>
          </NavLink>
        ))}
      </StyledNavLinks>
    </>
  );
}

const StyledNavLinks = styled.nav`
  flex-grow: 1;
  display: flex;
  flex-flow: row wrap;
  justify-content: center;
  gap: 0.5rem;

  & > a {
    padding: 0.5rem;
  }
`;

export default NavLinks;
