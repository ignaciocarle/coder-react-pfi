import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

import { MainContainer } from "../UI/Containers";

function ThankYou() {
  let { orderId } = useParams();

  return (
    <>
      <StyledSection>
        <h1>Gracias por tu compra</h1>
        <p>Conservá este codigo para coordinar la entrega</p>
        <h3>{orderId}</h3>
      </StyledSection>
    </>
  );
}

const StyledSection = styled(MainContainer)`
  row-gap: 1.5em;
`;

export default ThankYou;
