import React, { useEffect, useState } from "react";
import styled from "styled-components";

import { TextField } from "@mui/material";
import { breakpoints } from "../UI/breakpoints";
import { ButtonContainer, Button } from "../UI/Button";

function CheckOutForm({ handleNewOrder }) {
  const [formValues, setformValues] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    email: "",
    emailVerif: "",
    paymentMethod: "",
  });
  const [emailsMatch, setEmailsMatch] = useState(true);
  const [isNumber, setIsNumber] = useState(true);

  const numCheck = /^[0-9\s-()]*$/;

  const handleUserInput = (evt) => {
    setformValues({ ...formValues, [evt.target.name]: evt.target.value });
  };

  useEffect(() => {
    setIsNumber(numCheck.test(formValues.phone));
    setEmailsMatch(formValues.emailVerif === formValues.email);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [formValues]);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    if (isNumber && emailsMatch) {
      handleNewOrder(formValues);
    }
  };

  return (
    <>
      <StyledForm onChange={handleUserInput} onSubmit={handleSubmit}>
        <TextField
          name="firstName"
          label="Nombre"
          value={formValues.firstName}
          required
          autoComplete="off"
          variant="outlined"
          fullWidth
        />
        <TextField
          name="lastName"
          label="Apellido"
          value={formValues.lastName}
          required
          autoComplete="off"
          variant="outlined"
          fullWidth
        />
        <TextField
          name="phone"
          label="Teléfono"
          value={formValues.phone}
          type="tel"
          error={!isNumber}
          helperText={!isNumber && "Debes introducir un número de teléfono"}
          required
          autoComplete="off"
          variant="outlined"
          fullWidth
        />
        <TextField
          name="email"
          label="Email"
          value={formValues.email}
          type="email"
          required
          autoComplete="off"
          variant="outlined"
          fullWidth
        />
        <TextField
          name="emailVerif"
          label="Confirma tu Email"
          value={formValues.emailVerif}
          type="email"
          error={!emailsMatch}
          helperText={!emailsMatch && "Los correos deben coincidir"}
          required
          autoComplete="off"
          variant="outlined"
          fullWidth
        />
        <TextField
          name="paymentMethod"
          label="Método de pago"
          value={formValues.paymentMethod}
          required
          autoComplete="off"
          variant="outlined"
          fullWidth
        />
        <ButtonContainer>
          <Button as="button" type="submit">
            Finalizar Compra
          </Button>
        </ButtonContainer>
      </StyledForm>
    </>
  );
}

const StyledForm = styled.form`
  width: 100%;
  display: flex;
  flex-flow: column;
  align-items: flex-start;
  row-gap: 1rem;

  @media ${breakpoints.md} {
    width: 500px;
    padding: 0 5%;
  }
`;

export default CheckOutForm;
