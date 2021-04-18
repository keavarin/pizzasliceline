import React from "react";
import styled from "styled-components";
import {
  DialogContent,
  DialogFooter,
  ConfirmButton,
} from "../FoodDialog/FoodDialog";
import { formatPrice } from "../Data/FoodData";
import { getPrice } from "../FoodDialog/FoodDialog";

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

const OrderItem = styled.div`
  padding: 10px 0px;
  display: grid;
  grid-template-columns: 20px 150px 20px 60px;
  justify-content: space-between;
`;

const DetailItem = styled.div`
  color: grey;
  font-size: 10px;
`;

export function Order({ orders }) {
  const subtotal = orders.reduce((total, order) => {
    return total + getPrice(order);
  }, 0);

  const tax = subtotal * 0.7;
  const total = subtotal + tax;

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
                <div>{orders.quantity}</div>
                <div>{orders.name}</div>
                <div>{formatPrice(getPrice(orders))}</div>
              </OrderItem>
              <DetailItem>
                {orders.toppings
                  .filter((t) => t.checked)
                  .map((topping) => topping.name)
                  .join(",")}
              </DetailItem>
            </OrderContainer>
          ))}
        </OrderContent>
      )}
      <OrderContainer>
        <OrderItem>
          <div />
          <div>sub-total</div>
          <div>{formatPrice(subtotal)}</div>
        </OrderItem>
        <OrderItem>
          <div />
          <div>tax</div>
          <div>{formatPrice(tax)}</div>
        </OrderItem>
        <OrderItem>
          <div />
          <div>total</div>
          <div>{formatPrice(total)}</div>
        </OrderItem>
      </OrderContainer>
      <DialogFooter>
        <ConfirmButton>Check Out</ConfirmButton>
      </DialogFooter>
    </OrderStyled>
  );
}
