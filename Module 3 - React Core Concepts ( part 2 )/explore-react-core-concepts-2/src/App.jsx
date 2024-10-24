import "./App.css";
import Counter from "./Counter";
import Team from "./Team";
import Users from "./Users";
import Friends from "./Friends";

function App() {
  function handleClick() {
    alert("Button clicked");
  }

  //arrow function
  const handleClick2 = () => {
    alert("Button 2 clicked");
  };

  const addToFive = (num) => {
    alert(num + 5);
  };

  return (
    <>
      <h3>React Core concepts</h3>
      <Friends></Friends>

      <Users></Users>

      <Team></Team>

      <Counter></Counter>

      <button onClick={handleClick}>Click Me</button>

      <button onClick={handleClick2}>Click 2</button>

      <button
        onClick={() => {
          alert("Third button");
        }}
      >
        Third Button
      </button>

      {/* Parameter patabar way  normally addToFive(3) call korte parbana*/}
      <button onClick={() => addToFive(3)}>Add five</button>
    </>
  );
}

export default App;
