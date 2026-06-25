//import { add, minus, multiply, divide,pp } from "./math.js";

// import * as Math from"./math.js";
// const a = 8;
// const b = 9;

// console.log(`${a} + ${b} =  ${add(a,b)}`);
// console.log(`${a} - ${b} =  ${minus(a, b)}`);
// console.log(`${a} * ${b} =  ${multiply(a, b)}`);
// console.log(`${a} / ${b} =  ${divide(a, b)}`);
// console.log(`${a} % ${b} =  ${pp(a, b)}`);

// import * as Math from "./math.js";
// const a = 8;
// const b = 9;

// console.log(`${a} + ${b} =  ${Math.add(a, b)}`);
// console.log(`${a} - ${b} =  ${Math.minus(a, b)}`);
// console.log(`${a} * ${b} =  ${Math.multiply(a, b)}`);
// console.log(`${a} / ${b} =  ${Math.divide(a, b)}`);
// console.log(`${a} % ${b} =  ${Math.pp(a, b)}`);

import "dotenv/config";

const port = process.env.PORT;
const name = process.env.NAME;

console.log(port);
console.log(name);
console.log(process.env.SECRET_KEY);