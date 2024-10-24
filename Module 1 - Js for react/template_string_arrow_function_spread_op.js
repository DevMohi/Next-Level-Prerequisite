//Template string, spread operator, arrow function
//es6

const numbers = [89, 40, 50, 60, 20];
const student = {
  name: "Sakib khan",
  age: "32",
  movies: ["king khan", "dhakar mastan"],
};

const about = `My Name is ${student.name}  age of ${student.age} has number ${numbers[2]} also liked movies ${student.movies[0]}`;
console.log(about);

//Arrow function that has no parameter

const getfifty = () => 55; //with no parameter

const addSixty = (num) => num + 65; //with parameter

const isEven = (x) => x % 2 == 0;
const addThree = (x, y, z) => x + y + z;

//Multi line arrow function -> return dite hoi
const doMath = (num1, num2) => {
  const sum = num1 + num2;
  return sum;
};

//Spread operator  - copy banaite chai orignal tar and add without changing the orignal array
const newNumbers = [...numbers];
numbers.push(99);
console.log(newNumbers);
console.log(numbers);

//Create a new array from an older array and add an element
const currentNumbers = [...numbers, 55]; //55 add korsi
currentNumbers.push(20);
console.log(numbers);
console.log(currentNumbers);
