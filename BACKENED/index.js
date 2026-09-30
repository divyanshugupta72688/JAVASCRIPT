/*
===========================================================
        BACKEND JAVASCRIPT NOTES
        NODE.JS + EXPRESS.JS + MONGODB
        SIMPLE LANGUAGE + INTERVIEW
===========================================================


===========================================================
SECTION 1: NODE.JS BASICS
===========================================================

Topics:

1. What is Node.js?
2. Why do we use Node.js?
3. V8 Engine
4. Node.js Single-Threaded
5. Synchronous vs Asynchronous
6. Blocking vs Non-Blocking
7. Event-Driven Architecture
8. Event Loop

-----------------------------------------------------------

1. WHAT IS NODE.JS?
-----------------------------------------------------------

Node.js is a JavaScript runtime.

It allows us to run JavaScript outside the browser.

Browser
   ↓
JavaScript

Node.js
   ↓
JavaScript
   ↓
Server

INTERVIEW:

Q. What is Node.js?

Answer:

Node.js is a JavaScript runtime environment built on
the V8 JavaScript engine that allows JavaScript to run
outside the browser, especially on servers.


-----------------------------------------------------------
2. WHY DO WE USE NODE.JS?
-----------------------------------------------------------

Node.js is commonly used for:

1. Backend development
2. REST APIs
3. Web servers
4. Real-time applications
5. File handling
6. Database applications
7. Microservices


-----------------------------------------------------------
3. V8 ENGINE
-----------------------------------------------------------

V8 is Google's JavaScript engine.

Chrome uses V8.

Node.js also uses V8.

JavaScript
    ↓
V8 Engine
    ↓
Machine Code


INTERVIEW:

Q. Which JavaScript engine does Node.js use?

Answer:

Node.js uses Google's V8 JavaScript engine.


-----------------------------------------------------------
4. NODE.JS SINGLE-THREADED
-----------------------------------------------------------

Node.js uses a single main JavaScript thread.

But this does NOT mean Node.js can handle only one
request at a time.

Node.js uses asynchronous and non-blocking architecture
to handle many I/O operations efficiently.


INTERVIEW:

Q. Is Node.js single-threaded?

Answer:

The main JavaScript execution in Node.js is single-threaded,
but Node.js can handle asynchronous I/O using its runtime
architecture and underlying system facilities.


-----------------------------------------------------------
5. SYNCHRONOUS VS ASYNCHRONOUS
-----------------------------------------------------------

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


-----------------------------------------------------------
6. BLOCKING VS NON-BLOCKING
-----------------------------------------------------------

Blocking:

The next code waits until the current operation finishes.

Non-Blocking:

Program can continue while an I/O operation is being
handled asynchronously.

INTERVIEW:

Q. Why is non-blocking I/O important?

Answer:

It allows Node.js to continue handling other work while
I/O operations are waiting to complete.


===========================================================
SECTION 2: NPM + PROJECT SETUP
===========================================================

Topics:

1. NPM
2. package.json
3. node_modules
4. package-lock.json
5. npm commands


-----------------------------------------------------------
1. NPM
-----------------------------------------------------------

NPM = Node Package Manager.

Used to:

1. Install packages
2. Manage dependencies
3. Run scripts
4. Publish packages

Commands:

npm init

npm init -y

npm install express

npm uninstall express

npm install


INTERVIEW:

Q. What is npm?

Answer:

npm is the package manager commonly used with Node.js
for installing and managing JavaScript packages.


-----------------------------------------------------------
2. package.json
-----------------------------------------------------------

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

INTERVIEW:

Q. What is package.json?

Answer:

package.json is a configuration file that describes
a Node.js project, including metadata, scripts and
package dependencies.


-----------------------------------------------------------
3. node_modules
-----------------------------------------------------------

node_modules contains installed packages.

Example:

npm install express

This creates:

node_modules/

Usually we don't upload node_modules to GitHub.

We upload:

package.json
package-lock.json

Other developer runs:

npm install


===========================================================
SECTION 3: NODE.JS MODULES
===========================================================

Topics:

1. Modules
2. CommonJS
3. ES Modules
4. require()
5. module.exports
6. Core Modules


-----------------------------------------------------------
1. MODULES
-----------------------------------------------------------

Modules allow us to divide code into multiple files.

Two common module systems:

1. CommonJS
2. ES Modules


-----------------------------------------------------------
2. COMMONJS
-----------------------------------------------------------

math.js

function add(a, b) {
    return a + b;
}

module.exports = add;


app.js

const add = require("./math");

console.log(add(10, 20));


-----------------------------------------------------------
3. ES MODULES
-----------------------------------------------------------

math.js

export function add(a, b) {
    return a + b;
}


app.js

import { add } from "./math.js";

console.log(add(10, 20));


INTERVIEW:

Q. Why do we use modules?

Answer:

Modules help divide code into smaller reusable files
and make large applications easier to maintain.


-----------------------------------------------------------
4. CORE MODULES
-----------------------------------------------------------

Node.js provides built-in modules.

Examples:

fs
path
http
os
events
url

These normally don't require npm installation.


===========================================================
SECTION 4: NODE.JS CORE MODULES
===========================================================

Topics:

1. fs
2. path
3. http
4. os
5. events
6. url


-----------------------------------------------------------
1. FILE SYSTEM MODULE - fs
-----------------------------------------------------------

fs module is used to work with files.

const fs = require("fs");

Write file:

fs.writeFileSync(
    "example.txt",
    "Hello Node.js"
);

Read file:

const data = fs.readFileSync(
    "example.txt",
    "utf-8"
);

console.log(data);

Synchronous:

writeFileSync()
readFileSync()

Asynchronous:

writeFile()
readFile()


INTERVIEW:

Q. What is fs module?

Answer:

fs is Node.js's built-in File System module used to
create, read, write, update and delete files.


-----------------------------------------------------------
2. PATH MODULE
-----------------------------------------------------------

path module helps work with file and directory paths.

const path = require("path");

console.log(
    path.join(
        __dirname,
        "public",
        "index.html"
    )
);

Useful methods:

path.join()
path.resolve()
path.basename()
path.dirname()
path.extname()


INTERVIEW:

Q. Why use path module?

Answer:

It provides utilities for working with file and directory
paths in a platform-independent way.


-----------------------------------------------------------
3. HTTP MODULE
-----------------------------------------------------------

Node.js provides a built-in http module to create servers.

const http = require("http");

const server = http.createServer(
    (req, res) => {

        res.writeHead(200, {
            "Content-Type": "text/plain"
        });

        res.end("Hello Server");

    }
);

server.listen(3000);


Open:

http://localhost:3000


INTERVIEW:

Q. How can you create a server in Node.js?

Answer:

We can use Node.js's built-in http module and
http.createServer().


===========================================================
SECTION 5: EXPRESS.JS BASICS
===========================================================

Topics:

1. What is Express.js?
2. Why Express?
3. Express Server
4. Routing
5. HTTP Methods
6. Request and Response
7. JSON Response
8. Status Codes


-----------------------------------------------------------
1. WHAT IS EXPRESS.JS?
-----------------------------------------------------------

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

const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello Express");
});

app.listen(3000);


INTERVIEW:

Q. What is Express.js?

Answer:

Express.js is a web framework for Node.js used to build
web servers and APIs more easily.


-----------------------------------------------------------
2. EXPRESS SERVER
-----------------------------------------------------------

const express = require("express");

const app = express();

app.get("/", (req, res) => {
    res.send("Hello");
});

app.listen(3000);


===========================================================
SECTION 6: ROUTING + HTTP
===========================================================

Topics:

1. Routing
2. HTTP Methods
3. GET
4. POST
5. PUT
6. PATCH
7. DELETE
8. REST API URLs


-----------------------------------------------------------
1. ROUTING
-----------------------------------------------------------

Routing means deciding how the server responds to a
specific URL and HTTP method.

Example:

app.get("/", (req, res) => {
    res.send("Home Page");
});

app.get("/about", (req, res) => {
    res.send("About Page");
});

app.post("/users", (req, res) => {
    res.send("Create User");
});


INTERVIEW:

Q. What is routing?

Answer:

Routing defines how an application responds to requests
for different URLs and HTTP methods.


-----------------------------------------------------------
2. HTTP METHODS
-----------------------------------------------------------

GET:

Used to retrieve data.

POST:

Used to create new data.

PUT:

Generally used to replace/update a complete resource.

PATCH:

Used to partially update a resource.

DELETE:

Used to delete data.


REST API example:

GET     /users
POST    /users
GET     /users/:id
PUT     /users/:id
PATCH   /users/:id
DELETE  /users/:id


===========================================================
SECTION 7: REQUEST + RESPONSE
===========================================================

Topics:

1. req
2. res
3. res.send()
4. res.json()
5. res.status()
6. JSON response
7. Status codes


-----------------------------------------------------------
1. REQUEST AND RESPONSE
-----------------------------------------------------------

req = Request from client

res = Response from server

Example:

app.get("/user", (req, res) => {

    console.log(req);

    res.send("User Data");

});


INTERVIEW:

Q. What are req and res?

Answer:

req contains information about the incoming request.

res is used to send a response back to the client.


-----------------------------------------------------------
2. JSON RESPONSE
-----------------------------------------------------------

app.get("/api/user", (req, res) => {

    res.json({
        name: "Divyanshu",
        age: 22
    });

});


-----------------------------------------------------------
3. STATUS CODE
-----------------------------------------------------------

200 -> Success
201 -> Created
400 -> Bad Request
401 -> Unauthorized
403 -> Forbidden
404 -> Not Found
500 -> Internal Server Error

Example:

res.status(200).json({
    message: "Success"
});


===========================================================
SECTION 8: EXPRESS MIDDLEWARE
===========================================================

Topics:

1. Middleware
2. next()
3. Types of Middleware
4. express.json()
5. Custom Middleware
6. Error Middleware
7. CORS


-----------------------------------------------------------
1. WHAT IS MIDDLEWARE?
-----------------------------------------------------------

Middleware is a function that runs during the
request-response cycle.

Basic structure:

(req, res, next)


Example:

app.use((req, res, next) => {

    console.log("Middleware executed");

    next();

});


next():

Moves the request to the next middleware/route handler.


INTERVIEW:

Q. What is middleware?

Answer:

Middleware is a function that has access to the request,
response and next function and can perform work before
the final response is sent.


-----------------------------------------------------------
2. TYPES OF MIDDLEWARE
-----------------------------------------------------------

1. Application-level middleware
2. Router-level middleware
3. Built-in middleware
4. Third-party middleware
5. Error-handling middleware


Examples:

express.json()
express.urlencoded()
cors
morgan
custom middleware


-----------------------------------------------------------
3. express.json()
-----------------------------------------------------------

express.json() parses incoming JSON request bodies.

app.use(express.json());

Then:

req.body

can contain the parsed object.


Example:

app.post("/user", (req, res) => {

    console.log(req.body);

    res.json(req.body);

});


===========================================================
SECTION 9: ROUTE PARAMETERS + QUERY + BODY
===========================================================

Topics:

1. Route Parameters
2. Query Parameters
3. req.params
4. req.query
5. Request Body
6. Params vs Query


-----------------------------------------------------------
1. ROUTE PARAMETERS
-----------------------------------------------------------

Route parameter is a dynamic part of URL.

app.get("/users/:id", (req, res) => {

    console.log(req.params.id);

    res.send(
        `User ID: ${req.params.id}`
    );

});

URL:

/users/101

req.params.id

Output:

101


-----------------------------------------------------------
2. QUERY PARAMETERS
-----------------------------------------------------------

Query parameters are usually used for:

Filtering
Searching
Sorting

Example:

/users?name=Divyanshu&age=22

Access:

req.query


-----------------------------------------------------------
3. REQUEST BODY
-----------------------------------------------------------

Body contains data sent by the client.

Example:

POST /users

{
    "name": "Divyanshu",
    "age": 22
}

Access:

req.body


-----------------------------------------------------------
4. PARAMS VS QUERY
-----------------------------------------------------------

PARAMS:

/users/101

req.params.id


QUERY:

/users?id=101

req.query.id


INTERVIEW:

Q. Difference between req.params and req.query?

Answer:

req.params is used for route parameters.

req.query is used for query-string parameters.


===========================================================
SECTION 10: EXPRESS ROUTER
===========================================================

Topics:

1. Express Router
2. Separate route files
3. app.use()
4. Route organization


-----------------------------------------------------------

const router = express.Router();

router.get("/", (req, res) => {
    res.send("All Users");
});

router.get("/:id", (req, res) => {
    res.send(
        `User ${req.params.id}`
    );
});

app.use("/users", router);


Now:

GET /users

GET /users/:id


INTERVIEW:

Q. Why use Express Router?

Answer:

It helps organize related routes into separate modules
and keeps the application easier to maintain.


===========================================================
SECTION 11: ERROR HANDLING
===========================================================

Topics:

1. Error handling
2. Error middleware
3. err
4. req
5. res
6. next


Error-handling middleware has four parameters:

err
req
res
next


Example:

app.use((err, req, res, next) => {

    console.log(err);

    res.status(500).json({
        message: "Something went wrong"
    });

});


INTERVIEW:

Q. How is error middleware different?

Answer:

Express error-handling middleware uses four parameters:

(err, req, res, next)


===========================================================
SECTION 12: REST API + CRUD
===========================================================

Topics:

1. REST API
2. CRUD
3. Create
4. Read
5. Update
6. Delete
7. CRUD API


-----------------------------------------------------------
1. REST API
-----------------------------------------------------------

REST = Representational State Transfer.

REST API allows clients and servers to communicate using
HTTP methods and resources.

Example:

GET    /products
POST   /products
GET    /products/10
PUT    /products/10
DELETE /products/10


INTERVIEW:

Q. What is REST API?

Answer:

A REST API is an HTTP-based API designed around resources,
HTTP methods and standard representations such as JSON.


-----------------------------------------------------------
2. CRUD
-----------------------------------------------------------

CRUD means:

C -> Create
R -> Read
U -> Update
D -> Delete


Mapping:

CREATE -> POST
READ   -> GET
UPDATE -> PUT/PATCH
DELETE -> DELETE


===========================================================
SECTION 13: SIMPLE CRUD API
===========================================================

Example:

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


-----------------------------------------------------------
READ
-----------------------------------------------------------

app.get("/users", (req, res) => {

    res.json(users);

});


-----------------------------------------------------------
CREATE
-----------------------------------------------------------

app.post("/users", (req, res) => {

    const newUser = {

        id: users.length + 1,

        name: req.body.name

    };

    users.push(newUser);

    res.status(201).json(newUser);

});


-----------------------------------------------------------
UPDATE
-----------------------------------------------------------

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


-----------------------------------------------------------
DELETE
-----------------------------------------------------------

app.delete("/users/:id", (req, res) => {

    const id = Number(req.params.id);

    users = users.filter(
        user => user.id !== id
    );

    res.json({
        message: "User deleted"
    });

});


===========================================================
SECTION 14: MONGODB BASICS
===========================================================

Topics:

1. What is MongoDB?
2. NoSQL
3. Database
4. Collection
5. Document
6. BSON
7. _id
8. ObjectId
9. SQL vs MongoDB


-----------------------------------------------------------
1. WHAT IS MONGODB?
-----------------------------------------------------------

MongoDB is a NoSQL database.

It stores data in document format.

MongoDB structure:

Database
   ↓
Collections
   ↓
Documents


Example:

{
    name: "Divyanshu",
    age: 22,
    city: "Delhi"
}


INTERVIEW:

Q. What is MongoDB?

Answer:

MongoDB is a document-oriented NoSQL database that stores
data in flexible BSON documents.


-----------------------------------------------------------
2. SQL VS MONGODB
-----------------------------------------------------------

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


SQL:

users table

MongoDB:

users collection


INTERVIEW:

Q. Difference between SQL and MongoDB?

Answer:

Relational databases organize data into tables with defined
relationships, while MongoDB stores data as flexible
documents inside collections.


-----------------------------------------------------------
3. DOCUMENT
-----------------------------------------------------------

A MongoDB document is a BSON data record.

Example:

{
    "_id": "123",
    "name": "Divyanshu",
    "age": 22
}


-----------------------------------------------------------
4. COLLECTION
-----------------------------------------------------------

Collection is a group of MongoDB documents.

Database:

college

Collections:

students
teachers
courses


-----------------------------------------------------------
5. BSON
-----------------------------------------------------------

BSON = Binary JSON.

MongoDB stores documents in BSON format.

INTERVIEW:

Q. What is BSON?

Answer:

BSON is a binary-encoded document format used by MongoDB
to store documents.


-----------------------------------------------------------
6. _id AND ObjectId
-----------------------------------------------------------

Every MongoDB document normally has a unique _id field.

Example:

{
    _id: ObjectId("..."),
    name: "Divyanshu"
}

MongoDB can automatically generate ObjectId values.


===========================================================
SECTION 15: MONGODB CRUD + OPERATORS
===========================================================

Topics:

1. Create
2. Read
3. Update
4. Delete
5. Query Operators


-----------------------------------------------------------
CREATE
-----------------------------------------------------------

db.users.insertOne({
    name: "Divyanshu",
    age: 22
});


-----------------------------------------------------------
READ
-----------------------------------------------------------

db.users.find();


READ ONE:

db.users.findOne({
    name: "Divyanshu"
});


-----------------------------------------------------------
UPDATE
-----------------------------------------------------------

db.users.updateOne(
    { name: "Divyanshu" },
    { $set: { age: 23 } }
);


-----------------------------------------------------------
DELETE
-----------------------------------------------------------

db.users.deleteOne({
    name: "Divyanshu"
});


-----------------------------------------------------------
QUERY OPERATORS
-----------------------------------------------------------

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

db.users.find({
    age: {
        $gt: 18
    }
});


===========================================================
SECTION 16: MONGODB INDEX + AGGREGATION
===========================================================

Topics:

1. Index
2. createIndex()
3. Aggregation
4. Aggregation Pipeline


-----------------------------------------------------------
1. INDEX
-----------------------------------------------------------

Index improves query performance for supported queries.

Example:

db.users.createIndex({
    email: 1
});

1  -> ascending
-1 -> descending


INTERVIEW:

Q. What is an index?

Answer:

An index is a data structure that helps MongoDB find
matching documents more efficiently for supported queries,
at the cost of additional storage and write overhead.


-----------------------------------------------------------
2. AGGREGATION
-----------------------------------------------------------

Aggregation processes documents through a pipeline.

It can:

Calculate
Transform
Group
Filter data


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
SECTION 17: MONGOOSE
===========================================================

Topics:

1. What is Mongoose?
2. ODM
3. Connection
4. Schema
5. Model
6. Validation
7. Queries
8. populate()


-----------------------------------------------------------
1. WHAT IS MONGOOSE?
-----------------------------------------------------------

Mongoose is an ODM for MongoDB and Node.js.

ODM:

Object Document Mapper.

Mongoose provides:

1. Schema
2. Models
3. Validation
4. Middleware/hooks
5. Query helpers


Install:

npm install mongoose


-----------------------------------------------------------
2. CONNECTION
-----------------------------------------------------------

const mongoose = require("mongoose");

mongoose.connect(
    "mongodb://127.0.0.1:27017/mydatabase"
);


===========================================================
SECTION 18: MONGOOSE SCHEMA
===========================================================

Schema defines the structure/rules for documents in
Mongoose.

Example:

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


INTERVIEW:

Q. What is Schema in Mongoose?

Answer:

A Schema defines the structure, types and validation rules
for documents managed through Mongoose.


===========================================================
SECTION 19: MONGOOSE MODEL
===========================================================

Model is created from a Schema.

Model is used to interact with MongoDB documents.

Example:

const User = mongoose.model(
    "User",
    userSchema
);


Common methods:

User.find()
User.findOne()
User.create()
User.findById()
User.findByIdAndUpdate()
User.findByIdAndDelete()


===========================================================
SECTION 20: MONGOOSE CRUD
===========================================================

-----------------------------------------------------------
CREATE
-----------------------------------------------------------

async function createUser() {

    const user = await User.create({

        name: "Divyanshu",
        age: 22,
        email: "divyanshu@example.com"

    });

    console.log(user);

}


-----------------------------------------------------------
READ
-----------------------------------------------------------

async function getAllUsers() {

    const users = await User.find();

    console.log(users);

}


-----------------------------------------------------------
FIND ONE
-----------------------------------------------------------

async function findUser() {

    const user = await User.findOne({
        name: "Divyanshu"
    });

    console.log(user);

}


-----------------------------------------------------------
UPDATE
-----------------------------------------------------------

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


new: true

Means return the updated document.


-----------------------------------------------------------
DELETE
-----------------------------------------------------------

async function deleteUser(id) {

    await User.findByIdAndDelete(id);

}


===========================================================
SECTION 21: MONGOOSE VALIDATION
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


Common validation:

required
min
max
minlength
maxlength
enum
match


-----------------------------------------------------------
IMPORTANT INTERVIEW POINT
-----------------------------------------------------------

unique: true is primarily an index constraint/helper,
not a normal Mongoose validator.

required/min/max are validation rules.


===========================================================
SECTION 22: EMBEDDING + REFERENCING + POPULATE
===========================================================

Topics:

1. Embedding
2. Referencing
3. populate()


-----------------------------------------------------------
1. EMBEDDING
-----------------------------------------------------------

Embedding means storing related data inside the same
document.

Example:

{
    name: "Divyanshu",

    address: {
        city: "Delhi",
        country: "India"
    }
}


-----------------------------------------------------------
2. REFERENCING
-----------------------------------------------------------

Referencing means storing a reference to another document.

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


-----------------------------------------------------------
3. POPULATE
-----------------------------------------------------------

Mongoose populate() can replace referenced IDs with
documents from another collection.

Example:

Order.find()
    .populate("userId");


===========================================================
SECTION 23: AUTHENTICATION + AUTHORIZATION
===========================================================

Topics:

1. Authentication
2. Authorization
3. Password Hashing
4. JWT
5. Protected Routes


-----------------------------------------------------------
1. AUTHENTICATION
-----------------------------------------------------------

Authentication means:

"Who are you?"

Example:

Login using:

Email
Password


-----------------------------------------------------------
2. AUTHORIZATION
-----------------------------------------------------------

Authorization means:

"What are you allowed to do?"

Example:

Admin can delete users.

Normal user cannot.


INTERVIEW:

Q. Authentication vs Authorization?

Answer:

Authentication verifies identity.

Authorization determines permissions.


-----------------------------------------------------------
3. PASSWORD HASHING
-----------------------------------------------------------

Passwords should NOT be stored as plain text.

A library such as bcrypt/bcryptjs can be used.

Password:

mypassword123

        ↓

Hash

        ↓

Stored in database


During login:

Entered Password
       ↓
Compare with Hash
       ↓
Match / No Match


IMPORTANT:

Never store plain-text passwords.


-----------------------------------------------------------
4. JWT
-----------------------------------------------------------

JWT = JSON Web Token.

Commonly used for stateless authentication.

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


JWT contains:

Header
Payload
Signature


IMPORTANT:

JWT payload should not be treated as secret information.


===========================================================
SECTION 24: CORS + ENVIRONMENT VARIABLES
===========================================================

Topics:

1. CORS
2. Environment Variables
3. dotenv
4. process.env
5. .env
6. API Keys
7. Database URL


-----------------------------------------------------------
1. CORS
-----------------------------------------------------------

CORS = Cross-Origin Resource Sharing.

It controls whether a browser allows a web page from
one origin to access resources from another origin.

Example:

Frontend:

http://localhost:3000

Backend:

http://localhost:5000


Install:

npm install cors


Use:

const cors = require("cors");

app.use(cors());


INTERVIEW:

Q. What is CORS?

Answer:

CORS is a browser security mechanism that controls
cross-origin requests.


-----------------------------------------------------------
2. ENVIRONMENT VARIABLES
-----------------------------------------------------------

Sensitive/configurable information should not normally
be hard-coded.

Examples:

Database URL
JWT secret
API keys
Port


Use:

process.env.PORT

process.env.MONGO_URI

dotenv can load values from .env


Example .env:

PORT=5000

MONGO_URI=mongodb://127.0.0.1:27017/mydb

JWT_SECRET=mysecret


JavaScript:

require("dotenv").config();

console.log(process.env.PORT);


IMPORTANT:

Do not commit secrets to GitHub.


===========================================================
SECTION 25: MVC ARCHITECTURE
===========================================================

MVC:

M -> Model
V -> View
C -> Controller


Backend structure:

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


===========================================================
SECTION 26: BACKEND REQUEST FLOW
===========================================================

Very Important for Interviews.

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
SECTION 27: NODE + EXPRESS + MONGODB COMPLETE FLOW
===========================================================

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

        ↓

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
SECTION 28: IMPORTANT DIFFERENCES
===========================================================

-----------------------------------------------------------
NODE.JS VS EXPRESS.JS
-----------------------------------------------------------

Node.js:

JavaScript runtime.

Express.js:

Framework built on Node.js.


-----------------------------------------------------------
MONGODB VS MONGOOSE
-----------------------------------------------------------

MongoDB:

Database.

Mongoose:

ODM library used to work with MongoDB from Node.js.


-----------------------------------------------------------
AUTHENTICATION VS AUTHORIZATION
-----------------------------------------------------------

Authentication:

Who are you?

Authorization:

What are you allowed to do?


-----------------------------------------------------------
PUT VS PATCH
-----------------------------------------------------------

PUT:

Generally replaces the resource.

PATCH:

Generally updates part of the resource.


-----------------------------------------------------------
req.params VS req.query
-----------------------------------------------------------

req.params:

Route parameters.

req.query:

Query-string parameters.


-----------------------------------------------------------
SQL VS MONGODB
-----------------------------------------------------------

SQL:

Tables + Rows + Columns

MongoDB:

Collections + Documents


-----------------------------------------------------------
EMBEDDING VS REFERENCING
-----------------------------------------------------------

Embedding:

Store related data inside same document.

Referencing:

Store relation/reference to another document.


===========================================================
SECTION 29: BACKEND PROJECT STRUCTURE
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


===========================================================
SECTION 30: BACKEND LEARNING ORDER
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
Learn Authentication.

        ↓

STEP 14:
Learn JWT + Password Hashing.

        ↓

STEP 15:
Build complete backend project.


===========================================================
SECTION 31: PROJECT PRACTICE
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

FULL STACK:

React
   +
Node.js
   +
Express.js
   +
MongoDB


===========================================================
SECTION 32: NODE.JS INTERVIEW QUESTIONS
===========================================================

Q1. What is Node.js?

Answer:

Node.js is a JavaScript runtime that allows JavaScript
to run outside the browser.


Q2. Which engine does Node.js use?

Answer:

Google's V8 JavaScript engine.


Q3. Is Node.js single-threaded?

Answer:

The main JavaScript execution is single-threaded, while
Node.js can handle asynchronous I/O using its runtime
architecture and underlying system facilities.


Q4. What is npm?

Answer:

Node Package Manager, commonly used to install and manage
Node.js packages.


Q5. What is package.json?

Answer:

It contains project metadata, scripts and dependencies.


Q6. What is node_modules?

Answer:

Directory containing installed project dependencies.


Q7. What is asynchronous programming?

Answer:

A programming approach where operations such as I/O can
complete later without blocking the main execution flow.


Q8. What is event-driven architecture?

Answer:

The program responds to events and callbacks, which is
a core part of Node.js's design.


Q9. What is Event Loop?

Answer:

It coordinates asynchronous callbacks and the Call Stack
so JavaScript can continue processing other work.


Q10. What is middleware?

Answer:

A function that can process a request before the final
response is sent.


Q11. What is require()?

Answer:

In CommonJS, require() is used to import modules.


Q12. What is module.exports?

Answer:

It is used in CommonJS to expose values/functions from
a module.


Q13. What is process.env?

Answer:

It provides access to environment variables available
to the Node.js process.


Q14. What is REST API?

Answer:

An HTTP-based API organized around resources and standard
HTTP methods.


===========================================================
SECTION 33: EXPRESS.JS INTERVIEW QUESTIONS
===========================================================

Q1. What is Express.js?

Answer:

Express.js is a web framework for Node.js.


Q2. Why use Express?

Answer:

It simplifies routing, middleware, request handling,
response handling and API development.


Q3. What is middleware?

Answer:

A function that runs during the request-response cycle.


Q4. What is next()?

Answer:

next() passes control to the next middleware or handler.


Q5. What is routing?

Answer:

Routing determines how the server responds to a particular
URL and HTTP method.


Q6. What is req.params?

Answer:

It contains route parameters.


Q7. What is req.query?

Answer:

It contains query-string parameters.


Q8. What is req.body?

Answer:

It contains data sent in the request body after appropriate
body-parsing middleware processes it.


Q9. What is res.json()?

Answer:

It sends a JSON response.


Q10. What is res.status()?

Answer:

It sets the HTTP status code of the response.


Q11. What is Express Router?

Answer:

It helps organize routes into separate modules.


Q12. What is error-handling middleware?

Answer:

Middleware with the signature:

(err, req, res, next)


Q13. Difference between PUT and PATCH?

Answer:

PUT is generally used to replace/update a complete resource.

PATCH is generally used for partial updates.


Q14. What is express.json()?

Answer:

It parses incoming requests with JSON payloads.


===========================================================
SECTION 34: MONGODB INTERVIEW QUESTIONS
===========================================================

Q1. What is MongoDB?

Answer:

MongoDB is a document-oriented NoSQL database.


Q2. What is NoSQL?

Answer:

NoSQL refers to database systems that use models other
than traditional relational tables, such as documents,
key-value, graph or wide-column models.


Q3. What is a document?

Answer:

A document is a BSON data record stored in a MongoDB
collection.


Q4. What is a collection?

Answer:

A collection is a group of MongoDB documents.


Q5. What is BSON?

Answer:

BSON is the binary-encoded document format used by MongoDB.


Q6. What is _id?

Answer:

It is the unique identifier field normally present in
MongoDB documents.


Q7. What is ObjectId?

Answer:

ObjectId is a commonly used BSON type for unique document
identifiers.


Q8. What is Mongoose?

Answer:

Mongoose is an ODM library for MongoDB and Node.js that
provides schemas, models, validation and other utilities.


Q9. What is Schema?

Answer:

Schema defines the structure and rules for documents
managed through Mongoose.


Q10. What is Model?

Answer:

A Mongoose model is created from a schema and provides an
interface for interacting with a MongoDB collection.


Q11. What is populate()?

Answer:

populate() allows Mongoose to retrieve referenced documents
and include them in query results.


Q12. What is indexing?

Answer:

Indexing helps MongoDB find matching documents more
efficiently for supported queries.


Q13. What is embedding?

Answer:

Embedding stores related data inside the same document.


Q14. What is referencing?

Answer:

Referencing stores a reference to another document instead
of embedding all of its data.


Q15. What is CRUD?

Answer:

Create
Read
Update
Delete


Q16. What is MongoDB aggregation?

Answer:

Aggregation is used to process documents through a pipeline
of stages to calculate, transform, group or filter data.


===========================================================
SECTION 35: MOST IMPORTANT INTERVIEW TOPICS
===========================================================

NODE.JS:

✓ Node.js
✓ V8
✓ Event Loop
✓ Asynchronous Programming
✓ Non-Blocking I/O
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
✓ Status Codes
✓ Error Handling
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
✓ Query Operators
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
✓ Middleware/Hooks


AUTHENTICATION:

✓ Authentication
✓ Authorization
✓ Password Hashing
✓ JWT
✓ Cookies/Tokens
✓ Protected Routes


===========================================================
SECTION 36: FINAL INTERVIEW FORMULA
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


===========================================================
SECTION 37: FULL STACK ROADMAP
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