// JSON => stringify / parse
const student = {
  name: "Sakib khan",
  age: "32",
  movies: ["king khan", "dhakar mastan"],
};

//Stringify to JSON
const studentJSON = JSON.stringify(student);

//JSON to object
const studentObj = JSON.parse(studentJSON);

// console.log(student);
// console.log(studentJSON);
// console.log(studentObj);

//2. fetch kore jei response ta ashbe oita res.json() e call korte hobe

// fetch("url")
//   .then((res) => res.json())
//   .then((data) => console.log(data));

// keys, values

// aita die shudu keys gulo paba
const keys = Object.keys(student);

//Shudu value pawar jnno from an object
const values = Object.values(student);

console.log(keys);
console.log(values);

//for

const numbers = [23, 45, 64];

numbers.forEach((number) => console.log(number));
//return paite chaile use map 

// array like object er jnno use for of  
// loop on an object using for in 



const products = [
    {
      name: "laptop",
      price: 3200,
      brand: "lenovo",
      color: "silver",
    },
    {
      name: "phone",
      price: 7200,
      brand: "iphone",
      color: "goldem",
    },
    {
      name: "watch",
      price: 5000,
      brand: "casio",
      color: "yellow",
    },
  ];


  // add or remove from an array 

  const newProduct = {name: 'webcam', price: 700, brand: 'lal'};

// copy products array and then addnew product

const newProducts = [...products , newProduct];
// console.log(newProducts);  

//create a new array without one specific item - remove phone means create a new array without the phone 
const remaining = products.filter(product => product.name !== 'phone');
console.log(remaining); 
