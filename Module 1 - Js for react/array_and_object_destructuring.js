//1. array destructuring
const numbers = [42, 65];
const [x, y] = [42, 65];
console.log(x, y);

function boxify(num1, num2) {
  const nums = [num1, num2];
  return nums;
}

// console.log(boxify(90, 34));

const [first, second] = boxify(90, 34);
console.log(first, second);

const student = {
  name: "Sakib khan",
  age: "32",
  movies: ["king khan", "dhakar mastan"],
};

const [firstMovie, secondMovie] = student.movies;

//Object destructuring
// const {name, age} = {name:'alu',age:14};
const { name, age } = { id: 12, name: "alu", salary: 210, age: 14 };
console.log(name, age); 
