/*
===========================================================
            JAVASCRIPT COMPLETE NOTES
       SIMPLE LANGUAGE + INTERVIEW QUESTIONS
===========================================================

This file covers important JavaScript topics from basic
to advanced level.

FORMAT:

1. Definition
2. Simple Explanation
3. Example
4. Important Points
5. Interview Questions

===========================================================
*/


/*
===========================================================
1. WHAT IS JAVASCRIPT?
===========================================================

JavaScript is a programming language used to make websites
interactive and dynamic.

HTML  -> Structure
CSS   -> Design
JS    -> Logic + Behaviour

Example:

Button click
Form validation
Changing HTML
API data
Animations
Calculations
etc.


INTERVIEW QUESTION:

Q. What is JavaScript?

Answer:
JavaScript is a high-level, dynamically typed programming
language mainly used to create interactive and dynamic
web applications.
*/


/*
===========================================================
2. VARIABLES
===========================================================

Variables are used to store data.

JavaScript has:

var
let
const
*/


var name = "Divyanshu";

let age = 22;

const country = "India";

console.log(name);
console.log(age);
console.log(country);


/*
IMPORTANT:

var:
- Function scoped
- Can be redeclared
- Can be reassigned

let:
- Block scoped
- Cannot be redeclared in same scope
- Can be reassigned

const:
- Block scoped
- Cannot be redeclared
- Cannot be reassigned


INTERVIEW QUESTION:

Q. Difference between var, let and const?

Answer:

var   -> Function scoped
let   -> Block scoped
const -> Block scoped and cannot be reassigned
*/


/*
===========================================================
3. DATA TYPES
===========================================================

JavaScript data types are mainly divided into:

Primitive
Non-Primitive
*/


// Primitive

let username = "Divyanshu";     // String
let marks = 90;                 // Number
let isStudent = true;           // Boolean
let value;                      // Undefined
let empty = null;               // Null
let bigNumber = 123456789n;     // BigInt
let symbolValue = Symbol("id"); // Symbol


// Non-Primitive

let arr5 = [1, 2, 3];            // Array

let obj = {
    name: "Divyanshu",
    age: 22
};                              // Object


/*
INTERVIEW QUESTION:

Q. What are primitive data types?

Answer:

String
Number
Boolean
Undefined
Null
BigInt
Symbol


Q. Is Array a data type?

Answer:

Array is an object type in JavaScript.
*/


/*
===========================================================
4. OPERATORS
===========================================================

Operators are symbols used to perform operations.
*/


// Arithmetic

console.log(10 + 5);
console.log(10 - 5);
console.log(10 * 5);
console.log(10 / 5);
console.log(10 % 3);


// Comparison

console.log(10 > 5);
console.log(10 < 5);
console.log(10 == "10");
console.log(10 === "10");


// Logical

console.log(true && true);
console.log(true || false);
console.log(!true);


/*
IMPORTANT:

==

Checks value after type conversion.

===

Checks value AND type.


10 == "10"   -> true
10 === "10"  -> false


INTERVIEW QUESTION:

Q. Difference between == and ===?

Answer:

== performs type conversion before comparison.

=== checks both value and data type without type conversion.
*/


/*
===========================================================
5. STRING
===========================================================

String is used to store text.
*/


let firstName = "Divyanshu";

console.log(firstName.length);
console.log(firstName.toUpperCase());
console.log(firstName.toLowerCase());
console.log(firstName.includes("yan"));
console.log(firstName.charAt(0));


/*
TEMPLATE LITERAL

Template literals use backticks.

*/


let myName = "Divyanshu";
let myAge = 22;

console.log(`My name is ${myName} and my age is ${myAge}`);


/*
INTERVIEW QUESTION:

Q. How can you check the length of a string?

Answer:

Using .length

Example:

"Hello".length

Output:

5
*/


/*
===========================================================
6. TYPE CONVERSION
===========================================================

Converting one data type into another is called
Type Conversion.
*/


let score = "100";

console.log(Number(score));

let number = 100;

console.log(String(number));

console.log(Boolean(1));


/*
IMPORTANT:

Number("100") -> 100
String(100)   -> "100"
Boolean(1)    -> true
Boolean(0)    -> false


INTERVIEW QUESTION:

Q. What is type conversion?

Answer:

Converting a value from one data type to another data type.
*/


/*
===========================================================
7. CONTROL FLOW
===========================================================

Control flow decides which code should execute.
*/


// if

let marks2 = 80;

if (marks2 >= 60) {
    console.log("Pass");
}


// if else

if (marks2 >= 60) {
    console.log("Pass");
}
else {
    console.log("Fail");
}


// else if

if (marks2 >= 90) {
    console.log("A Grade");
}
else if (marks2 >= 60) {
    console.log("B Grade");
}
else {
    console.log("Fail");
}


/*
INTERVIEW QUESTION:

Q. What is control flow?

Answer:

Control flow determines the order in which statements
are executed in a program.
*/


/*
===========================================================
8. SWITCH
===========================================================
*/


let day = 2;

switch (day) {

    case 1:
        console.log("Monday");
        break;

    case 2:
        console.log("Tuesday");
        break;

    case 3:
        console.log("Wednesday");
        break;

    default:
        console.log("Invalid Day");
}


