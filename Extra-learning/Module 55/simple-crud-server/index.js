const express = require("express");
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const cors = require("cors");
const app = express();

const port = process.env.PORT || 5000;

// Middlewares
app.use(cors());
app.use(express.json());

// MongoDB URI with credentials
// const uri ="mongodb+srv://dbUser:dbUserPass@cluster0.yhsiw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
const uri = "mongodb://localhost:27017/";

// Create a MongoClient with options
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
  // tls: true, // Ensures TLS/SSL is used 
  // tlsAllowInvalidCertificates: true, // For testing; remove in production 
});

async function run() {
  try {
    // Connect the client to the server (optional starting in v4.7)
    await client.connect();

    const database = client.db("usersDB");
    //Jodi collection na pai it will create one
    const usersCollection = database.collection("users");

    //Get
    app.get("/users", async (req, res) => {
      const cursor = usersCollection.find();
      const result = await cursor.toArray();
      res.send(result);
    });

    //Find a single document with query
    app.get("/users/:id", async (req, res) => {
      const id = req.params.id;
      const query = { _id: new ObjectId(id) };
      const result = await usersCollection.findOne(query);
      res.json(result);
    });

    //Post
    app.post("/users", async (req, res) => {
      const user = req.body;
      console.log("new user", user);
      const result = await usersCollection.insertOne(user);
      res.send(result);
    });

    //Put - thakle update korbe ar naile insert korbe
    app.put("/users/:id", async (req, res) => {
      const id = req.params.id;
      const user = req.body;
      console.log(user);
      const filter = { _id: new ObjectId(id) };
      const options = { upsert: true };
      const updatedUser = {
        $set: {
          name: user.name,
          email: user.email,
        },
      };
      const result = await usersCollection.updateOne(
        filter,
        updatedUser,
        options
      );
      res.send(result);
    });

    //Delete

    app.delete("/users/:id", async (req, res) => {
      const id = req.params.id;
      console.log("please delte from database", id);
      const query = { _id: new ObjectId(id) };
      const result = await usersCollection.deleteOne(query);
      res.send(result);
    });

    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
  } finally {
    // Keep the connection open for CRUD operations
    // If you want to close the connection, use `await client.close();`
  }
}
run().catch(console.dir);

// Basic route for testing
app.get("/", (req, res) => {
  res.send("Hello World, this is CRUD");
});

app.listen(port, () => {
  console.log(`Simple CRUD server is running on port ${port}`);
});
