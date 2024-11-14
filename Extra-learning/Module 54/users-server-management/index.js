const express = require("express");
const app = express();
const port = process.env.PORT || 5000;
const cors = require("cors");

//middleware 
app.use(cors());
app.use(express.json());

const users = [
  { id: 1, name: "shabana", email: "shabana@gmail.com" },
  { id: 2, name: "sabila", email: "sabila@gmail.com" },
];

app.get("/", (req, res) => {
  res.send("Hello world");
});

app.get("/users", (req, res) => {
  res.send(users);
});

app.post('/users', (req, res) => {
    console.log((req.body));
    const newUser = req.body;
    newUser.id = users.length + 1;
    users.push(newUser);
    // console.log(newUser) 
    res.send(newUser);
})

app.listen(port, () => {
  console.log("Server is running");
});
