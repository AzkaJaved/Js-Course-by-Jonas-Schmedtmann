const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze , Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic", "Bread", "Caprese salad"],
  mainMenu: ["Pizza", "Pasta", "Riosotto"],
  openingHours: {
    thu: { open: 12, close: 22 },
    fri: { open: 11, close: 23 },
    sat: { open: 0, close: 24 },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  //destructured the object argument right here
  orderDelivery: function ({ time, address, starterIndex, mainIndex }) {
    console.log(
      `order received at ${time} , ordered ${this.starterMenu[starterIndex]},${this.mainMenu[mainIndex]} will be delivered to the ${address} `
    );
  },
};
restaurant.orderDelivery({
  time: "22:00",
  address: "via del sole",
  mainIndex: 2,
  starterIndex: 2,
});
//in objects the order of the elements does not matter
//write variable name that exactly match the property names of the objects to be destructured.
const { categories, location } = restaurant;
console.log(categories, location);
//you can rename the variable ,
const { name: restaurantName } = restaurant;
console.log(restaurantName);

//default values
const { menu = [], starterMenu: starters = [] } = restaurant;
console.log(menu, starters);

//mutating variables
let a = 111;
let b = 999;
const obj = { a: 23, b: 7, c: 14 };
//here we can not use let because it will then create two new variables
({ a, b } = obj);
console.log(a, b);
//nested objects
const { openingHours } = restaurant;
console.log(openingHours);
const { fri } = openingHours;
console.log(fri);
const {
  fri: { open, close },
} = openingHours;
console.log(open, close);
