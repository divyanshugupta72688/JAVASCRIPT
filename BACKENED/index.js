/*
===========================================================
       NODE.JS + EXPRESS.JS + MONGODB NOTES
       SIMPLE LANGUAGE + INTERVIEW QUESTIONS
===========================================================

This file covers:

1. Node.js
2. NPM
3. Modules
4. File System
5. HTTP Server
6. REST API
7. Express.js
8. Middleware
9. Routing
10. Request / Response
11. CRUD API
12. Error Handling
13. Authentication Basics
14. MongoDB
15. MongoDB CRUD
16. Mongoose
17. Schema
18. Model
19. Relationships
20. MongoDB Interview Questions
21. Express Interview Questions
22. Node.js Interview Questions

===========================================================
*/


/*
===========================================================
1. WHAT IS NODE.JS?
===========================================================

Node.js is a JavaScript runtime.

It allows us to run JavaScript outside the browser.

Normally:

Browser
   ↓
JavaScript


With Node.js:

Computer/Server
      ↓
   Node.js
      ↓
 JavaScript


Example:

console.log("Hello Node.js");

Run:

node app.js


INTERVIEW QUESTION:

Q. What is Node.js?

Answer:

Node.js is a JavaScript runtime environment built on the
V8 JavaScript engine that allows JavaScript to run outside
the browser, especially on servers.
*/


/*
===========================================================
2. WHY DO WE USE NODE.JS?
===========================================================

Node.js is commonly used for:

1. Backend development
2. REST APIs
3. Real-time applications
4. Web servers
5. File handling
6. Database applications
7. Microservices


INTERVIEW QUESTION:

Q. Why is Node.js popular?

Answer:

Node.js allows developers to use JavaScript on both the
frontend and backend. It also provides an asynchronous,
event-driven model that is useful for I/O-heavy applications.
*/


/*
===========================================================
3. V8 ENGINE
===========================================================

V8 is the JavaScript engine developed by Google.

Chrome uses V8.

Node.js also uses V8 to execute JavaScript.

Basic flow:

JavaScript
    ↓
V8 Engine
    ↓
Machine Code


INTERVIEW QUESTION:

Q. Which JavaScript engine does Node.js use?

Answer:

Node.js uses Google's V8 JavaScript engine.
*/


/*
===========================================================
4. NODE.JS IS SINGLE-THREADED
===========================================================

Node.js uses a single main JavaScript thread.

It uses an event-driven, non-blocking architecture to
handle many I/O operations efficiently.


IMPORTANT:

Single-threaded does NOT mean Node.js can handle only one
request at a time.

Its asynchronous architecture allows it to handle many
I/O operations efficiently.


INTERVIEW QUESTION:

Q. Is Node.js single-threaded?

Answer:

The main JavaScript execution in Node.js is single-threaded,
but Node.js can use the operating system and its underlying
libraries to handle asynchronous I/O and certain operations
outside that main thread.
*/


/*
===========================================================
5. SYNCHRONOUS VS ASYNCHRONOUS
===========================================================

Synchronous:

One operation waits for another operation to finish.


Asynchronous:

A long-running I/O operation can be started without
blocking the main JavaScript execution.


Example:

console.log("Start");

setTimeout(() => {
    console.log("Async task");
}, 2000);

console.log("End");


Output:

Start
End
Async task
*/


/*
===========================================================
6. BLOCKING VS NON-BLOCKING
===========================================================

Blocking:

The next code waits until the current operation finishes.


Non-blocking:

The program can continue while an I/O operation is
being handled asynchronously.


INTERVIEW QUESTION:

Q. Why is non-blocking I/O important in Node.js?

Answer:

It allows Node.js to continue handling other work while
I/O operations are waiting to complete.
*/


/*
===========================================================
7. NPM
===========================================================

NPM = Node Package Manager.

It is used to:

1. Install packages
2. Manage dependencies
3. Run scripts
4. Publish packages


Common commands:

npm init

npm init -y

npm install express

npm uninstall express

npm install


INTERVIEW QUESTION:

Q. What is npm?

Answer:

npm is the package manager commonly used with Node.js
for installing and managing JavaScript packages.
*/


/*
===========================================================
8. package.json
===========================================================

package.json contains project information and configuration.

It can contain:

name
version
scripts
dependencies
devDependencies


Example:

{
    "name": "my-app",
    "version": "1.0.0",
    "scripts": {
        "start": "node app.js"
    }
}


INTERVIEW QUESTION:

Q. What is package.json?

Answer:

package.json is a configuration file that describes a
Node.js project, including metadata, scripts and package
dependencies.
*/


/*
===========================================================
9. node_modules
===========================================================

node_modules contains installed packages.

Example:

npm install express

This creates:

node_modules/


IMPORTANT:

Usually we don't upload node_modules to GitHub.

Instead we upload:

package.json
package-lock.json


Then another developer runs:

npm install


===========================================================
*/


