const person = {
  name: "John",
  prof: "Surgeon",
  age: 30,
  address: "Shahbag",
};

//dot notaion
const profession = person.prof;

//bracket notation
const prof2 = person["prof"];
console.log(prof2);

//variable way
const pName = "prof";
const prof3 = person[pName];
console.log(prof3);