/*
INTERVIEW QUESTION:

Q. When should we use switch?

Answer:

Switch is useful when we need to compare one value with
multiple fixed cases.
*/


/*
===========================================================
9. LOOPS
===========================================================

Loops are used to repeat code.
*/


// FOR LOOP

for (let i = 1; i <= 5; i++) {

    console.log(i);

}


// WHILE LOOP

let i = 1;

while (i <= 5) {

    console.log(i);

    i++;
}


// DO WHILE

let j = 1;

do {

    console.log(j);

    j++;

} while (j <= 5);


/*
INTERVIEW QUESTION:

Q. Difference between while and do while?

Answer:

while:
Condition is checked before execution.

do while:
Code executes at least once before condition checking.
*/


/*
===========================================================
10. FUNCTIONS
===========================================================

Function is a reusable block of code.
*/


function greet() {

    console.log("Hello");

}

greet();


/*
FUNCTION WITH PARAMETERS
*/


function add(a, b) {

    return a + b;

}

console.log(add(10, 20));


/*
INTERVIEW QUESTION:

Q. What is a function?

Answer:

A function is a reusable block of code designed to perform
a specific task.
*/


/*
===========================================================
11. ARROW FUNCTION
===========================================================

Arrow function is a shorter way to write functions.
*/


const addNumbers = (a, b) => {

    return a + b;

};


console.log(addNumbers(10, 20));


// Short form

const multiply = (a, b) => a * b;

console.log(multiply(5, 4));


/*
INTERVIEW QUESTION:

Q. What is an arrow function?

Answer:

Arrow function is a shorter syntax for writing functions.

Important:
Arrow functions do not have their own 'this'.
*/


/*
===========================================================
12. ARRAY
===========================================================

Array stores multiple values in a single variable.
*/


const fruits = [
    "Apple",
    "Mango",
    "Banana"
];

console.log(fruits);

console.log(fruits[0]);


/*
IMPORTANT ARRAY METHODS

push()
pop()
shift()
unshift()
slice()
splice()
includes()
indexOf()
concat()
*/


fruits.push("Orange");

fruits.pop();

console.log(fruits);


/*
INTERVIEW QUESTION:

Q. What is an array?

Answer:

An array is a data structure used to store multiple values
in a single variable.
*/


/*
===========================================================
13. forEach()
===========================================================

forEach() is used to execute a function for every element.
*/


const numbers = [1, 2, 3, 4, 5];

numbers.forEach((num) => {

    console.log(num);

});


/*
IMPORTANT:

forEach() does not return a new array.
*/


/*
INTERVIEW QUESTION:

Q. Difference between forEach() and map()?

Answer:

forEach():
Used for performing an action on each element.

map():
Creates and returns a new array.
*/


/*
===========================================================
14. map()
===========================================================

map() creates a new array by applying a function to every
element.
*/


const nums = [1, 2, 3, 4, 5];

const newNums = nums.map((num) => {

    return num * 2;

});

console.log(newNums);


/*
Short form:

*/


const doubleNums = nums.map(num => num * 2);

console.log(doubleNums);


/*
INTERVIEW QUESTION:

Q. What does map() return?

Answer:

map() returns a new array.
*/


/*
===========================================================
15. filter()
===========================================================

filter() is used to select elements according to a condition.

Only elements for which condition is true are returned.
*/


const mynums = [
    1,2,3,4,5,6,7,8,9,10
];

const newnums = mynums.filter((num) => {

    return num > 4;

});

console.log(newnums);


/*
Output:

[5,6,7,8,9,10]


INTERVIEW QUESTION:

Q. Why do we use filter()?

Answer:

filter() is used when we want to select only those elements
from an array that satisfy a condition.
*/


/*
===========================================================
16. reduce()
===========================================================

reduce() is used to reduce an array into a single value.

Example:
Finding total of all numbers.
*/


const numbers2 = [1,2,3,4,5];

const total = numbers2.reduce((acc, current) => {

    return acc + current;

}, 0);

console.log(total);


/*
Output:

15


INTERVIEW QUESTION:

Q. What is reduce()?

Answer:

reduce() processes all array elements and reduces them into
a single value.
*/


/*
===========================================================
17. METHOD CHAINING
===========================================================
*/


const result = mynums
    .map(num => num * 10)
    .map(num => num + 1)
    .filter(num => num > 40);

console.log(result);


/*
Here:

1. map() multiplies by 10
2. map() adds 1
3. filter() selects values > 40
*/


/*
===========================================================
18. OBJECT
===========================================================

Object stores data in key-value pairs.
*/


const user = {

    name: "Divyanshu",
    age: 22,
    city: "Delhi"

};


console.log(user.name);
console.log(user.age);


/*
OBJECT METHOD
*/


const person = {

    name: "Divyanshu",

    greet: function () {

        console.log("Hello " + this.name);

    }

};

person.greet();


/*
INTERVIEW QUESTION:

Q. What is an object?

Answer:

An object is a collection of key-value pairs used to
represent structured data.
*/


/*
===========================================================
19. OBJECT METHODS
===========================================================
*/


