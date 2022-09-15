import React from "react";
import logo from "../../assets/pda-logo-small.png";
import NavLinks from "./NavLinks";
import CartWidget from "./CartWidget";

function NavBar() {
  return (
    <header style={styles.header}>
      <a href="/" style={styles.brand}>
        <img src={logo} alt="logo" style={styles.logo} />
        <h1>Punto de Apoyo</h1>
      </a>
      <NavLinks />
      <CartWidget />
    </header>
  );
}

const styles = {
  header: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.5rem 3rem",
    borderBottom: "solid 2px",
  },
  brand: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    gap: "1rem",
  },
  logo: {
    width: 60,
    height: 60,
  },
};

export default NavBar;