/*
===========================================================
10. MODULES
===========================================================

Modules allow us to divide code into multiple files.

There are two common module systems:

1. CommonJS
2. ES Modules
*/


/*
COMMONJS

math.js
*/


function add(a, b) {

    return a + b;

}

module.exports = add;


/*
app.js

const add = require("./math");

console.log(add(10, 20));


-----------------------------------------------------------

ES MODULES

math.js

export function add(a, b) {

    return a + b;

}


app.js

import { add } from "./math.js";

console.log(add(10, 20));


INTERVIEW QUESTION:

Q. Why do we use modules?

Answer:

Modules help divide code into smaller reusable files and
make large applications easier to maintain.
*/


/*
===========================================================
11. CORE MODULES
===========================================================

Node.js provides built-in modules.

Examples:

fs
path
http
os
events
url


Example:

const fs = require("fs");

const path = require("path");

const os = require("os");


These modules do not normally require npm installation.
*/


/*
===========================================================
12. FILE SYSTEM MODULE
===========================================================

fs module is used to work with files.
*/


const fs = require("fs");


// Write file

fs.writeFileSync(
    "example.txt",
    "Hello Node.js"
);


// Read file

const data = fs.readFileSync(
    "example.txt",
    "utf-8"
);

console.log(data);


/*
IMPORTANT:

writeFileSync()
readFileSync()

are synchronous operations.

Node.js also provides asynchronous versions such as:

fs.writeFile()
fs.readFile()


INTERVIEW QUESTION:

Q. What is fs module?

Answer:

fs is Node.js's built-in File System module used to
create, read, write, update and delete files.
*/


/*
===========================================================
13. PATH MODULE
===========================================================

path module helps work with file and directory paths.
*/


const path = require("path");

console.log(
    path.join(
        __dirname,
        "public",
        "index.html"
    )
);


/*
Useful methods:

path.join()
path.resolve()
path.basename()
path.dirname()
path.extname()


INTERVIEW QUESTION:

Q. Why use path module?

Answer:

It provides utilities for working with file and directory
paths in a platform-independent way.
*/


/*
===========================================================
14. HTTP MODULE
===========================================================

Node.js provides a built-in http module to create servers.
*/


const http = require("http");


const server = http.createServer(
    (req, res) => {

        res.writeHead(200, {
            "Content-Type": "text/plain"
        });

        res.end("Hello Server");

    }
);


// server.listen(3000);


/*
Open:

http://localhost:3000


INTERVIEW QUESTION:

Q. How can you create a server in Node.js?

Answer:

We can use Node.js's built-in http module and
http.createServer().
*/


/*
===========================================================
15. EXPRESS.JS
===========================================================

Express.js is a lightweight web framework for Node.js.

It makes backend development easier.

Express helps with:

1. Routing
2. Middleware
3. Request handling
4. Response handling
5. REST APIs
6. Error handling


Install:

npm install express


Example:
*/


const express = require("express");

const app = express();


app.get("/", (req, res) => {

    res.send("Hello Express");

});


// app.listen(3000);


/*
INTERVIEW QUESTION:

Q. What is Express.js?

Answer:

Express.js is a web framework for Node.js used to build
web servers and APIs more easily.
*/


/*
===========================================================
16. EXPRESS SERVER
===========================================================
*/


const expressApp = express();


// expressApp.listen(3000, () => {

//     console.log("Server running");

// });


/*
Typical structure:

const express = require("express");

const app = express();

app.get("/", (req, res) => {

    res.send("Hello");

});

app.listen(3000);


===========================================================
*/


/*
===========================================================
17. ROUTING
===========================================================

Routing means deciding how the server responds to a
specific URL and HTTP method.
*/


app.get("/", (req, res) => {

    res.send("Home Page");

});


app.get("/about", (req, res) => {

    res.send("About Page");

});


app.post("/users", (req, res) => {

    res.send("Create User");

});


/*
Common HTTP methods:

GET
POST
PUT
PATCH
DELETE


INTERVIEW QUESTION:

Q. What is routing?

Answer:

Routing defines how an application responds to requests
for different URLs and HTTP methods.
*/


/*
===========================================================
18. HTTP METHODS
===========================================================

GET

Used to retrieve data.


POST

Used to create new data.


PUT

Usually used to replace/update a complete resource.


PATCH

Used to partially update a resource.


DELETE

Used to delete data.
*/


/*
Example REST API:

GET     /users
POST    /users
GET     /users/:id
PUT     /users/:id
PATCH   /users/:id
DELETE  /users/:id
*/


/*
===========================================================
19. REQUEST AND RESPONSE
===========================================================

req = request from client

res = response from server
*/


app.get("/user", (req, res) => {

    console.log(req);

    res.send("User Data");

});


/*
INTERVIEW QUESTION:

Q. What are req and res in Express?

Answer:

req contains information about the incoming request.

res is used to send a response back to the client.
*/


/*
===========================================================
20. JSON RESPONSE
===========================================================*/


app.get("/api/user", (req, res) => {

    res.json({

        name: "Divyanshu",
        age: 22

    });

});