const employee = {

    name: "Divyanshu",
    age: 22,
    city: "Delhi"

};


console.log(Object.keys(employee));

console.log(Object.values(employee));

console.log(Object.entries(employee));


/*
Object.keys()
-> returns keys

Object.values()
-> returns values

Object.entries()
-> returns key-value pairs
*/


/*
===========================================================
20. DESTRUCTURING
===========================================================

Destructuring allows us to extract values easily.
*/


// ARRAY DESTRUCTURING

const arr = [10, 20, 30];

const [a, b, c] = arr;

console.log(a);
console.log(b);
console.log(c);


// OBJECT DESTRUCTURING

const student = {

    studentName: "Divyanshu",
    studentAge: 22

};

const {
    studentName,
    studentAge
} = student;

console.log(studentName);
console.log(studentAge);


/*
INTERVIEW QUESTION:

Q. What is destructuring?

Answer:

Destructuring is a feature that allows us to extract
values from arrays or objects into variables.
*/


/*
===========================================================
21. SPREAD OPERATOR
===========================================================

Spread operator (...) expands values.
*/


const arr1 = [1, 2, 3];

const arr2 = [4, 5, 6];

const combined = [...arr1, ...arr2];

console.log(combined);


/*
OBJECT SPREAD
*/


const user1 = {

    name: "Divyanshu",
    age: 22

};

const user2 = {

    ...user1,
    city: "Delhi"

};

console.log(user2);


/*
INTERVIEW QUESTION:

Q. What is spread operator?

Answer:

Spread operator expands elements of an iterable such as
an array or properties of an object.
*/


/*
===========================================================
22. REST OPERATOR
===========================================================

Rest operator collects multiple values into one array.
*/


function addAll(...numbers) {

    let total = 0;

    for (let num of numbers) {

        total += num;

    }

    return total;
}


console.log(addAll(10,20,30,40));


/*
SPREAD:
Expand

REST:
Collect
*/


/*
===========================================================
23. SCOPE
===========================================================

Scope tells us where a variable can be accessed.
*/


// GLOBAL SCOPE

let globalName = "Divyanshu";

function showName() {

    console.log(globalName);

}

showName();


// FUNCTION SCOPE

function test() {

    let age = 22;

    console.log(age);

}


// BLOCK SCOPE

if (true) {

    let city = "Delhi";

    console.log(city);

}


/*
INTERVIEW QUESTION:

Q. What is scope?

Answer:

Scope defines the area of a program where a variable can
be accessed.
*/


/*
===========================================================
24. HOISTING
===========================================================

Hoisting means declarations are processed before code
execution.
*/


console.log(x);

var x = 10;


/*
Output:

undefined


let and const are hoisted but cannot be accessed before
their declaration because of Temporal Dead Zone.
*/


/*
INTERVIEW QUESTION:

Q. What is hoisting?

Answer:

Hoisting is JavaScript behavior where declarations are
processed before execution of the code.
*/


/*
===========================================================
25. TEMPORAL DEAD ZONE
===========================================================

TDZ is the time between entering a scope and declaring
a let or const variable.
*/


// console.log(y);

let y = 20;


/*
Accessing y before declaration gives ReferenceError.
*/


/*
===========================================================
26. CLOSURE
===========================================================

Closure happens when an inner function remembers variables
from its outer function.
*/


function outer() {

    let count = 0;

    function inner() {

        count++;

        console.log(count);

    }

    return inner;
}


const counter = outer();

counter();
counter();
counter();


/*
Output:

1
2
3


INTERVIEW QUESTION:

Q. What is closure?

Answer:

Closure is a feature where an inner function remembers and
can access variables from its outer function even after
the outer function has finished execution.
*/


/*
===========================================================
27. CALLBACK FUNCTION
===========================================================

A function passed as an argument to another function is
called a callback function.
*/


function greetUser(name) {

    console.log("Hello " + name);

}


function processUser(callback) {

    callback("Divyanshu");

}


processUser(greetUser);


/*
===========================================================
28. HIGHER ORDER FUNCTION
===========================================================

A function that:

1. Takes another function as argument
OR
2. Returns another function

is called Higher Order Function.
*/


function calculate(operation, a, b) {

    return operation(a, b);

}


function addTwoNumbers(a, b) {

    return a + b;

}


console.log(
    calculate(addTwoNumbers, 10, 20)
);


/*
map()
filter()
reduce()
are examples of Higher Order Functions.
*/


/*
===========================================================
29. THIS KEYWORD
===========================================================

'this' refers to the object based on how a function is
called.
*/


const person2 = {

    name: "Divyanshu",

    greet: function () {

        console.log(this.name);

    }

};


person2.greet();


/*
Here:

this -> person2
*/


/*
INTERVIEW QUESTION:

Q. What is this in JavaScript?

Answer:

'this' refers to the object/context associated with the
current function call.
*/


/*
===========================================================
30. DEFAULT PARAMETERS
===========================================================
*/


function welcome(name = "Guest") {

    console.log(`Hello ${name}`);

}


welcome("Divyanshu");

welcome();


