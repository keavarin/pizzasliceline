import React from "react";
import styled from "styled-components";
import {
  DialogContent,
  DialogFooter,
  ConfirmButton,
} from "../FoodDialog/FoodDialog";
import { formatPrice } from "../Data/FoodData";
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
const OrderContainer = styled.div`
  padding: 10px 0px;
  border-bottom: 1px solid grey;
`;
const OrderFooter = styled.div``;
const OrderItem = styled.div`
  padding: 10px 0px;
  display: grid;
  grid-template-columns: 20px 150px 20px 60px;
  justify-content: space-between;
`;
export function Order({ orders }) {
  return (
    <OrderStyled>
      {orders.length === 0 ? (
        <DialogContent>Your Content</DialogContent>
      ) : (
        <OrderContent>
          <OrderContainer>Your Order:</OrderContainer>{" "}
          {orders.map((orders) => (
            <OrderContainer>
              <OrderItem>
                <div>1</div>
                <div>{orders.name}</div>
                <div>{formatPrice(orders.price)}</div>
              </OrderItem>
            </OrderContainer>
          ))}
        </OrderContent>
      )}
      <DialogFooter>
        <ConfirmButton>Check Out</ConfirmButton>
      </DialogFooter>
    </OrderStyled>
  );
}
