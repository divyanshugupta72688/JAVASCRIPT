// ======================================================
// JAVASCRIPT map() — COMPLETE PRACTICE FILE
// ======================================================

/*
map()=>
        “The map() method is used to transform each element of an array and returns a new array containing the transformed elements.
 It does not modify the original array.”
*/


// ------------------------------------------------------
// CASE 1: Basic map()
// Question: Har number ko double karo
// ------------------------------------------------------

const nums1 = [1, 2, 3, 4, 5];

const result1 = nums1.map((num) => num * 2);

console.log("Case 1:", result1);
// [2, 4, 6, 8, 10]


// ------------------------------------------------------
// CASE 2: Har number me 10 add karo
// ------------------------------------------------------

const nums2 = [1, 2, 3, 4, 5];

const result2 = nums2.map((num) => num + 10);

console.log("Case 2:", result2);
// [11, 12, 13, 14, 15]


// ------------------------------------------------------
// CASE 3: Square of every number
// ------------------------------------------------------

const nums3 = [1, 2, 3, 4, 5];

const squares = nums3.map((num) => num * num);

console.log("Case 3:", squares);
// [1, 4, 9, 16, 25]


// ------------------------------------------------------
// CASE 4: Cube of every number
// ------------------------------------------------------

const nums4 = [1, 2, 3, 4];

const cubes = nums4.map((num) => num ** 3);

console.log("Case 4:", cubes);
// [1, 8, 27, 64]


// ------------------------------------------------------
// CASE 5: Convert numbers to strings
// ------------------------------------------------------

const nums5 = [10, 20, 30];

const stringNumbers = nums5.map((num) => String(num));

console.log("Case 5:", stringNumbers);
// ["10", "20", "30"]


// ------------------------------------------------------
// CASE 6: Convert strings to uppercase
// ------------------------------------------------------

const names = ["rahul", "aman", "rohit", "vikas"];

const upperNames = names.map((name) => name.toUpperCase());

console.log("Case 6:", upperNames);
// ["RAHUL", "AMAN", "ROHIT", "VIKAS"]


// ------------------------------------------------------
// CASE 7: Get length of every string
// ------------------------------------------------------

const names2 = ["Rahul", "Aman", "Rohit"];

const nameLengths = names2.map((name) => name.length);

console.log("Case 7:", nameLengths);
// [5, 4, 5]


// ------------------------------------------------------
// CASE 8: Objects
// Question: Sirf names ki new array banao
// ------------------------------------------------------

const students = [
    { name: "Rahul", marks: 80 },
    { name: "Aman", marks: 70 },
    { name: "Rohit", marks: 90 }
];

const studentNames = students.map((student) => student.name);

console.log("Case 8:", studentNames);
// ["Rahul", "Aman", "Rohit"]


// ------------------------------------------------------
// CASE 9: Objects
// Question: Sirf marks ki array banao
// ------------------------------------------------------

const marks = students.map((student) => student.marks);

console.log("Case 9:", marks);
// [80, 70, 90]


// ------------------------------------------------------
// CASE 10: Object ko modify karke NEW objects banana
// ------------------------------------------------------

const students2 = [
    { name: "Rahul", marks: 80 },
    { name: "Aman", marks: 70 },
    { name: "Rohit", marks: 90 }
];

const updatedStudents = students2.map((student) => {
    return {
        name: student.name,
        marks: student.marks + 5
    };
});

console.log("Case 10:", updatedStudents);

// ------------------------------------------------------
// CASE 11: CHAINING METHOD
// ------------------------------------------------------

const mynums = [1,2,3,4,5,6,7,8,9,10];
const newnums = mynums.map((num)=>num*10).map((num)=>num+1).filter((num)=>num>40);
console.log(newnums);


// ======================================================
// INTERVIEW IMPORTANT
// ======================================================

/*

map():

1. map() har element par callback function chalata hai.

2. map() ek NEW ARRAY return karta hai.

3. Usually map() ka use data ko TRANSFORM karne ke liye hota hai.

4. Original array normally unchanged rehta hai.

5. map() ka output array ki length same hoti hai.

Example:

const nums = [1, 2, 3];

const result = nums.map((num) => num * 2);

Input:
[1, 2, 3]

Transformation:
1 -> 2
2 -> 4
3 -> 6

Output:
[2, 4, 6]

*/


// ======================================================
// FILTER vs MAP
// ======================================================

const numbers = [1, 2, 3, 4, 5];


// FILTER
// Elements ko SELECT karta hai

const filtered = numbers.filter((num) => num > 3);

console.log("Filter:", filtered);
// [4, 5]


// MAP
// Elements ko TRANSFORM karta hai

const mapped = numbers.map((num) => num * 10);

console.log("Map:", mapped);
// [10, 20, 30, 40, 50]


// ======================================================
// INTERVIEW ONE-LINER
// ======================================================

/*

filter() -> Select elements

map()    -> Transform elements

Example:

[1, 2, 3, 4, 5]

filter(num > 3)
        ↓
[4, 5]


map(num * 10)
        ↓
[10, 20, 30, 40, 50]

*/