/*
===========================================================
31. OPTIONAL CHAINING
===========================================================

?. prevents errors when a property does not exist.
*/


const userData = {

    name: "Divyanshu",

    address: {

        city: "Delhi"

    }

};


console.log(userData.address?.city);

console.log(userData.contact?.phone);


/*
If contact does not exist:

Instead of error:

undefined


===========================================================
*/


/*
===========================================================
32. NULLISH COALESCING
===========================================================

?? returns the right value if left value is null or
undefined.
*/


let userName = null;

console.log(userName ?? "Guest");


let scoreValue = 0;

console.log(scoreValue ?? 100);


/*
Output:

Guest
0


Because 0 is not null or undefined.
*/


/*
===========================================================
33. SET
===========================================================

Set stores unique values.
*/


const mySet = new Set([1,2,2,3,3,4]);

console.log(mySet);

mySet.add(5);

console.log(mySet);

console.log(mySet.has(3));

mySet.delete(1);


/*
INTERVIEW QUESTION:

Q. Why is Set used?

Answer:

Set is used when we need to store unique values.
*/


/*
===========================================================
34. MAP OBJECT
===========================================================

Map stores data in key-value pairs.

NOTE:

Array map()
and
Map object

are different things.
*/


const myMap = new Map();

myMap.set("name", "Divyanshu");
myMap.set("age", 22);

console.log(myMap.get("name"));

console.log(myMap.has("age"));


/*
===========================================================
35. DATE
===========================================================
*/


const date = new Date();

console.log(date);

console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getHours());
console.log(date.getMinutes());


/*
IMPORTANT:

January = 0
February = 1
...
December = 11
*/


/*
===========================================================
36. MATH
===========================================================
*/


console.log(Math.round(4.6));

console.log(Math.floor(4.9));

console.log(Math.ceil(4.1));

console.log(Math.max(10,20,30));

console.log(Math.min(10,20,30));

console.log(Math.random());


/*
Random number from 1 to 10:
*/


const random = Math.floor(Math.random() * 10) + 1;

console.log(random);


/*
===========================================================
37. ERROR HANDLING
===========================================================

JavaScript provides:

try
catch
finally
throw
*/


try {

    let result = someUndefinedVariable;

    console.log(result);

}
catch (error) {

    console.log("Error occurred");
    console.log(error.message);

}
finally {

    console.log("This will execute");

}


/*
INTERVIEW QUESTION:

Q. Why do we use try/catch?

Answer:

try/catch is used to handle runtime errors so that the
program can handle errors gracefully.
*/


/*
===========================================================
38. PROMISE
===========================================================

Promise represents the result of an asynchronous operation.

Promise has 3 states:

1. Pending
2. Fulfilled
3. Rejected
*/


const myPromise = new Promise((resolve, reject) => {

    let success = true;

    if (success) {

        resolve("Task completed");

    }
    else {

        reject("Task failed");

    }

});


myPromise
    .then((result) => {

        console.log(result);

    })
    .catch((error) => {

        console.log(error);

    });


/*
INTERVIEW QUESTION:

Q. What is Promise?

Answer:

Promise is an object used to handle the eventual success
or failure of an asynchronous operation.
*/


/*
===========================================================
39. ASYNC / AWAIT
===========================================================

async/await provides a cleaner way to work with Promises.
*/


function getData() {

    return new Promise((resolve) => {

        setTimeout(() => {

            resolve("Data received");

        }, 2000);

    });

}


async function showData() {

    console.log("Loading...");

    const data = await getData();

    console.log(data);

}


showData();


/*
INTERVIEW QUESTION:

Q. What does await do?

Answer:

await pauses the execution of the async function until
the Promise is settled.
*/


/*
===========================================================
40. FETCH API
===========================================================

fetch() is used to request data from an API/server.
*/


async function getUsers() {

    try {

        const response =
            await fetch(
                "https://jsonplaceholder.typicode.com/users"
            );

        const data = await response.json();

        console.log(data);

    }
    catch (error) {

        console.log(error);

    }

}


// getUsers();


/*
IMPORTANT:

fetch() returns a Promise.
*/


/*
===========================================================
41. SYNCHRONOUS VS ASYNCHRONOUS
===========================================================

Synchronous:

Code executes one task at a time.

Asynchronous:

Some tasks can complete later without blocking other code.
*/


console.log("1");

setTimeout(() => {

    console.log("2");

}, 2000);

console.log("3");


/*
Output:

1
3
2
*/


/*
===========================================================
42. EVENT LOOP
===========================================================

JavaScript is single-threaded.

Event Loop helps JavaScript handle asynchronous operations.

Basic flow:

CALL STACK
     ↓
WEB APIs
     ↓
CALLBACK QUEUE
     ↓
EVENT LOOP
     ↓
CALL STACK
*/


console.log("Start");

setTimeout(() => {

    console.log("Timeout");

}, 0);

console.log("End");


/*
Output:

Start
End
Timeout


INTERVIEW QUESTION:

Q. What is Event Loop?

Answer:

Event Loop continuously checks whether the Call Stack is
empty and moves asynchronous callbacks into the Call Stack
when they are ready.
*/


