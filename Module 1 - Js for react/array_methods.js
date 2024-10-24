//Map , forEach, filter and find

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

//Array of objects

//Map by specific item - ekta propery ke  nie ekta banaite hoile map korba
const brands = products.map((product) => product.brand);
const price = products.map((product) => product.price); 
// console.log(brands);
// console.log(price);

// For loop use korba jkn ekta return dorkar nai  , you can use it for single property also

products.forEach((product) => console.log(product));
products.forEach((product) => console.log(product.color));

products.forEach((product) => {});

//Filter - returns an array
const cheap = products.filter((product) => product.price <= 5000);
// console.log(cheap); 

const specificName = products.filter((p) => p.name.includes("n"));
console.log(specificName);

//find - only returns the first product 
const special = products.find(p => p.name.includes('n')); 
