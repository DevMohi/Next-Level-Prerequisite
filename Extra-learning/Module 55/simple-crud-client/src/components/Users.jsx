import { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

const Users = () => {
  const loadedUsers = useLoaderData();
  const [users, setUsers] = useState(loadedUsers);
  const handleDeleteUser = (id) => {
    console.log(id);

    fetch(`http://localhost:5000/users/${id}`, {
      method: "DELETE",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.deletedCount > 0) {
          alert("Users deleted succesfully");
          const remaining = users.filter((user) => user._id !== id);
          setUsers(remaining);
        }
      });
  };

  return (
    <div>
      <h3>{users.length}</h3>
      <h4>Hello world</h4>

      <div>
        {users.map((user) => (
          <p key={user._id}>
            {user.name} : {user.email} <Link to = {`/update/${user._id}`}> <button>Update</button></Link>
            <button onClick={() => handleDeleteUser(user._id)}>X</button>
          </p>
        ))}
      </div>
    </div>
  );
};

export default Users;