/*
===========================================================
21. STATUS CODE
===========================================================

HTTP status codes tell the client what happened.

Common codes:

200 -> Success
201 -> Created
400 -> Bad Request
401 -> Unauthorized
403 -> Forbidden
404 -> Not Found
500 -> Internal Server Error
*/


app.get("/success", (req, res) => {

    res.status(200).json({

        message: "Success"

    });

});


/*
===========================================================
22. EXPRESS MIDDLEWARE
===========================================================

Middleware is a function that runs during the request-
response cycle.

Basic structure:

(req, res, next)


Example:
*/


app.use((req, res, next) => {

    console.log("Middleware executed");

    next();

});


/*
next():

Moves the request to the next middleware/route handler.


INTERVIEW QUESTION:

Q. What is middleware?

Answer:

Middleware is a function that has access to the request,
response and next function and can perform work before
the final response is sent.
*/


/*
===========================================================
23. TYPES OF MIDDLEWARE
===========================================================

1. Application-level middleware
2. Router-level middleware
3. Built-in middleware
4. Third-party middleware
5. Error-handling middleware


Examples:

express.json()

express.urlencoded()

custom middleware

cors

morgan


===========================================================
*/


/*
===========================================================
24. express.json()
===========================================================

express.json() parses incoming JSON request bodies.
*/


app.use(express.json());


/*
Now a client can send:

{
    "name": "Divyanshu",
    "age": 22
}


Then:

req.body


can contain the parsed object.
*/


app.post("/user", (req, res) => {

    console.log(req.body);

    res.json(req.body);

});


/*
===========================================================
25. ROUTE PARAMETERS
===========================================================

Route parameter is a dynamic part of URL.
*/


app.get("/users/:id", (req, res) => {

    console.log(req.params.id);

    res.send(
        `User ID: ${req.params.id}`
    );

});


/*
URL:

/users/101

req.params.id

Output:

101
*/


/*
===========================================================
26. QUERY PARAMETERS
===========================================================

Query parameters are usually used for filtering,
searching, sorting etc.


Example URL:

/users?name=Divyanshu&age=22


Access:

req.query
*/


app.get("/search", (req, res) => {

    console.log(req.query);

    res.json(req.query);

});


/*
===========================================================
27. PARAMS VS QUERY
===========================================================

PARAMS:

/users/101

req.params.id


QUERY:

/users?id=101

req.query.id


INTERVIEW QUESTION:

Q. Difference between req.params and req.query?

Answer:

req.params is used for route parameters.

req.query is used for query-string parameters.
*/


/*
===========================================================
28. REQUEST BODY
===========================================================

Body contains data sent by the client.

Example:

POST /users

{
    "name": "Divyanshu",
    "age": 22
}


Access:

req.body
*/


/*
===========================================================
29. EXPRESS ROUTER
===========================================================

Router helps organize routes into separate files.
*/


const router = express.Router();


router.get("/", (req, res) => {

    res.send("All Users");

});


router.get("/:id", (req, res) => {

    res.send(
        `User ${req.params.id}`
    );

});


/*
Then:

app.use("/users", router);


Now:

GET /users
GET /users/:id


INTERVIEW QUESTION:

Q. Why use Express Router?

Answer:

It helps organize related routes into separate modules and
keeps the application easier to maintain.
*/


/*
===========================================================
30. ERROR HANDLING IN EXPRESS
===========================================================

Error-handling middleware has four parameters:

err
req
res
next
*/


app.use((err, req, res, next) => {

    console.log(err);

    res.status(500).json({

        message: "Something went wrong"

    });

});


/*
INTERVIEW QUESTION:

Q. How is error middleware different?

Answer:

Express error-handling middleware uses four parameters:

(err, req, res, next)
*/


/*
===========================================================
31. REST API
===========================================================

REST = Representational State Transfer.

REST API allows clients and servers to communicate using
HTTP methods and resources.


Example:

GET    /products
POST   /products
GET    /products/10
PUT    /products/10
DELETE /products/10


INTERVIEW QUESTION:

Q. What is REST API?

Answer:

A REST API is an HTTP-based API designed around resources,
HTTP methods and standard representations such as JSON.
*/


/*
===========================================================
32. CRUD
===========================================================

CRUD means:

C -> Create
R -> Read
U -> Update
D -> Delete


Example:

CREATE -> POST
READ   -> GET
UPDATE -> PUT/PATCH
DELETE -> DELETE
*/


/*
===========================================================
33. SIMPLE CRUD API
===========================================================

Example data:
*/


let users = [

    {
        id: 1,
        name: "Divyanshu"
    },

    {
        id: 2,
        name: "Ayush"
    }

];


/*
READ
*/


app.get("/users", (req, res) => {

    res.json(users);

});


/*
CREATE
*/


app.post("/users", (req, res) => {

    const newUser = {

        id: users.length + 1,

        name: req.body.name

    };

    users.push(newUser);

    res.status(201).json(newUser);

});


