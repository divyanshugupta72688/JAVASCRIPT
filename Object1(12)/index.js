// OBJECT → IT IS USED TO STORE DATA IN THE FORM OF KEY-VALUE PAIRS

// OBJECT LITERAL

let student = {

name: "Divyanshu",
"full name": "Divyanshu Gupta",
age: 22,
branch: "CSE"
};

/*
name       → key
Divyanshu  → value
age        → key
22         → value
"full name" → key
"Divyanshu Gupta" → value

*/

// OBJECT ACCESS

console.log(student.name);
console.log(student["name"]);

// If a key contains spaces, bracket notation is required.
console.log(student["full name"]);

// student.full name ❌
// This is invalid because the key contains a space.

// SOME IMPORTANT OBJECT METHODS

// 1. WE CAN CHANGE THE VALUE OF A KEY

student.name = "Ayush Gupta";
console.log(student);

// 2. OBJECT.freeze()
/*
Object.freeze() freezes an object.

After freezing:

1. We cannot change existing values.
2. We cannot add new properties.
3. We cannot delete existing properties.
   */

Object.freeze(student);

student.age = 18;
console.log(student);
// age will remain 22 because the object is frozen.

student.city = "Noida";
console.log(student);// city will NOT be added.

delete student.branch;
console.log(student);// branch will NOT be deleted.

