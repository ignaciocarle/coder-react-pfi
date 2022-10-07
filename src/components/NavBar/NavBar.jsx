import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

import { getAllCategories } from "../../services/productsService";

import logo from "../../assets/pda-logo-small.png";
import NavLinks from "./NavLinks";
import CartWidget from "./CartWidget";

function NavBar() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getAllCategories().then((data) => {
      setCategories(data);
    });
  }, []);

  return (
    <StyledNavBar>
      <Link to="/" className="brand">
        <img src={logo} alt="logo" className="logo" />
        <h1>Punto de Apoyo</h1>
      </Link>
      <NavLinks categories={categories} />
      <CartWidget />
    </StyledNavBar>
  );
}

const StyledNavBar = styled.header`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-items: center;
  padding: 1.5rem 3rem;
  border-bottom: solid 2px;

  & .brand {
    display: flex;
    flex-flow: row;
    align-items: center;
    gap: 1rem;
  }

  & .logo {
    width: 60;
    height: 60;
  }
`;

export default NavBar;
