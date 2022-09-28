import React from "react";
import { Link } from "react-router-dom";

import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";

function CartWidget() {
  return (
    <Link to="/cart">
      <ShoppingCartOutlinedIcon fontSize="large" />
    </Link>
  );
}

export default CartWidget;
