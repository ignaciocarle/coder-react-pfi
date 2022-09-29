import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

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
    <header style={s.header}>
      <Link to="/" style={s.brand}>
        <img src={logo} alt="logo" style={s.logo} />
        <h1>Punto de Apoyo</h1>
      </Link>
      <NavLinks categories={categories} />
      <CartWidget />
    </header>
  );
}

const s = {
  header: {
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.5rem 3rem",
    borderBottom: "solid 2px",
  },
  brand: {
    display: "flex",
    flexFlow: "row",
    alignItems: "center",
    gap: "1rem",
  },
  logo: {
    width: 60,
    height: 60,
  },
};

export default NavBar;