/*
UPDATE
*/


app.put("/users/:id", (req, res) => {

    const id = Number(req.params.id);

    const user = users.find(
        user => user.id === id
    );

    if (!user) {

        return res.status(404).json({
            message: "User not found"
        });

    }

    user.name = req.body.name;

    res.json(user);

});


/*
DELETE
*/


app.delete("/users/:id", (req, res) => {

    const id = Number(req.params.id);

    users = users.filter(
        user => user.id !== id
    );

    res.json({

        message: "User deleted"

    });

});


/*
===========================================================
34. WHAT IS MONGODB?
===========================================================

MongoDB is a NoSQL database.

It stores data in document format.

Instead of:

Tables + Rows + Columns

MongoDB uses:

Database
   ↓
Collections
   ↓
Documents


Example document:

{
    name: "Divyanshu",
    age: 22,
    city: "Delhi"
}


INTERVIEW QUESTION:

Q. What is MongoDB?

Answer:

MongoDB is a document-oriented NoSQL database that stores
data in flexible BSON documents.
*/


/*
===========================================================
35. SQL VS MONGODB
===========================================================

SQL:

Database
 ↓
Tables
 ↓
Rows


MongoDB:

Database
 ↓
Collections
 ↓
Documents


SQL example:

users table


MongoDB:

users collection


INTERVIEW QUESTION:

Q. Difference between SQL and MongoDB?

Answer:

Relational databases organize data into tables with defined
relationships, while MongoDB stores data as flexible
documents inside collections.
*/


/*
===========================================================
36. DOCUMENT
===========================================================

MongoDB stores data in documents.

Example:

{
    "_id": "123",
    "name": "Divyanshu",
    "age": 22
}


A document is similar to a JavaScript object in structure.
*/


/*
===========================================================
37. COLLECTION
===========================================================

Collection is a group of MongoDB documents.

Example:

Database:

college


Collections:

students
teachers
courses


Students collection:

{
    name: "Divyanshu",
    age: 22
}

{
    name: "Ayush",
    age: 21
}
*/


/*
===========================================================
38. BSON
===========================================================

BSON = Binary JSON.

MongoDB stores documents in BSON format.

BSON supports additional data types beyond JSON.


INTERVIEW QUESTION:

Q. What is BSON?

Answer:

BSON is a binary-encoded document format used by MongoDB
to store documents.
*/


/*
===========================================================
39. MONGODB _id
===========================================================

Every MongoDB document normally has a unique _id field.

Example:

{
    _id: ObjectId("..."),
    name: "Divyanshu"
}


MongoDB can automatically generate ObjectId values.
*/


/*
===========================================================
40. MONGODB CRUD
===========================================================

CREATE
READ
UPDATE
DELETE
*/


/*
CREATE:

db.users.insertOne({
    name: "Divyanshu",
    age: 22
});


READ:

db.users.find();


READ ONE:

db.users.findOne({
    name: "Divyanshu"
});


UPDATE:

db.users.updateOne(
    { name: "Divyanshu" },
    { $set: { age: 23 } }
);


DELETE:

db.users.deleteOne({
    name: "Divyanshu"
});


===========================================================
*/


/*
===========================================================
41. MONGODB QUERY OPERATORS
===========================================================

Common operators:

$gt
$gte
$lt
$lte
$eq
$ne
$in
$nin
$and
$or
$set
$inc
$push
$pull
*/


/*
Example:

Find users older than 18:

db.users.find({
    age: {
        $gt: 18
    }
});


Find users whose age is 18 or more:

db.users.find({
    age: {
        $gte: 18
    }
});


===========================================================
*/


/*
===========================================================
42. MONGOOSE
===========================================================

Mongoose is an ODM for MongoDB and Node.js.

ODM:

Object Document Mapper.

It provides:

1. Schema
2. Models
3. Validation
4. Middleware/hooks
5. Query helpers


Install:

npm install mongoose
*/


const mongoose = require("mongoose");


/*
Connection example:

mongoose.connect(
    "mongodb://127.0.0.1:27017/mydatabase"
);


===========================================================
*/


/*
===========================================================
43. MONGOOSE SCHEMA
===========================================================

Schema defines the structure/rules for documents in
Mongoose.
*/


const userSchema = new mongoose.Schema({

    name: {
        type: String,
        required: true
    },

    age: {
        type: Number,
        required: true
    },

    email: {
        type: String,
        required: true,
        unique: true
    }

});


/*
INTERVIEW QUESTION:

Q. What is Schema in Mongoose?

Answer:

A Schema defines the structure, types and validation rules
for documents managed through Mongoose.
*/


/*
===========================================================
44. MONGOOSE MODEL
===========================================================

Model is created from a Schema.

Model is used to interact with MongoDB documents.
*/


const User = mongoose.model(
    "User",
    userSchema
);


/*
Now we can use:

User.find()
User.findOne()
User.create()
User.findById()
User.findByIdAndUpdate()
User.findByIdAndDelete()
*/


