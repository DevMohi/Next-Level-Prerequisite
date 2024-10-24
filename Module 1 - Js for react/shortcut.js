// '' , 0 , false , null ,undefined ->  falsy value
// 'almas' , 5, true, { } , []  -> Truthy value

const myVar = 5;
if (myVar) {
  myVar * 100;
} else {
  myVar = 0;
}

//ternary
const money = 80;
let food = money > 100 ? "Biryani" : "Cha";
console.log(food);

// Number to string conversion
const num1 = 52;
const num1String = 52 + ' ';
console.log(num1);

//string to number
const input = "560";
const inputNum = +input;
console.log(inputNum);
