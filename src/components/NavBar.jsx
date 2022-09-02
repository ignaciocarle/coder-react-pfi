import React from "react";

import logo from "../assets/pda-logo-small.png";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

const NavBar = () => {
  return (
    <header style={styles.header}>
      <div style={styles.brand}>
        <img src={logo} alt="logo" style={styles.logo} />
        <h1>Punto de Apoyo</h1>
      </div>

      <nav>
        <a href="" style={styles.links}>
          Home
        </a>
        <a href="" style={styles.links}>
          Productos
        </a>
        <a href="" style={styles.links}>
          Nosotros
        </a>
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
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "1.5rem 3rem",
    borderBottom: "solid 2px",
    color: "var(--primary-1000)",
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
  links: {
    padding: "0 0.5rem",
  },
};

export default NavBar;
