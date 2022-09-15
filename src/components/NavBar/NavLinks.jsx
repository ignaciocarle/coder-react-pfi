import React from "react";

function NavLinks() {
  return (
    <nav style={styles.nav}>
      <a href="/" style={styles.links}>
        <h4>Home</h4>
      </a>
      <a href="/" style={styles.links}>
        <h4>Productos</h4>
      </a>
      <a href="/" style={styles.links}>
        <h4>Nosotros</h4>
      </a>
    </nav>
  );
}

const styles = {
  nav: {
    display: "flex",
    gap: "1rem",
  },
  links: {
    padding: "0.5rem",
  },
};

export default NavLinks;
