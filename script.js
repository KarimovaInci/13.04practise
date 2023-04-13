/*
const countries = ["Finland", "Sweden", "Denmark", "Norway", "Iceland"];
const names = ["Asabeneh", "Mathias", "Elias", "Brook"];
const numbers = [1, 2, 5, 8, 12, 20, 11];
const products = [
  { product: "banana", price: 3 },
  { product: "mango", price: 6 },
  { product: "potato", price: " " },
  { product: "avocado", price: 8 },
  { product: "coffee", price: 10 },
  { product: "tea", price: " " },
];
*/

//Use reduce to concatenate all the countries and to produce this sentence:
//Estonia, Finland, Sweden, Denmark, Norway, and IceLand are north European countries\\
/*
let sum=" "
let item=countries.reduce((a,b)=>sum+=b)
console.log(sum)
*/

//Use reduce to sum all the numbers in the numbers array.
/*
let sum= numbers.reduce((acc,value)=>{
    return acc+value
})
console.log(sum);
*/

//Use filter to filter out country start with 'E';
/*
const letter=countries.filter(item=>item[0]=='D')
console.log(letter);
*/

//Use filter to filter out countries having six character.
/*
const character=countries.filter(item=>item.length==6);
console.log(character);
*/

//Use filter to filter out countries containing land.
/*
const items=countries.filter(item=>item.includes('land'));
console.log(items);
*/

//Use map to map the products array to its corresponding prices.
/*
const items= products.filter(item => item.price!==" ");
console.log(items);
*/

//1.Use map to create a new array by changing each country to uppercase in the countries array.
/*
const country = countries.map(item => item.toUpperCase());
console.log(country)
*/

//2.Use map to create an array of countries length from countries array.
/*
const length=countries.map (item=>item.length);
console.log(length);
*/

//3Use map to create a new array by changing each number to square in the numbers array
/*
const pow = numbers.map((item) => item * item);
console.log(pow);
*/

//4Use map to change to each name to uppercase in the names array
/*
const name=names.map(item => item.toUpperCase());
console.log(name);
*/

let arr = [1, 2, 3, -4, -5, 6];

const items= arr.map(element=> element*(-1));
console.log (arr)