/*
===========================================================
45. CREATE USING MONGOOSE
===========================================================*/


async function createUser() {

    const user = await User.create({

        name: "Divyanshu",

        age: 22,

        email: "divyanshu@example.com"

    });

    console.log(user);

}


/*
===========================================================
46. FIND USING MONGOOSE
===========================================================*/


async function getAllUsers() {

    const users = await User.find();

    console.log(users);

}


/*
===========================================================
47. FIND ONE
===========================================================*/


async function findUser() {

    const user = await User.findOne({

        name: "Divyanshu"

    });

    console.log(user);

}


/*
===========================================================
48. UPDATE
===========================================================*/


async function updateUser(id) {

    const user =
        await User.findByIdAndUpdate(

            id,

            {
                age: 23
            },

            {
                new: true
            }

        );

    console.log(user);

}


/*
new: true

means return the updated document.
*/


/*
===========================================================
49. DELETE
===========================================================*/


async function deleteUser(id) {

    await User.findByIdAndDelete(id);

}


/*
===========================================================
50. MONGOOSE VALIDATION
===========================================================

Mongoose allows validation.


Example:

const schema = new mongoose.Schema({

    age: {
        type: Number,
        min: 18,
        max: 60
    }

});


Other common validation options:

required
min
max
minlength
maxlength
enum
match


===========================================================
*/


/*
===========================================================
51. UNIQUE IS NOT VALIDATION
===========================================================

IMPORTANT INTERVIEW POINT:

unique: true is primarily an index constraint/helper,
not a normal Mongoose validator.

It does not itself guarantee validation in the same way
required/min/max do.

Database indexes help enforce uniqueness when correctly
configured.


===========================================================
*/


/*
===========================================================
52. MONGODB INDEX
===========================================================

Index improves query performance for supported queries.

Example:

db.users.createIndex({
    email: 1
});


1  -> ascending
-1 -> descending


INTERVIEW QUESTION:

Q. What is an index?

Answer:

An index is a data structure that helps MongoDB find
matching documents more efficiently for supported queries,
at the cost of additional storage and write overhead.
*/


/*
===========================================================
53. EMBEDDING
===========================================================

MongoDB allows nested documents.

Example:

{
    name: "Divyanshu",

    address: {
        city: "Delhi",
        country: "India"
    }
}


This is called embedding.


===========================================================
*/


/*
===========================================================
54. REFERENCING
===========================================================

Instead of storing complete data inside another document,
we can store a reference to another document.

Example:

User:

{
    _id: 101,
    name: "Divyanshu"
}


Order:

{
    userId: 101,
    product: "Laptop"
}


This is referencing.
*/


/*
===========================================================
55. POPULATE
===========================================================

Mongoose populate() can replace referenced IDs with
documents from another collection.


Example:

Order.find()
    .populate("userId");


This is commonly used when working with references.
*/


/*
===========================================================
56. AUTHENTICATION
===========================================================

Authentication:

"Who are you?"

Example:

Login using:

Email
Password


Authorization:

"What are you allowed to do?"

Example:

Admin can delete users.

Normal user cannot.


INTERVIEW QUESTION:

Q. Authentication vs Authorization?

Answer:

Authentication verifies identity.

Authorization determines permissions.
*/


/*
===========================================================
57. PASSWORD HASHING
===========================================================

Passwords should NOT be stored as plain text.

A password hashing library such as bcrypt/bcryptjs can
be used to hash passwords before storing them.


Example concept:

Password:

mypassword123


Stored:

hashed value


During login:

Entered password
      ↓
Compare with hash
      ↓
Match / No Match


IMPORTANT:

Never store plain-text passwords in the database.
*/


/*
===========================================================
58. JWT
===========================================================

JWT = JSON Web Token.

It is commonly used for stateless authentication.

Basic flow:

Login
  ↓
Server verifies user
  ↓
Server creates token
  ↓
Client stores/sends token
  ↓
Server verifies token
  ↓
Access protected route


JWT commonly contains:

Header
Payload
Signature


IMPORTANT:

JWT payload should not be treated as a place for secret
information. A normal JWT payload is readable by the client
unless encrypted separately.
*/


/*
===========================================================
59. CORS
===========================================================

CORS = Cross-Origin Resource Sharing.

It controls whether a browser allows a web page from one
origin to access resources from another origin.


Example:

Frontend:

http://localhost:3000


Backend:

http://localhost:5000


These are different origins.


Install:

npm install cors


Use:

const cors = require("cors");

app.use(cors());


INTERVIEW QUESTION:

Q. What is CORS?

Answer:

CORS is a browser security mechanism that controls
cross-origin requests.
*/


/*
===========================================================
60. ENVIRONMENT VARIABLES
===========================================================

Sensitive/configurable information should not normally be
hard-coded directly in source code.

Examples:

Database URL
JWT secret
API keys
Port


Using:

process.env.PORT

process.env.MONGO_URI


A package such as dotenv is commonly used to load values
from a .env file.
*/


