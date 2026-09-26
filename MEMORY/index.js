// ===============================
// JAVASCRIPT MEMORY
// ===============================

// JavaScript memory ko samajhne ke liye
// generally 2 concepts use kiye jaate hain:
//
// 1. STACK
// 2. HEAP


// ===============================
// 1. STACK MEMORY
// ===============================

/*
Stack mein primitive values aur
execution-related data conceptually store hote hain.

Primitive Data Types:
- Number
- String
- Boolean
- Undefined
- Null
- BigInt
- Symbol

Jab hum primitive value ko ek variable se
doosre variable mein assign karte hain,
to value ki COPY milti hai.

Example:
*/

let a = 10;

let b = a;

b = 20;

console.log(a); // 10
console.log(b); // 20

/*
Yahan 'b' ko 'a' ki value ki copy mili.

Isliye 'b' ko change karne par
'a' ki value change nahi hui.
*/


// ===============================
// 2. HEAP MEMORY
// ===============================

/*
Objects, Arrays aur Functions jaise
reference-type values ke liye heap memory
ka concept use kiya jaata hai.

Jab hum ek object ko doosre variable mein
assign karte hain, dono variables same
object ko refer kar sakte hain.

Example:
*/

let obj1 = {
    name: "Divyanshu"
};

let obj2 = obj1;

obj2.name = "Rahul";

console.log(obj1.name); // Rahul
console.log(obj2.name); // Rahul

/*
Yahan obj1 aur obj2 same object ko refer
kar rahe hain.

Isliye obj2.name change karne par
obj1.name se bhi changed value milti hai.


// ===============================
// SIMPLE RULE
// ===============================

Primitive  -> Copy of Value
Object     -> Reference to Same Object


// IMPORTANT:
// "Primitive always Stack mein aur Object always Heap mein"
// JavaScript ka strict rule nahi hai.
// Ye ek conceptual model hai memory samajhne ke liye.
*/