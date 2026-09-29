/*
filter=>
        “The filter() method is used to create a new array containing only those elements that satisfy a given condition.
 It does not modify the original array.”
*/
const mynums = [1,2,3,4,5,6,7,8,9,10];
const newnums = mynums.filter((num)=>num>4);
console.log(newnums);//[ 5, 6, 7, 8, 9, 10 ]
/*
you can write line no.2 in other way
const newnums = mynums.filter((num)=>{
    return num>4;
    })
*/

const names = ["Aman", "Rahul", "Rohit", "Raj", "Divyanshu"];
const longNames = names.filter((name) => name.length > 5);
console.log("Case 6:", longNames);// ["Divyanshu"]


// object
const students = [
    { name: "Rahul", marks: 80 },
    { name: "Aman", marks: 35 },
    { name: "Rohit", marks: 65 },
    { name: "Vikas", marks: 30 }
];
const passedStudents = students.filter(
    (student) => student.marks >= 40
);
console.log("Case 8:", passedStudents);//Case 8: [ { name: 'Rahul', marks: 80 }, { name: 'Rohit', marks: 65 } ]

// ------------------------------------------------------
// CASE 9: Objects
// Question: Age >= 18 wale persons
// ------------------------------------------------------

const persons = [
    { name: "Rahul", age: 20 },
    { name: "Aman", age: 16 },
    { name: "Rohit", age: 25 },
    { name: "Vikas", age: 15 }
];
const adults = persons.filter((person) => person.age >= 18);
console.log("Case 9:", adults);//Case 9: [ { name: 'Rahul', age: 20 }, { name: 'Rohit', age: 25 } ]

// ------------------------------------------------------
// CASE 11: Multiple conditions
// Question:
// Age >= 18 AND city = "Delhi"
// ------------------------------------------------------

const users = [
    { name: "Rahul", age: 22, city: "Delhi" },
    { name: "Aman", age: 17, city: "Delhi" },
    { name: "Rohit", age: 25, city: "Mumbai" },
    { name: "Vikas", age: 30, city: "Delhi" }
];
const selectedUsers = users.filter(
    (user) => user.age >= 18 && user.city === "Delhi"
);
console.log("Case 11:", selectedUsers);
/* 
Case 11: [
  { name: 'Rahul', age: 22, city: 'Delhi' },
  { name: 'Vikas', age: 30, city: 'Delhi' }
]
*/

// ======================================================
// IMPORTANT INTERVIEW POINT
// ======================================================

/*
filter():

1. Original array ko modify nahi karta.
2. Ek NEW ARRAY return karta hai.
3. Callback function har element par run hota hai.
4. Callback true return karega -> element new array me jayega.
5. Callback false return karega -> element nahi jayega.

Syntax:

array.filter((element) => condition);

OR

array.filter((element) => {
    return condition;
});
*/