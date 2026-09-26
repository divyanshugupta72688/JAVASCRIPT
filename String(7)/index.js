// String are the sequence of character

let name = "Divyanshu";
let lastname = "Gupta";
console.log(name+" "+lastname);

console.log(`my name is ${name}${lastname}`);

// ===============================
// STRING MANIPULATION
// ===============================

let str = "Hello Bachho";


// 1. length
console.log(str.length);
// Output: 12


// 2. Character access
console.log(str[0]);
// Output: H

console.log(str.charAt(1));
// Output: e


// 3. toUpperCase()
console.log(str.toUpperCase());
// Output: HELLO BACHHO


// 4. toLowerCase()
console.log(str.toLowerCase());
// Output: hello bachho


// 5. trim()
let str2 = "   Hello Bachho   ";

console.log(str2.trim());
// Output: Hello Bachho


// 6. slice()
console.log(str.slice(0, 5));
// Output: Hello

console.log(str.slice(6));
// Output: Bachho


// 7. substring()
console.log(str.substring(0, 5));
// Output: Hello


// 8. replace()
console.log(str.replace("Bachho", "Students"));
// Output: Hello Students


// 9. replaceAll()
let str3 = "Java Java Java";

console.log(str3.replaceAll("Java", "JS"));
// Output: JS JS JS


// 10. split()
console.log(str.split(" "));
// Output: [ 'Hello', 'Bachho' ]


// 11. includes()
console.log(str.includes("Hello"));
// Output: true

console.log(str.includes("Java"));
// Output: false


// 12. indexOf()
console.log(str.indexOf("Bachho"));
// Output: 6

console.log(str.indexOf("Java"));
// Output: -1


// 13. startsWith()
console.log(str.startsWith("Hello"));
// Output: true


// 14. endsWith()
console.log(str.endsWith("Bachho"));
// Output: true


// 15. concat()
let first = "Hello";
let second = "World";

console.log(first.concat(" ", second));
// Output: Hello World

