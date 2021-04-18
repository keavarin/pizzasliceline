export function formatPrice(price) {
  return price.toLocaleString("en-US", {
    style: "currency",
    currency: "USD",
  });
}
export const foodItems = [
  {
    name: "Veggi Pizza",
    img: "/img/pizza1.jpeg",
    section: "Pizza",
    price: 1,
  },
  {
    name: "Hawaii Pizza",
    img: "/img/pizza2.jpeg",
    section: "Pizza",
    price: 1.5,
  },
  {
    name: "Square Pizza",
    img: "/img/squrePizza.jpeg",
    section: "Pizza",
    price: 2,
  },
  {
    name: "Pepperoni Pizza",
    img: "/img/Pizza3.jpeg",
    section: "Pizza",
    price: 2,
  },
  {
    name: "Spicy Fried",
    img: "/img/frenchfried.jpeg",
    section: "Snack",
    price: 3,
  },
  {
    name: "French Fried",
    img: "/img/friedAndFried.jpeg",
    section: "Snack",
    price: 3,
  },
  {
    name: "Burger Original",
    img: "/img/burger.jpeg",
    section: "Burger",
    price: 4,
  },
  {
    name: "Burger Spicy",
    img: "/img/BurgerSpicy.jpeg",
    section: "Burger",
    price: 4,
  },
];

//เลือกเอาแต่ section ของfooditems เอามาreduce [{section: Burger},{section: Pizza}]
export const foods = foodItems.reduce((res, food) => {
  if (!res[food.section]) {
    res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});
