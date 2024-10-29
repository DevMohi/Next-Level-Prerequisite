import { Link, useNavigate } from "react-router-dom";

const User = ({ user }) => {
  const { id, name, username, email } = user;

  //useNavigate
  const navigate = useNavigate();
  const handleShowDetail = () => {
    navigate(`/user/${id}`);
  };

  const userStyle = {
    border: "2px solid yellow",
    padding: "5px",
    borderRadius: "20px",
  };
  return (
    <div style={userStyle}>
      <h3>Name: {name}</h3>
      <h3>UserName: {username}</h3>
      <h4>Email : {email}</h4>
      <Link to={`/user/${id}`}>
        <button>Click Me</button>
      </Link>
      <button onClick={handleShowDetail}>Click to see details</button>
    </div>
  );
};

export default User;