/*
===========================================================
43. JSON
===========================================================

JSON = JavaScript Object Notation.

It is commonly used for exchanging data between client
and server.
*/


const data = {

    name: "Divyanshu",
    age: 22

};


// Object -> JSON

const json = JSON.stringify(data);

console.log(json);


// JSON -> Object

const objectData = JSON.parse(json);

console.log(objectData);


/*
===========================================================
44. LOCAL STORAGE
===========================================================

localStorage stores data in browser.

Data remains after page refresh.
*/


localStorage.setItem(
    "username",
    "Divyanshu"
);


console.log(
    localStorage.getItem("username")
);


localStorage.removeItem("username");

// localStorage.clear();


/*
IMPORTANT:

localStorage stores data as STRING.
*/


/*
OBJECT IN LOCAL STORAGE
*/


const userInfo = {

    name: "Divyanshu",
    age: 22

};


localStorage.setItem(
    "user",
    JSON.stringify(userInfo)
);


const savedUser = JSON.parse(
    localStorage.getItem("user")
);


console.log(savedUser);


/*
===========================================================
45. SESSION STORAGE
===========================================================

sessionStorage works similarly to localStorage.

Main difference:

localStorage:
Data stays until removed.

sessionStorage:
Data is generally available only for the current
browser tab/session.
*/


sessionStorage.setItem(
    "name",
    "Divyanshu"
);

console.log(
    sessionStorage.getItem("name")
);


/*
===========================================================
46. CLASS
===========================================================

Class is a blueprint for creating objects.
*/


class Student {

    constructor(name, age) {

        this.name = name;
        this.age = age;

    }


    introduce() {

        console.log(
            `My name is ${this.name}`
        );

    }

}


const student1 = new Student(
    "Divyanshu",
    22
);


student1.introduce();


/*
===========================================================
47. INHERITANCE
===========================================================

Inheritance allows one class to use properties and methods
of another class.
*/


class Animal {

    eat() {

        console.log("Animal is eating");

    }

}


class Dog extends Animal {

    bark() {

        console.log("Dog is barking");

    }

}


const dog = new Dog();

dog.eat();

dog.bark();


/*
===========================================================
48. CONSTRUCTOR
===========================================================

constructor() automatically runs when an object is created.
*/


class User {

    constructor(name) {

        this.name = name;

    }

}


const userObject = new User("Divyanshu");

console.log(userObject.name);


/*
===========================================================
49. PROTOTYPE
===========================================================

JavaScript objects can inherit properties and methods
through prototypes.

Prototype is an important part of JavaScript's inheritance
system.
*/


const personObject = {

    name: "Divyanshu"

};


console.log(
    Object.getPrototypeOf(personObject)
);


/*
INTERVIEW QUESTION:

Q. What is prototype?

Answer:

Prototype is an object from which another object can inherit
properties and methods.
*/


/*
===========================================================
50. MODULES
===========================================================

Modules allow us to divide JavaScript code into multiple
files.

Example:

math.js

export function add(a, b) {

    return a + b;

}


app.js

import { add } from "./math.js";

console.log(add(10,20));


HTML:

<script type="module" src="./app.js"></script>


Benefits:

- Code organization
- Reusability
- Maintainability
*/


/*
===========================================================
51. REGULAR EXPRESSION
===========================================================

Regex is used to search or validate patterns in strings.
*/


const pattern = /javascript/i;

console.log(
    pattern.test("I am learning JavaScript")
);


/*
Common uses:

Email validation
Password validation
Phone number validation
Searching text
*/


/*
===========================================================
52. IMPORTANT ARRAY METHODS
===========================================================

Already learned:

map()
filter()
reduce()

Also learn:

forEach()
find()
findIndex()
some()
every()
includes()
sort()
slice()
splice()
concat()
flat()
*/


const numbers3 = [
    10,20,30,40,50
];


// find()

console.log(
    numbers3.find(num => num > 25)
);


// findIndex()

console.log(
    numbers3.findIndex(num => num > 25)
);


// some()

console.log(
    numbers3.some(num => num > 40)
);


// every()

console.log(
    numbers3.every(num => num > 5)
);


// includes()

console.log(
    numbers3.includes(30)
);


// slice()

console.log(
    numbers3.slice(1,4)
);


/*
===========================================================
53. SLICE VS SPLICE
===========================================================

slice():

Does NOT modify original array.

splice():

MODIFIES original array.
*/


const original = [1,2,3,4,5];

const slicedArray = original.slice(1,3);

console.log(slicedArray);

console.log(original);


const original2 = [1,2,3,4,5];

original2.splice(1,2);

console.log(original2);


/*
INTERVIEW QUESTION:

Q. Difference between slice and splice?

Answer:

slice() does not modify the original array.

splice() modifies the original array.
*/


/*
===========================================================
54. DOM
===========================================================

DOM = Document Object Model.

DOM allows JavaScript to access and modify HTML elements.
*/


/*
HTML:

<h1 id="title">Hello</h1>
*/


const title = document.querySelector("#title");

console.log(title);


/*
IMPORTANT DOM METHODS:

getElementById()
querySelector()
querySelectorAll()
getElementsByClassName()
getElementsByTagName()
createElement()
appendChild()
remove()
setAttribute()
classList
*/


