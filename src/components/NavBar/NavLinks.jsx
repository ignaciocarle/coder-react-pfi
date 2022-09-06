import React from "react";

const NavLinks = ({ categories }) => {
  return (
    <nav style={styles.nav}>
      {categories.map((item) => {
        return (
          <a href="" key={item.id} style={styles.links}>
            <h4>{item.name}</h4>
          </a>
        );
      })}
    </nav>
  );
};

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
