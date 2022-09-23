import React from "react";

function Spacer({ size = "3rem" }) {
  const styles = {
    marginTop: size,
  };
  return <div style={styles}></div>;
}

export default Spacer;
