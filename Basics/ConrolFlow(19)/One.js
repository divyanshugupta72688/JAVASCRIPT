
// ========================================================
//                CONTROL FLOW IN JAVASCRIPT
// ========================================================

/*
CONTROL FLOW:

Control flow means the order in which JavaScript
executes statements in a program.

Normally code top-to-bottom execute hota hai,
but control flow statements hume decide karne dete hain
ki kaunsa code execute hoga aur kitni baar execute hoga.


MAIN CONTROL FLOW STATEMENTS:

1. if
2. if-else
3. else-if
4. switch
5. for loop
6. while loop
7. do-while loop
8. break
9. continue
*/


// ========================================================
// 1. IF STATEMENT
// ========================================================

/*
if statement tab code execute karta hai jab condition true ho.
*/

let age = 22;

if (age >= 18) {
    console.log("You are eligible to vote");
}

// Output:
// You are eligible to vote


// ========================================================
// 2. IF-ELSE STATEMENT
// ========================================================

/*
Agar condition true hai -> if block execute hoga.
Agar condition false hai -> else block execute hoga.
*/

let age2 = 16;

if (age2 >= 18) {
    console.log("Eligible to vote");
} else {
    console.log("Not eligible to vote");
}

// Output:
// Not eligible to vote


// ========================================================
// 3. ELSE-IF
// ========================================================

/*
Jab multiple conditions check karni ho,
tab else-if use karte hain.
*/

let marks = 85;

if (marks >= 90) {
    console.log("Grade A+");
} else if (marks >= 80) {
    console.log("Grade A");
} else if (marks >= 70) {
    console.log("Grade B");
} else if (marks >= 60) {
    console.log("Grade C");
} else {
    console.log("Fail");
}

// Output:
// Grade A


// ========================================================
// 4. NESTED IF
// ========================================================

/*
Ek if ke andar doosra if = Nested if
*/

let age3 = 22;
let hasLicense = true;

if (age3 >= 18) {

    if (hasLicense) {
        console.log("You can drive");
    }

}

// Output:
// You can drive


// ========================================================
// 5. SWITCH STATEMENT
// ========================================================

/*
Switch ka use tab hota hai jab ek value ko
multiple possible values ke saath compare karna ho.
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
        console.log("Invalid day");
}

// Output:
// Tuesday


/*
IMPORTANT:

break ka use switch ko stop karne ke liye hota hai.

Agar break nahi lagaya, to JavaScript next cases
ko bhi execute kar sakta hai (fall-through).
*/


// ========================================================
// 6. FOR LOOP
// ========================================================

/*
Jab hume pata ho ki code ko approximately kitni baar
execute karna hai, for loop commonly use hota hai.
*/

for (let i = 1; i <= 5; i++) {

    console.log(i);

}

// Output:
// 1
// 2
// 3
// 4
// 5


/*
FOR LOOP KE 3 PARTS:

for (initialization; condition; update)

for (let i = 1; i <= 5; i++)

1. let i = 1       -> Initialization
2. i <= 5          -> Condition
3. i++             -> Update
*/


// ========================================================
// 7. WHILE LOOP
// ========================================================

/*
Jab tak condition true hai,
while loop execute hota rahega.
*/

let i = 1;

while (i <= 5) {

    console.log(i);

    i++;
}

// Output:
// 1
// 2
// 3
// 4
// 5


// ========================================================
// 8. DO-WHILE LOOP
// ========================================================

/*
do-while loop mein code minimum ek baar execute hota hai,
chahe condition false hi kyu na ho.
*/

let j = 1;

do {

    console.log(j);

    j++;

} while (j <= 5);

// Output:
// 1
// 2
// 3
// 4
// 5


// Example:

let k = 10;

do {

    console.log("Hello");

    k++;

} while (k < 5);

// Output:
// Hello

/*
Condition false thi:

10 < 5 -> false

Lekin do block pehle execute hua,
isliye "Hello" ek baar print hua.
*/


