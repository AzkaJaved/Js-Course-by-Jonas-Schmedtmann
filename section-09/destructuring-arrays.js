const restaurant = {
  name: "Classico Italiano",
  location: "Via Angelo Tavanti 23, Firenze , Italy",
  categories: ["Italian", "Pizzeria", "Vegetarian", "Organic"],
  starterMenu: ["Focaccia", "Bruschetta", "Garlic", "Bread", "Caprese salad"],
  mainMenu: ["Pizza", "Pasta", "Riosotto"],
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
};
//destructuring arrays means to retrieve the array elements and store them into the variables in an easy way.
// with destructuring original array is not affected at all
const [first, second] = restaurant.categories;
console.log("first, second element of categories array :", first, second);
const [f, , third, fourth] = restaurant.categories;
console.log("first, second element of categories array :", third, fourth);

const arr = [1, 2, 3];
const a = arr[0];
const b = arr[1];
const c = arr[2];
console.log("arr : ", a, b, c);
const [x, y, z] = arr;
console.log("arr...", x, y, z);
let [main, secondary] = restaurant.categories;
console.log("1 : main :", main, " secondary :", secondary);
//now we want to switch the value of main and secondary
[main, secondary] = [secondary, main];
console.log("2 : main :", main, " secondary :", secondary);
//if there was no destructuring then we have to do this manually
console.log("3 : main :", main, " secondary :", secondary);
let temp = main;
main = secondary;
secondary = temp;
console.log("4 : main :", main, " secondary :", secondary);

//receive 2 return values from a function
const [starter, mainCourse] = restaurant.order(2, 0);
console.log("starter:", starter, "mainCourse:", mainCourse);

//nested destructuring
const nested = [2, 3, [4, 5]];
const [one, , nestedArray] = nested;
console.log(nestedArray);
const [i, , [j, k]] = nested;
console.log("i, j, k : ", i, j, k);

//default values
const [p = 1, q = 1, r = 1] = [7, 8];
console.log("p, q, r : ", p, q, r);