/*
===========================================================
55. getElementById VS querySelector
===========================================================

getElementById():

Selects an element by ID.


document.getElementById("title");


querySelector():

Uses CSS selector.


document.querySelector("#title");

document.querySelector(".heading");

document.querySelector("h1");


INTERVIEW:

Q. Difference?

Answer:

getElementById() specifically selects an element by ID.

querySelector() can select using any CSS selector and
returns the first matching element.
*/


/*
===========================================================
56. innerText
===========================================================

innerText returns visible text.

Example:

<h1>
Hello
<span style="display:none">Hidden</span>
</h1>

innerText generally returns:

Hello
*/


/*
===========================================================
57. textContent
===========================================================

textContent returns the text content including text that
may not be visually displayed.
*/


/*
===========================================================
58. innerHTML
===========================================================

innerHTML returns HTML content along with HTML tags.
*/


/*
Example:

element.innerHTML

Can return:

<h1>Hello</h1>
*/


/*
IMPORTANT:

innerText
-> visible text

textContent
-> text content

innerHTML
-> HTML + content
*/


/*
===========================================================
59. CREATE ELEMENT
===========================================================*/


const li = document.createElement("li");

li.textContent = "JavaScript";

document.body.appendChild(li);


/*
IMPORTANT:

appendChild() expects an actual DOM element.

Correct:

parent.appendChild(li);


Wrong:

parent.appendChild("li");


Because "li" is just a string.
*/


/*
===========================================================
60. CLASSLIST
===========================================================

classList is used to add/remove/toggle CSS classes.
*/


const box = document.querySelector(".box");


// Add class

// box.classList.add("active");


// Remove class

// box.classList.remove("active");


// Toggle class

// box.classList.toggle("active");


/*
===========================================================
61. DEBOUNCING
===========================================================

Debouncing means waiting until the user stops performing
an action before running the function.

Common example:

Search input.

Example:

User types:

J
Ja
Jav
Java
JavaS
JavaSc...

Instead of calling API for every letter,
wait until user stops typing.
*/


function debounce(fn, delay) {

    let timer;

    return function () {

        clearTimeout(timer);

        timer = setTimeout(() => {

            fn();

        }, delay);

    };

}


/*
===========================================================
62. THROTTLING
===========================================================

Throttling limits how frequently a function can execute.

Common example:

Scroll event.

Instead of running function hundreds of times while
scrolling, run it after a fixed interval.
*/


/*
===========================================================
63. STRICT MODE
===========================================================

"use strict";

Strict mode makes JavaScript more strict and helps detect
some common mistakes.
*/


"use strict";


/*
===========================================================
64. GARBAGE COLLECTION
===========================================================

JavaScript automatically removes objects/data that are
no longer reachable.

This process is called Garbage Collection.

Developer normally does not manually free memory like in
some lower-level languages.
*/


/*
===========================================================
65. MEMORY LEAK
===========================================================

Memory leak means memory remains occupied unnecessarily.

Common causes:

1. Unremoved event listeners
2. Unnecessary global variables
3. Timers that are never cleared
4. Objects unnecessarily kept in memory
*/


/*
===========================================================
66. SHALLOW COPY VS DEEP COPY
===========================================================

Shallow copy:

Copies the first level.

Deep copy:

Creates an independent copy of nested data.
*/


const originalUser = {

    name: "Divyanshu",

    address: {
        city: "Delhi"
    }

};


const shallowCopy = {
    ...originalUser
};


console.log(shallowCopy);


/*
For simple data:

Spread operator can create a shallow copy.


For JSON-compatible data:

*/


const deepCopy =
    JSON.parse(
        JSON.stringify(originalUser)
    );


console.log(deepCopy);


/*
===========================================================
67. PASS BY VALUE VS REFERENCE
===========================================================

Primitive values are copied by value.

Objects/arrays are reference values.
*/


let a1 = 10;

let b1 = a1;

b1 = 20;

console.log(a1);
// 10


const obj1 = {
    name: "Divyanshu"
};

const obj2 = obj1;

obj2.name = "Ayush";

console.log(obj1.name);

// Ayush


/*
Because both object variables refer to the same object.
*/


/*
===========================================================
68. EXECUTION CONTEXT
===========================================================

Execution Context is the environment in which JavaScript
code is executed.

Main types:

1. Global Execution Context
2. Function Execution Context
3. Eval Execution Context


Every execution context has:

1. Memory Creation Phase
2. Code Execution Phase
*/


/*
===========================================================
69. CALL STACK
===========================================================

Call Stack keeps track of function execution.
*/


function first() {

    console.log("First");

}


function second() {

    first();

    console.log("Second");

}


second();


/*
Call Stack:

second()
   ↓
first()
   ↓
console.log()
   ↓
first removed
   ↓
second continues
*/


/*
===========================================================
70. JAVASCRIPT IS SINGLE THREADED
===========================================================

JavaScript executes one main piece of code at a time.

That is why JavaScript is called single-threaded.

Asynchronous features allow JavaScript to handle tasks
without blocking normal execution.
*/


/*
===========================================================
71. PROMISE CHAINING
===========================================================
*/


