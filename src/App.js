import React, { useState } from "react";
import { createGlobalStyle } from "styled-components";
import { Navbar } from "./Navbar/Navbar";
import { Banner } from "./Banner/Banner";
import { Menu } from "./Menu/Menu";
import { Order } from "./Order/Order";
import { GlobalStyle } from "./Styles/GlobalStyle";
import { FoodDialog } from "./FoodDialog/FoodDialog";
import { useOpenFood } from "./Hooks/useOpenFood";
import { useOrder } from "./Hooks/useOrder";
function App() {
  const openFood = useOpenFood();
  const orders = useOrder();
  return (
    <>
      <GlobalStyle />
      <FoodDialog {...openFood} {...orders} />
      <Navbar />
      <Order {...orders} />
      <Banner />

      <Menu {...openFood} />
    </>
  );
}

export default App;