/*
Example .env:

PORT=5000

MONGO_URI=mongodb://127.0.0.1:27017/mydb

JWT_SECRET=mysecret


JavaScript:

require("dotenv").config();

console.log(process.env.PORT);


IMPORTANT:

Do not commit secrets to GitHub.
*/


/*
===========================================================
61. MVC ARCHITECTURE
===========================================================

MVC:

M -> Model
V -> View
C -> Controller


Backend project structure:

project/
│
├── models/
├── controllers/
├── routes/
├── middleware/
├── config/
├── app.js
└── server.js


Model:

Database structure.


Controller:

Business logic.


Routes:

API endpoints.


Middleware:

Functions executed during request-response flow.
*/


/*
===========================================================
62. TYPICAL BACKEND FLOW
===========================================================

Client
  ↓
Route
  ↓
Middleware
  ↓
Controller
  ↓
Model
  ↓
MongoDB
  ↓
Model
  ↓
Controller
  ↓
Response
  ↓
Client


Example:

GET /users

Client
  ↓
users route
  ↓
controller
  ↓
User.find()
  ↓
MongoDB
  ↓
users data
  ↓
JSON response


===========================================================
*/


/*
===========================================================
63. REST API EXAMPLE
===========================================================

Typical User API:

GET
/users

POST
/users

GET
/users/:id

PUT
/users/:id

DELETE
/users/:id


Example response:

{
    "success": true,
    "data": {
        "name": "Divyanshu",
        "age": 22
    }
}


===========================================================
*/


/*
===========================================================
64. NODE.JS INTERVIEW QUESTIONS
===========================================================


Q1. What is Node.js?

Answer:

Node.js is a JavaScript runtime that allows JavaScript
to run outside the browser.


-----------------------------------------------------------

Q2. Which engine does Node.js use?

Answer:

Google's V8 JavaScript engine.


-----------------------------------------------------------

Q3. Is Node.js single-threaded?

Answer:

The main JavaScript execution is single-threaded, while
Node.js can handle asynchronous I/O using its runtime
architecture and underlying system facilities.


-----------------------------------------------------------

Q4. What is npm?

Answer:

Node Package Manager, commonly used to install and manage
Node.js packages.


-----------------------------------------------------------

Q5. What is package.json?

Answer:

It contains project metadata, scripts and dependencies.


-----------------------------------------------------------

Q6. What is node_modules?

Answer:

Directory containing installed project dependencies.


-----------------------------------------------------------

Q7. What is asynchronous programming?

Answer:

A programming approach where operations such as I/O can
complete later without blocking the main execution flow.


-----------------------------------------------------------

Q8. What is event-driven architecture?

Answer:

The program responds to events and callbacks, which is
a core part of Node.js's design.


-----------------------------------------------------------

Q9. What is the Event Loop?

Answer:

It coordinates asynchronous callbacks and the Call Stack
so JavaScript can continue processing other work.


-----------------------------------------------------------

Q10. What is middleware?

Answer:

A function that can process a request before the final
response is sent.


-----------------------------------------------------------

Q11. What is require()?

Answer:

In CommonJS, require() is used to import modules.


-----------------------------------------------------------

Q12. What is module.exports?

Answer:

It is used in CommonJS to expose values/functions from
a module.


-----------------------------------------------------------

Q13. What is process.env?

Answer:

It provides access to environment variables available
to the Node.js process.


-----------------------------------------------------------

Q14. What is REST API?

Answer:

An HTTP-based API organized around resources and standard
HTTP methods.


===========================================================
*/


/*
===========================================================
65. EXPRESS.JS INTERVIEW QUESTIONS
===========================================================


Q1. What is Express.js?

Answer:

Express.js is a web framework for Node.js.


-----------------------------------------------------------

Q2. Why use Express?

Answer:

It simplifies routing, middleware, request handling,
response handling and API development.


-----------------------------------------------------------

Q3. What is middleware?

Answer:

A function that runs during the request-response cycle.


-----------------------------------------------------------

Q4. What is next()?

Answer:

next() passes control to the next middleware or handler.


-----------------------------------------------------------

Q5. What is routing?

Answer:

Routing determines how the server responds to a particular
URL and HTTP method.


-----------------------------------------------------------

Q6. What is req.params?

Answer:

It contains route parameters.


Example:

/users/:id


-----------------------------------------------------------

Q7. What is req.query?

Answer:

It contains query-string parameters.


Example:

/users?name=Divyanshu


-----------------------------------------------------------

Q8. What is req.body?

Answer:

It contains data sent in the request body, after the
appropriate body-parsing middleware processes it.


-----------------------------------------------------------

Q9. What is res.json()?

Answer:

It sends a JSON response.


-----------------------------------------------------------

Q10. What is res.status()?

Answer:

It sets the HTTP status code of the response.


-----------------------------------------------------------

Q11. What is Express Router?

Answer:

It helps organize routes into separate modules.


-----------------------------------------------------------

Q12. What is error-handling middleware?

Answer:

Middleware with the signature:

(err, req, res, next)


-----------------------------------------------------------

Q13. Difference between PUT and PATCH?

Answer:

PUT is generally used to replace/update a complete
resource.

PATCH is generally used for partial updates.


-----------------------------------------------------------

Q14. What is express.json()?

Answer:

It parses incoming requests with JSON payloads.


===========================================================
*/