Promise.resolve(10)

    .then(num => {

        return num * 2;

    })

    .then(num => {

        return num + 5;

    })

    .then(result => {

        console.log(result);

    });


/*
Output:

25
*/


/*
===========================================================
72. PROMISE.ALL
===========================================================

Promise.all() waits for all promises to fulfill.

If one rejects, Promise.all() rejects.
*/


const p1 = Promise.resolve("One");

const p2 = Promise.resolve("Two");

const p3 = Promise.resolve("Three");


Promise.all([p1, p2, p3])
    .then(result => {

        console.log(result);

    });


/*
===========================================================
73. PROMISE.RACE
===========================================================

Promise.race() returns the result of the first settled
Promise.
*/


/*
===========================================================
74. CALLBACK HELL
===========================================================

When callbacks become deeply nested, code becomes difficult
to read and maintain.

This is called Callback Hell.

Promises and async/await help solve this problem.
*/


/*
===========================================================
75. NULL VS UNDEFINED
===========================================================

undefined:

A variable exists but does not have a value assigned.


let a;


null:

Intentional absence of value.


let b = null;


INTERVIEW:

Q. Difference between null and undefined?

Answer:

undefined usually means a value has not been assigned.

null represents an intentional empty value.
*/


/*
===========================================================
76. TRUTHY AND FALSY VALUES
===========================================================

Falsy values include:

false
0
-0
0n
""
null
undefined
NaN

Everything else is generally truthy.
*/


if ("hello") {

    console.log("Truthy");

}


/*
===========================================================
77. OPTIONAL PARAMETERS / REST
===========================================================*/


function showNumbers(...numbers) {

    console.log(numbers);

}


showNumbers(1,2,3,4,5);


/*
===========================================================
78. INTERVIEW RAPID FIRE QUESTIONS
===========================================================

Q1. What is JavaScript?

Ans:
A programming language used to create dynamic and
interactive applications.

-----------------------------------------------------------

Q2. Is JavaScript compiled or interpreted?

Ans:
Modern JavaScript engines use JIT (Just-In-Time) compilation
along with interpretation and optimization.

-----------------------------------------------------------

Q3. Is JavaScript single-threaded?

Ans:
JavaScript's main execution model is single-threaded.

-----------------------------------------------------------

Q4. What is hoisting?

Ans:
Declarations are processed before code execution.

-----------------------------------------------------------

Q5. What is closure?

Ans:
An inner function remembering variables from its outer
function.

-----------------------------------------------------------

Q6. What is callback?

Ans:
A function passed as an argument to another function.

-----------------------------------------------------------

Q7. What is Promise?

Ans:
An object representing the eventual result of an
asynchronous operation.

-----------------------------------------------------------

Q8. What is async/await?

Ans:
Syntax used to work with Promises in a cleaner way.

-----------------------------------------------------------

Q9. What is DOM?

Ans:
Document Object Model. It represents HTML as objects that
JavaScript can access and modify.

-----------------------------------------------------------

Q10. map vs filter?

Ans:

map():
Transforms every element and returns a new array.

filter():
Returns only elements that satisfy a condition.

-----------------------------------------------------------

Q11. map vs forEach?

Ans:

map() returns a new array.

forEach() is mainly used to perform an action for each
element and does not return a new array.

-----------------------------------------------------------

Q12. == vs ===?

Ans:

== checks value after type conversion.

=== checks value and type.

-----------------------------------------------------------

Q13. let vs const?

Ans:

let can be reassigned.

const cannot be reassigned.

Both are block scoped.

-----------------------------------------------------------

Q14. What is spread operator?

Ans:
It expands elements/properties.

-----------------------------------------------------------

Q15. What is rest operator?

Ans:
It collects multiple values into an array.

-----------------------------------------------------------

Q16. What is Event Loop?

Ans:
It helps JavaScript handle asynchronous callbacks by
coordinating the Call Stack and task queues.

-----------------------------------------------------------

Q17. What is localStorage?

Ans:
Browser storage that persists until the data is removed.

-----------------------------------------------------------

Q18. What is JSON?

Ans:
A text-based data format commonly used for exchanging
structured data.

-----------------------------------------------------------

Q19. What is prototype?

Ans:
An object through which JavaScript objects can inherit
properties and methods.

-----------------------------------------------------------

Q20. What is class?

Ans:
A blueprint for creating objects.

-----------------------------------------------------------

Q21. What is inheritance?

Ans:
A mechanism where one class/object gets properties and
methods from another.

-----------------------------------------------------------

Q22. What is destructuring?

Ans:
Extracting values from arrays or objects into variables.

-----------------------------------------------------------

Q23. What is higher-order function?

Ans:
A function that takes another function as an argument or
returns a function.

-----------------------------------------------------------

Q24. What is this?

Ans:
It refers to the current execution context/object according
to how the function is called.

-----------------------------------------------------------

Q25. What is Set?

Ans:
A collection that stores unique values.

-----------------------------------------------------------

Q26. What is Map?

Ans:
A collection that stores key-value pairs and supports
keys of different types.

-----------------------------------------------------------

Q27. What is fetch()?

Ans:
An API used to make network requests and returns a Promise.

-----------------------------------------------------------

Q28. What is error handling?

Ans:
Handling runtime problems using mechanisms such as
try/catch/finally.

-----------------------------------------------------------

Q29. What is debouncing?

Ans:
Delaying execution until the repeated action stops for
a specified time.

-----------------------------------------------------------

Q30. What is throttling?

Ans:
Limiting how often a function can execute within a period.
*/


