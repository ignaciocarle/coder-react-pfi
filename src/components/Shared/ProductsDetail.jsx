import styled from "styled-components";

import React from "react";

export function ProductsListTable({
  productList,
  actionDisplay,
  action,
  actionText,
}) {
  return (
    <>
      <StyledTable>
        <thead>
          <tr>
            <th width="60%">Producto</th>
            <th width="15%">Precio</th>
            <th>Cantidad</th>
            <th width="15%">Subtotal</th>
            {actionDisplay && <th></th>}
          </tr>
        </thead>
        <tbody>
          {productList.map((item) => (
            <tr key={item.id}>
              <td className="title">{item.title}</td>
              <td>$ {item.price}</td>
              <td>{item.qty}</td>
              <td>$ {item.price * item.qty}</td>
              {actionDisplay && (
                <td className="actionBtn" onClick={() => action(item.id)}>
                  {actionText}
                </td>
              )}
            </tr>
          ))}
        </tbody>
      </StyledTable>
    </>
  );
}

export function ProductsListAmount({ totalAmount }) {
  return (
    <StyledAmount>
      <h3>Total:</h3>
      <h3>$ {totalAmount()}</h3>
    </StyledAmount>
  );
}

const StyledTable = styled.table`
  width: 100%;
  border-bottom: 1px solid var(--brand-primary);
  border-collapse: collapse;

  & thead tr {
    background-color: var(--brand-primary);
    color: var(--primary-200);
  }

  & tbody tr:nth-child(2n) {
    background-color: var(--primary-200);
  }

  & th,
  td {
    padding: 0.5em;
    font-size: 0.9em;
  }

  & th {
    font-weight: 500;
  }

  & td:not(.title) {
    text-align: end;
  }

  & .actionBtn {
    cursor: pointer;
  }
`;

const StyledAmount = styled.div`
  display: flex;
  align-self: end;
  column-gap: 3em;
`;
