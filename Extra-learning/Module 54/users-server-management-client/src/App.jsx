import { useState } from "react";

import "./App.css";
import { useEffect } from "react";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/users")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const handleForm = (e) => {
    e.preventDefault();
    // const name = e.target.name.value;
    // const email = e.target.email.value;

    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const users = { name, email };
    console.log(users);

    fetch("http://localhost:5000/users", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(users),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        const newUser = [...users, data];
        setUsers(newUser);
        form.reset();
      });
  };

  return (
    <>
      <h1>Users Management</h1>
      <h3>Number of users : {users.length}</h3>
      <form onSubmit={handleForm}>
        <input type="text" name="name" placeholder="Your name" />
        <br />
        <input type="email" name="email" placeholder="Your email" />
        <br />
        <input type="submit" value="submit" />
        <br />
      </form>

      <div>
        {users.map((user) => (
          <p key={user.id}>
            {user.id} : {user.name}
          </p>
        ))}
      </div>
    </>
  );
}

export default App;
