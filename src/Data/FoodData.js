export const foodItems =[
    {
        name: 'Veggi Pizza',
        img: '/img/pizza1.jpeg',
        section: 'Pizza'
    },
    {
        name: 'Hawaii Pizza',
        img: '/img/pizza2.jpeg',
        section: 'Pizza'
    },
    {
        name: 'Square Pizza',
        img: '/img/squrePizza.jpeg',
        section: 'Pizza'
    },
    {
        name: 'Pepperoni Pizza',
        img: '/img/Pizza3.jpeg',
        section: 'Pizza'
    },
    {
        name: 'Spicy Fried',
        img: '/img/frenchfried.jpeg',
        section: 'Snack'
    },
    {
        name: 'French Fried',
        img: '/img/friedAndFried.jpeg',
        section: 'Snack'
    },
    {
        name: 'Burger Original',
        img: '/img/burger.jpeg',
        section: 'Burger'
    },
    {
        name: 'Burger Spicy',
        img: '/img/BurgerSpicy.jpeg',
        section: 'Burger'
    }
];

//เลือกเอาแต่ section ของfooditems เอามาreduce [{section: Burger},{section: Pizza}]
export const foods = foodItems.reduce((res,food) => {
 if(!res[food.section]){
     res[food.section] = [];
 }
     res[food.section].push(food);
     return res;
}, {})