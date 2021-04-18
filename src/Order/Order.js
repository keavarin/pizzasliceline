import React from "react";
import styled from "styled-components";
import {
  DialogContent,
  DialogFooter,
  ConfirmButton,
} from "../FoodDialog/FoodDialog";
const OrderStyled = styled.div`
  position: fixed;
  right: 0px;
  top: 50px;
  width: 300px;
  background-color: white;
  height: calc(100%);
  z-index: 10;
  box-shadow: 4px 0px 5px 4px grey;
`;
const OrderContent = styled(DialogContent)`
height: 100%
padding; 20px
`;
const OrderFooter = styled.div``;

export function Order({ orders }) {
  return (
    <OrderStyled>
      {orders.length === 0 ? (
        <DialogContent>Your Content</DialogContent>
      ) : (
        <OrderContent>Found {orders.length} orders</OrderContent>
      )}
      <DialogFooter>
        <ConfirmButton>Check Out</ConfirmButton>
      </DialogFooter>
    </OrderStyled>
  );
}
