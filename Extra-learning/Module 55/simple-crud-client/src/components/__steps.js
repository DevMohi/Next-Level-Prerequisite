/*
1. Mongodb connectiion
-> create account
-> create an user with password
-> whitelist IP address 
-> database > connect > driver > Node -> show all code 
-> change the password the uri 


-> Create -> post
-> Make the function async and use awit to use it 
-> Make sure you use the express.jsoN() middleware 
-> access data dfrom the body const user = req.body
-> const result = await userCollection.insertOne(user);
-> res.send(result);


Client 
-> create fetch, add second param as an object, 
provide method and add headers , and body should be stringified

READ
-> create a cursor = userCollection.find();
const result = awair curSor.toArray();

DELETE 
-> create app.delete('/users/:id) => get this as params in backend
=> const query = {_id : new ObjectId(id)}
const result = await userCollection.deleteOne(query)


Client 
-> create dynamic url with id 
* */