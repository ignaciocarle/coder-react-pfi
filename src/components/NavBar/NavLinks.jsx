import React from "react";
import { NavLink } from "react-router-dom";

function NavLinks({ categories }) {
  return (
    <>
      <nav style={s.nav}>
        {categories.map((category, index) => (
          <NavLink to={"category/" + category} style={s.links} key={index}>
            <p>{category}</p>
          </NavLink>
        ))}
      </nav>
    </>
  );
}

const s = {
  nav: {
    flexGrow: "1",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    gap: "0.5rem",
  },
  links: {
    padding: "0.5rem",
  },
};

export default NavLinks;