/*
===========================================================
66. MONGODB INTERVIEW QUESTIONS
===========================================================


Q1. What is MongoDB?

Answer:

MongoDB is a document-oriented NoSQL database.


-----------------------------------------------------------

Q2. What is NoSQL?

Answer:

NoSQL refers to database systems that use models other
than traditional relational tables, such as documents,
key-value, graph or wide-column models.


-----------------------------------------------------------

Q3. What is a document?

Answer:

A document is a BSON data record stored in a MongoDB
collection.


-----------------------------------------------------------

Q4. What is a collection?

Answer:

A collection is a group of MongoDB documents.


-----------------------------------------------------------

Q5. What is BSON?

Answer:

BSON is the binary-encoded document format used by MongoDB.


-----------------------------------------------------------

Q6. What is _id?

Answer:

It is the unique identifier field normally present in
MongoDB documents.


-----------------------------------------------------------

Q7. What is ObjectId?

Answer:

ObjectId is a commonly used BSON type for unique document
identifiers.


-----------------------------------------------------------

Q8. What is Mongoose?

Answer:

Mongoose is an ODM library for MongoDB and Node.js that
provides schemas, models, validation and other utilities.


-----------------------------------------------------------

Q9. What is Schema?

Answer:

Schema defines the structure and rules for documents managed
through Mongoose.


-----------------------------------------------------------

Q10. What is Model?

Answer:

A Mongoose model is created from a schema and provides an
interface for interacting with a MongoDB collection.


-----------------------------------------------------------

Q11. What is populate()?

Answer:

populate() allows Mongoose to retrieve referenced documents
and include them in query results.


-----------------------------------------------------------

Q12. What is indexing?

Answer:

Indexing helps MongoDB find matching documents more
efficiently for supported queries.


-----------------------------------------------------------

Q13. What is embedding?

Answer:

Embedding stores related data inside the same document.


-----------------------------------------------------------

Q14. What is referencing?

Answer:

Referencing stores a reference to another document instead
of embedding all of its data.


-----------------------------------------------------------

Q15. What is CRUD?

Answer:

Create
Read
Update
Delete


-----------------------------------------------------------

Q16. What is MongoDB aggregation?

Answer:

Aggregation is used to process documents through a pipeline
of stages to calculate, transform, group or filter data.


Example:

db.orders.aggregate([
    {
        $group: {
            _id: "$userId",
            total: {
                $sum: "$amount"
            }
        }
    }
]);


===========================================================
*/


/*
===========================================================
67. IMPORTANT MONGODB OPERATORS
===========================================================

Comparison:

$eq
$ne
$gt
$gte
$lt
$lte
$in
$nin


Logical:

$and
$or
$not
$nor


Update:

$set
$unset
$inc
$push
$pull


Example:

db.users.updateOne(

    { name: "Divyanshu" },

    {
        $set: {
            age: 23
        }
    }

);


===========================================================
*/


/*
===========================================================
68. NODE + EXPRESS + MONGODB COMPLETE FLOW
===========================================================

This is VERY IMPORTANT for interviews.


Frontend
   ↓
HTTP Request
   ↓
Express Route
   ↓
Middleware
   ↓
Controller
   ↓
Mongoose Model
   ↓
MongoDB
   ↓
Mongoose
   ↓
Controller
   ↓
Express Response
   ↓
Frontend


Example:

User clicks:

"Get Users"


Frontend sends:

GET /api/users


Express receives request.

        ↓

Route identifies:

GET /api/users


        ↓

Controller runs:

User.find()


        ↓

Mongoose talks to MongoDB.


        ↓

MongoDB returns documents.


        ↓

Controller sends:

res.json(users)


        ↓

Frontend receives JSON.


===========================================================
*/


/*
===========================================================
69. IMPORTANT BACKEND INTERVIEW DIFFERENCES
===========================================================


Node.js vs Express.js
---------------------

Node.js:

JavaScript runtime.

Express.js:

Framework built on Node.js.


-----------------------------------------------------------

MongoDB vs Mongoose
-------------------

MongoDB:

Database.


Mongoose:

ODM library used to work with MongoDB from Node.js.


-----------------------------------------------------------

Authentication vs Authorization
-------------------------------

Authentication:

Who are you?


Authorization:

What are you allowed to do?


-----------------------------------------------------------

PUT vs PATCH
------------

PUT:

Generally replaces the resource.


PATCH:

Generally updates part of the resource.


-----------------------------------------------------------

req.params vs req.query
-----------------------

req.params:

Route parameters.


req.query:

Query-string parameters.


-----------------------------------------------------------

SQL vs MongoDB
--------------

SQL:

Tables + Rows + Columns


MongoDB:

Collections + Documents


-----------------------------------------------------------

Embedding vs Referencing
------------------------

Embedding:

Store related data inside same document.


Referencing:

Store relation/reference to another document.


===========================================================
*/


