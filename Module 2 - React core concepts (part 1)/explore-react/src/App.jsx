/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import "./App.css";
import Todo from "./Todo";
import Actor from "./Actor";
import Singer from "./Singer";

function App() {

  const actors = ['Sakib', 'Raj' , 'Jasim']; 

  //Aigulo array of object
  const singers = [
    {id: 1 , name : 'Dr mahfuz' , age : 68},
    {id: 2 , name : 'Rajib', age  : 48}
  ]

  return (
    <>
      <h3>Vite + React</h3>

      {/* //For obejcts  */}

      {
        // eslint-disable-next-line react/jsx-key
        singers.map(singer => <Singer singer = {singer}></Singer>)
      }

      {
        // eslint-disable-next-line react/jsx-key
        actors.map(actor => <Actor name = {actor}></Actor>)
      }
      {/* <Todo task="Learn React" isDone={true}></Todo>
      <Todo task="Explore Core Concepts" isDone={true}></Todo>
      <Todo task="Try JSX" isDone={false}></Todo> */}
      {/* <Device name = "laptop" price = "55" ></Device>
      <Device name = "mobile" price = "17000" ></Device>
      <Person></Person>
      <Student grade = "7" score = "99" ></Student>
      <Student grade = "100" score = "999" ></Student>
      <Developer></Developer> */}
    </>
  );
}

//Props mane properties and aigulo object hishebe ashe
function Device(props) {
  // console.log(props);
  return (
    <h2>
      {" "}
      This device: {props.name} price: {props.price}
    </h2>
  );
}

function Person() {
  const age = 25;
  const money = 20;
  const student = {
    name: "Modi",
    age: 12,
  };
  return (
    <h3>
      I am a {student.name} with age: {age + money}
    </h3>
  );
}

// eslint-disable-next-line react/prop-types
//Default value o set kora jai
function Student({ grade = 1, score = 0 }) {
  console.log(grade, score);
  return (
    <div className="student">
      <h3>This is a student</h3>
      <p>Scre: {score} </p>
      <p>Grade : {grade}</p>
    </div>
  );
}

function Developer() {
  const developerStyle = {
    margin: "20px",
    padding: "20px",
    border: "2px solid purple",
    borderRadius: "10px",
  };
  return (
    <div style={developerStyle}>
      <h5>Devo devbo</h5>
      <p>Coding: </p>
    </div>
  );
}

export default App;
