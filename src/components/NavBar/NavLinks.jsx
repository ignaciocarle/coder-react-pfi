import React from "react";

function NavLinks() {
  return (
    <nav style={s.nav}>
      <a href="/" style={s.links}>
        <h4>Home</h4>
      </a>
      <a href="/" style={s.links}>
        <h4>Productos</h4>
      </a>
      <a href="/" style={s.links}>
        <h4>Nosotros</h4>
      </a>
    </nav>
  );
}

const s = {
  nav: {
    display: "flex",
    gap: "1rem",
  },
  links: {
    padding: "0.5rem",
  },
};

export default NavLinks;
