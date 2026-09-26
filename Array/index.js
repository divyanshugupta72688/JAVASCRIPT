/*

ARRAY

An Array is an object in JavaScript that allows us to store
multiple items in a single variable.

JavaScript arrays can store different data types simultaneously,
such as Number, String, Boolean, Object, etc.

*/

let arr = [1, 2, 5, "Divyanshu"];

console.log(arr[3]); // Divyanshu

// WE CAN DECLARE AN ARRAY IN ANOTHER WAY

let arr2 = new Array(1, 2, 3);

/*

JAVA vs JAVASCRIPT

In Java, normally an array stores elements of the same data type.

For example:

String[] arr = {"Divyanshu", "Ansh", "Vaibhav"};

int[] arr2 = {1, 2, 3};

If we want to store different types of values in a Java array,
we can use Object[]:

Object[] arr = {"Divyanshu", 25, "Java", 90};

In JavaScript, we can directly create a mixed-type array:

let arr = ["Divyanshu", 25, true, 90];

*/

// ++++++++++++++++++++++ ARRAY METHODS ++++++++++++++++++++++++

// 1. PUSH METHOD
/*
push() adds an element at the END of the array
and returns the NEW LENGTH of the array.
It also modifies the original array.
*/

let arr3 = [1, 2, 3, 4, 5, 6, 7];

console.log(arr3.push("Divyanshu")); // 8
arr3.push("Sakshi");
console.log(arr3);// [1, 2, 3, 4, 5, 6, 7, "Divyanshu", "Sakshi"]

// 2. UNSHIFT METHOD
/*
unshift() adds an element at the START of the array
and returns the NEW LENGTH of the array.
It may be slower for large arrays because
existing elements have to be shifted to new indexes.
*/

console.log(arr3.unshift("Rahul"));
console.log(arr3);// ["Rahul", 1, 2, 3, 4, 5, 6, 7, "Divyanshu", "Sakshi"]

// 3. POP METHOD
/*
pop() removes the LAST element from the array
and returns the REMOVED ELEMENT.
It modifies the original array.
*/

console.log(arr3.pop()); // Sakshi
console.log(arr3);

// 4. SHIFT METHOD
/*
shift() removes the FIRST element from the array
and returns the REMOVED ELEMENT.
It may be slower for large arrays because
the remaining elements have to be shifted to new indexes.
It modifies the original array.
*/

console.log(arr3.shift()); // Rahul
console.log(arr3);//[ 1, 2, 3, 4, 5, 6, 7, 'Divyanshu' ]

//4. includes

console.log(arr3.includes(3))// true
console.log(arr3.includes(48));// false

//5. indexof

console.log(arr3.indexOf("Divyanshu"))//7
console.log(arr3.indexOf(19))//-1

//6.slice(slice array ko manipulate nahi krta hai)

let arr5 = [10, 20, 30, 40, 50];
let result = arr5.slice(1, 4);
console.log(result);//[20, 30, 40]
console.log(arr5);//[10, 20, 30, 40, 50]

//7. splice()array ko manipulate krta hai

let arr6 = [10, 20, 30, 40, 50];
let result1 = arr6.splice(1, 2);
console.log(result1);//[20, 30]
console.log(arr6);//[10, 40, 50]

