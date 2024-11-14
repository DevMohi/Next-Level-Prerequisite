const express = require("express");

//creating an express instance
const app = express();

app.get("/home", (req, res) => {
  res.sendFile(__dirname + "/index.html");
});

app.get('/create-post', (req,res ) => {
    
})

app.listen(5000, () => {
  console.log("Server is listening");
});