/*
===========================================================
79. MOST IMPORTANT INTERVIEW DIFFERENCES
===========================================================


var vs let vs const
-------------------

var:
Function scope

let:
Block scope + reassignment allowed

const:
Block scope + reassignment not allowed


-----------------------------------------------------------

== vs ===
---------

==:
Loose equality

===:
Strict equality


-----------------------------------------------------------

map vs filter
-------------

map:
Transform values

filter:
Select values


-----------------------------------------------------------

map vs forEach
--------------

map:
Returns new array

forEach:
Does not return new array


-----------------------------------------------------------

slice vs splice
---------------

slice:
Does not modify original array

splice:
Modifies original array


-----------------------------------------------------------

null vs undefined
------------------

null:
Intentional empty value

undefined:
Value not assigned


-----------------------------------------------------------

spread vs rest
--------------

spread:
Expand

rest:
Collect


-----------------------------------------------------------

localStorage vs sessionStorage
------------------------------

localStorage:
Persists until removed

sessionStorage:
Current tab/session storage


-----------------------------------------------------------

normal function vs arrow function
---------------------------------

Normal function:
Has its own this depending on invocation.

Arrow function:
Does not have its own this.


===========================================================
80. JAVASCRIPT LEARNING ROADMAP
===========================================================

BASIC JAVASCRIPT
----------------

1. Variables
2. Data Types
3. Operators
4. Type Conversion
5. Strings
6. Conditions
7. Switch
8. Loops
9. Functions
10. Arrays
11. Objects


INTERMEDIATE JAVASCRIPT
-----------------------

12. forEach
13. map
14. filter
15. reduce
16. find
17. some
18. every
19. Destructuring
20. Spread
21. Rest
22. Scope
23. Hoisting
24. Closure
25. Callback
26. Higher Order Functions
27. this
28. Arrow Functions


ADVANCED JAVASCRIPT
-------------------

29. Promise
30. Async/Await
31. Fetch API
32. Event Loop
33. Call Stack
34. Execution Context
35. Prototype
36. Classes
37. Inheritance
38. Modules
39. Error Handling
40. JSON
41. Local Storage
42. Session Storage
43. Debouncing
44. Throttling
45. Regex
46. Memory Management


DOM
---

47. DOM
48. Selectors
49. innerText
50. textContent
51. innerHTML
52. createElement
53. appendChild
54. classList
55. Attributes
56. DOM Traversal


===========================================================
81. WHAT SHOULD I PRACTICE?
===========================================================

After completing these notes, make small projects.

BEGINNER PROJECTS:

1. Calculator
2. Counter
3. Number Guessing Game
4. Digital Clock
5. Random Color Generator
6. To-Do List
7. Password Generator
8. BMI Calculator
9. Quiz App
10. Stopwatch


INTERMEDIATE PROJECTS:

1. Weather App
2. GitHub Profile Finder
3. Movie Search App
4. Expense Tracker
5. Notes App
6. Shopping Cart
7. Recipe Finder
8. API Based Dashboard


===========================================================
82. FINAL INTERVIEW REVISION
===========================================================

Before going for a JavaScript interview, make sure you can
explain these topics WITHOUT memorizing definitions:

✓ Variables
✓ Data Types
✓ Type Conversion
✓ == vs ===
✓ Scope
✓ Hoisting
✓ TDZ
✓ Functions
✓ Arrow Functions
✓ this
✓ Closure
✓ Callback
✓ Higher Order Functions
✓ Arrays
✓ map()
✓ filter()
✓ reduce()
✓ forEach()
✓ find()
✓ some()
✓ every()
✓ Destructuring
✓ Spread
✓ Rest
✓ Objects
✓ Set
✓ Map
✓ Promise
✓ Async/Await
✓ Fetch
✓ Event Loop
✓ Call Stack
✓ Execution Context
✓ DOM
✓ Local Storage
✓ JSON
✓ Classes
✓ Inheritance
✓ Prototype
✓ Modules
✓ Error Handling
✓ Debouncing
✓ Throttling


===========================================================
IMPORTANT INTERVIEW TIP
===========================================================

Don't only learn the definition.

For every topic, prepare these 4 things:

1. WHAT?
   -> What is it?

2. WHY?
   -> Why do we use it?

3. HOW?
   -> How does it work?

4. EXAMPLE?
   -> Can I write the code myself?


Example:

QUESTION:
Why do we use filter()?

ANSWER:

filter() is used when we want to select only those elements
from an array that satisfy a condition.

Example:

const nums = [1,2,3,4,5];

const result = nums.filter(num => num > 3);

console.log(result);

Output:

[4,5]


This type of explanation is very useful in interviews.


===========================================================
                    END OF JAVASCRIPT NOTES
===========================================================
*/