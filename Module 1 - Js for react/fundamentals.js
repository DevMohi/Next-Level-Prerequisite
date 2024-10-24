//How to declare a variable using let and const 

const fathersName = 'Arnold';

let season = 'rainy';
season = 'winter';

// 6 basic Condition >,<. === , !== ,  <= , >=
// multiple conditions : && , || 


//3. Array 
//index
//length , push 
const numbers = [89,40,50,60,20];
numbers[0] = 56;


//4 . for loop
for(let i =0; i<numbers.length; i++){
    const number = numbers[i];
    console.log(number); 
}


//function

function multiply (num1, num2){
    const result = num1 * num2;
    return result;
}

const output = multiply(35,78);


//Object 
// 3 ways to access object properties
const student = {
    name: 'Sakib khan',
    age: '32',
    movies: ['king khan', 'dhakar mastan']
}

const myVariable = 'age';

console.log(student.age); //direct by property
console.log(student['age']); //direct via property name string 
console.log(student[myVariable]) // access via property name in a string 