/*
===========================================================
70. BASIC BACKEND PROJECT STRUCTURE
===========================================================

my-backend/
│
├── node_modules/
│
├── controllers/
│   └── userController.js
│
├── models/
│   └── userModel.js
│
├── routes/
│   └── userRoutes.js
│
├── middleware/
│   └── authMiddleware.js
│
├── config/
│   └── db.js
│
├── .env
├── .gitignore
├── package.json
├── package-lock.json
├── app.js
└── server.js


This type of structure is commonly used to keep backend
code organized.


===========================================================
*/


/*
===========================================================
71. BACKEND PROJECT PRACTICE ORDER
===========================================================

STEP 1:

Learn Node.js basics.

        ↓

STEP 2:

Learn npm and modules.

        ↓

STEP 3:

Create basic HTTP server.

        ↓

STEP 4:

Learn Express.js.

        ↓

STEP 5:

Learn routes.

        ↓

STEP 6:

Learn middleware.

        ↓

STEP 7:

Learn REST API.

        ↓

STEP 8:

Learn CRUD.

        ↓

STEP 9:

Learn MongoDB.

        ↓

STEP 10:

Learn Mongoose.

        ↓

STEP 11:

Connect Express with MongoDB.

        ↓

STEP 12:

Create CRUD API.

        ↓

STEP 13:

Learn authentication.

        ↓

STEP 14:

Learn JWT + password hashing.

        ↓

STEP 15:

Build complete backend project.


===========================================================
*/


/*
===========================================================
72. PROJECTS FOR PRACTICE
===========================================================

BEGINNER:

1. User CRUD API

Features:

POST user
GET users
GET user by ID
UPDATE user
DELETE user


-----------------------------------------------------------

INTERMEDIATE:

2. Blog API

Features:

Users
Posts
Comments
Authentication


-----------------------------------------------------------

ADVANCED:

3. E-Commerce Backend

Features:

Users
Products
Categories
Cart
Orders
Authentication
Authorization
Payments


-----------------------------------------------------------

FULL STACK PROJECT:

React
   +
Node.js
   +
Express.js
   +
MongoDB


Example:

Frontend:
React

Backend:
Node.js + Express

Database:
MongoDB


===========================================================
*/


/*
===========================================================
73. MOST IMPORTANT INTERVIEW TOPICS
===========================================================

NODE.JS:

✓ Node.js
✓ V8
✓ Event Loop
✓ Asynchronous programming
✓ Non-blocking I/O
✓ npm
✓ package.json
✓ Modules
✓ CommonJS
✓ ES Modules
✓ fs
✓ path
✓ http
✓ process.env


EXPRESS.JS:

✓ Express
✓ Routing
✓ Middleware
✓ next()
✓ req
✓ res
✓ req.params
✓ req.query
✓ req.body
✓ REST API
✓ CRUD
✓ Status codes
✓ Error handling
✓ Express Router
✓ CORS


MONGODB:

✓ NoSQL
✓ Database
✓ Collection
✓ Document
✓ BSON
✓ ObjectId
✓ CRUD
✓ Query operators
✓ Index
✓ Aggregation
✓ Embedding
✓ Referencing


MONGOOSE:

✓ Mongoose
✓ Schema
✓ Model
✓ Validation
✓ populate()
✓ Queries
✓ Middleware/hooks


AUTHENTICATION:

✓ Authentication
✓ Authorization
✓ Password hashing
✓ JWT
✓ Cookies/tokens
✓ Protected routes


===========================================================
74. FINAL INTERVIEW FORMULA
===========================================================

For every backend topic, prepare:

WHAT?
WHY?
HOW?
EXAMPLE?
REAL-WORLD USE?
INTERVIEW DIFFERENCE?


Example:

Q. What is middleware?

WHAT?

A function that runs during request-response processing.


WHY?

To perform common tasks before the final response.


HOW?

(req, res, next)


EXAMPLE:

app.use((req, res, next) => {

    console.log("Request received");

    next();

});


REAL-WORLD USE:

Authentication
Logging
Validation
Error handling


This is a good way to answer interview questions.


===========================================================
75. FINAL FULL STACK ROADMAP
===========================================================

JAVASCRIPT
    ↓
DOM
    ↓
ASYNC JS
    ↓
PROMISE
    ↓
FETCH API
    ↓
NODE.JS
    ↓
NPM
    ↓
EXPRESS.JS
    ↓
REST API
    ↓
CRUD
    ↓
MONGODB
    ↓
MONGOOSE
    ↓
AUTHENTICATION
    ↓
JWT
    ↓
BACKEND PROJECT
    ↓
REACT
    ↓
FULL STACK PROJECT


===========================================================
                 END OF NOTES
===========================================================
*/