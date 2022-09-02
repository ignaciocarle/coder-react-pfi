import React from "react";

import logo from "../assets/pda-logo-small.png";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const Header = () => {
  return (
    <header style={styles.header}>
      <img src={logo} alt="logo" />
      <h1>Punto de Apoyo</h1>

      <nav>
        <a href="">Home</a>
        <a href="">Productos</a>
        <a href="">Nosotros</a>
      </nav>

      <a href="">
        <ShoppingCartOutlinedIcon fontSize="large" />
      </a>
    </header>
  );
};

const styles = {
  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 10%",
    borderBottom: "solid 1px black",
  },
};

export default Header;