// ========================================================
// 9. BREAK
// ========================================================

/*
break loop ko immediately stop kar deta hai.
*/

for (let i = 1; i <= 10; i++) {

    if (i === 5) {
        break;
    }

    console.log(i);
}

// Output:
// 1
// 2
// 3
// 4


// ========================================================
// 10. CONTINUE
// ========================================================

/*
continue current iteration ko skip karta hai
aur next iteration par chala jata hai.
*/

for (let i = 1; i <= 5; i++) {

    if (i === 3) {
        continue;
    }

    console.log(i);
}

// Output:
// 1
// 2
// 4
// 5


/*
BREAK vs CONTINUE

break:
    -> Complete loop ko stop karta hai.

continue:
    -> Sirf current iteration ko skip karta hai.
*/


// ========================================================
// 11. TRUTHY AND FALSY VALUES
// ========================================================

/*
JavaScript conditions mein values ko
true ya false ke form mein evaluate karta hai.

Common FALSY values:

false
0
-0
0n
""
null
undefined
NaN

Baaki most values TRUTHY hoti hain.

Example:
*/

let username = "";

if (username) {
    console.log("Username exists");
} else {
    console.log("Username does not exist");
}

// Output:
// Username does not exist


// ========================================================
// 12. COMPARISON OPERATORS
// ========================================================

/*

==   -> Loose equality
===  -> Strict equality
!=   -> Loose inequality
!==  -> Strict inequality
>    -> Greater than
<    -> Less than
>=   -> Greater than or equal
<=   -> Less than or equal

Interview mein generally === aur !== prefer kiye jaate hain.
*/

console.log(5 == "5");   // true
console.log(5 === "5");  // false
console.log(5 !== 5);     // false
console.log(5 !== "5");   // true

/*
===  → Kya dono EXACTLY SAME hain?
!==  → Kya dono EXACTLY SAME NAHI hain?
*/
// ========================================================
// 13. LOGICAL OPERATORS
// ========================================================

/*

&&  -> AND
||  -> OR
!   -> NOT
*/

let userAge = 22;
let hasID = true;

if (userAge >= 18 && hasID) {
    console.log("Entry allowed");
}

// Output:
// Entry allowed


// ========================================================
// 14. TERNARY OPERATOR
// ========================================================

/*
Ternary operator if-else ka short form hai.

condition ? true_value : false_value
*/

let userAge2 = 20;

let message = userAge2 >= 18? "Adult": "Minor";

console.log(message);

// Output:
// Adult


// ========================================================
//              INTERVIEW ANSWER
// ========================================================

/*
INTERVIEWER:

"What is Control Flow in JavaScript?"

YOU:

"Control flow refers to the order in which statements
are executed in a JavaScript program.

Normally JavaScript executes code sequentially,
but control flow statements allow us to make decisions,
repeat code, or change the normal execution flow.

For example, we can use if-else and switch for
decision making, loops like for, while and do-while
for repetition, and break and continue to control loops."
*/


// ========================================================
//              SHORT INTERVIEW ANSWER
// ========================================================

/*
"Control flow determines the order in which JavaScript
statements are executed.

if-else and switch are used for decision making,
loops are used for repetition, and break and continue
are used to control loop execution."
*/


// ========================================================
//              QUICK REVISION
// ========================================================

/*

DECISION MAKING:

if
if-else
else-if
switch
ternary operator


LOOPS:

for
while
do-while


LOOP CONTROL:

break
continue


LOGICAL OPERATORS:

&&
||
!


COMPARISON:

==
===
!=
!==
>
<
>=
<=


IMPORTANT DIFFERENCE:

if-else
    -> Decision making

switch
    -> Multiple fixed cases

for
    -> Repetition

while
    -> Repetition, condition checked first

do-while
    -> Executes at least once

break
    -> Completely stops loop/switch

continue
    -> Skips current iteration
*/
 /*

============================================================
                    END
============================================================
*/