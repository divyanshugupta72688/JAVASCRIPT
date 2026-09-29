/*
============================================================
                    SCOPE
============================================================

Scope = Kisi variable ko code ke kis part mein access
kiya ja sakta hai.
*/


/*
============================================================
17. GLOBAL SCOPE
============================================================
*/
// let , var , const are the keyword.
var c = 300;

console.log(c);

// c ko global scope mein declare kiya gaya hai.


/*
============================================================
18. BLOCK SCOPE
============================================================

{ } ke andar ka area block scope hota hai.
*/

if (true) {

    let a = 200;

    const b = 50;

}

console.log(a); // ❌ Error
console.log(b); // ❌ Error


/*
============================================================
19. VAR AND BLOCK SCOPE
============================================================

var block scoped nahi hota.
*/

var c = 300;

if (true) {

    var c = 30;

}

console.log(c);

// Output:
// 30


/*
============================================================
20. LET IS BLOCK SCOPED
============================================================
*/

let x = 100;

if (true) {

    let x = 200;

    console.log(x); // 200

}

console.log(x); // 100


/*
============================================================
21. CONST IS BLOCK SCOPED
============================================================
*/

const y = 100;

if (true) {

    const y = 200;

    console.log(y); // 200

}

console.log(y); // 100


/*
============================================================
22. VAR REDECLARATION
============================================================

var same scope mein redeclare ho sakta hai.
*/

var number = 10;

var number = 20;

console.log(number);

// Output:
// 20


/*
============================================================
23. LET REDECLARATION
============================================================

let same scope mein redeclare nahi ho sakta.
*/

let age = 22;

// let age = 23; // ❌ Error


/*
============================================================
24. CONST REDECLARATION
============================================================

const same scope mein redeclare nahi ho sakta.
*/

const city = "Noida";

// const city = "Delhi"; // ❌ Error


/*
============================================================
25. VAR vs LET vs CONST
============================================================

var:
    - Function scoped
    - Block scoped nahi hai
    - Redeclaration allowed
    - Reassignment allowed

let:
    - Block scoped
    - Redeclaration NOT allowed in same scope
    - Reassignment allowed

const:
    - Block scoped
    - Redeclaration NOT allowed
    - Reassignment NOT allowed
*/


/*
============================================================
26. REASSIGNMENT
============================================================
*/

// var
var salary = 40000;

salary = 50000;

console.log(salary);

// Output:
// 50000


// let
let marks = 80;

marks = 90;

console.log(marks);

// Output:
// 90


// const
const pi = 3.14;

// pi = 3.15; // ❌ Error


/*
============================================================
27. IMPORTANT EXAMPLE
============================================================
*/

let score = 100;

if (true) {

    let score = 200;

    console.log("Inside:", score);

}

console.log("Outside:", score);

// Output:
// Inside: 200
// Outside: 100


/*
============================================================
28. FUNCTION SCOPE
============================================================

Function ke andar declare kiya gaya variable normally
function ke bahar accessible nahi hota.
*/

function example() {

    let message = "Hello";

    console.log(message);

}

example();

// console.log(message); // ❌ Error



/*
============================================================
31. QUICK REVISION
============================================================
   

SCOPE
    -> Variable kaha accessible hai

var
    -> Function scoped

let
    -> Block scoped

const
    -> Block scoped

============================================================
                    END
============================================================
*/

