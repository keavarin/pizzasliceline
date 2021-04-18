import React from "react";
import styled from "styled-components";
import { FoodLabel } from "../Menu/FoodGrid";
import { pizzaRed } from "../Styles/colors";
import { Title } from "../Styles/title";
const Dialog = styled.div`
  width: 500px;
  height: 2000px;
  background-color: white;
  position: fixed;
  top: 75px;
  z-index: 5;
  max-height: calc(100% - 100px);
  left: calc(50% - 250px);
`;
const DialogShadow = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  top: 0px;
  background-color: black;
  opacity: 0.7;
  z-index: 4;
`;

const DialogBanner = styled.div`
  min-height: 200px;
  margin-bottom: 20px;
  ${({ img }) => `background-image: url(${img});`}
  background-position: center;
  background-size: cover;
`;

const DialogBannerName = styled(FoodLabel)`
  top: 100px;
  font-size: 30px;
  padding: 5px 40px;
`;

export const DialogContent = styled.div`
  overflow: auto;
  min-height: 100px;
`;
export const DialogFooter = styled.div`
  box-shadow: -5px -4px 20px 0px grey;
  height: 60px;
  justify-content: center;
`;
const Button = styled.button`
  color: palevioletred;

  border: 2px solid palevioletred;
  border-radius: 3px;
`;
export const ConfirmButton = styled(Button)`

margin: 10px;
color: black;
height: 20px;
border-radius: 5px;
padding: 10px
text-align: center;
width: 200px
cursor: pointer;
`;

export function FoodDialog({ openFood, setOpenFood, orders, setOrders }) {
  function close() {
    setOpenFood();
  }
  if (!openFood) return null;

  const order = {
    name: openFood.name,
  };
  function addToOrder() {
    setOrders([...orders, order]);
    close();
  }
  return (
    <>
      <DialogShadow onClick={close} />
      <Dialog>
        <DialogBanner img={openFood.img}>
          <DialogBannerName>{openFood.name}</DialogBannerName>
        </DialogBanner>
        <DialogContent />
        <DialogFooter>
          <ConfirmButton onClick={addToOrder}>Add to Order</ConfirmButton>
        </DialogFooter>
      </Dialog>
    </>
  );
}
