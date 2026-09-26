/*
====================================================
                JAVASCRIPT FUNCTIONS
====================================================

Function = A block of code that performs a specific
task and can be reused multiple times.

----------------------------------------------------
1. FUNCTION DEFINITION / DECLARATION
----------------------------------------------------
*/

function sayMyNames() {
    console.log("Divyanshu Gupta");
}


/*
----------------------------------------------------
2. FUNCTION CALL / INVOCATION
----------------------------------------------------

Function ko execute karne ke liye function ko call karte hain.
*/

sayMyNames();

// sayMyNames   -> Function Reference
// sayMyNames() -> Function Call / Invocation


/*
----------------------------------------------------
3. FUNCTION WITH PARAMETERS
----------------------------------------------------

Parameter = Function definition ke time jo variables
hum input receive karne ke liye banate hain.
*/

function add(number1, number2) {
    console.log(number1 + number2);
}


/*
----------------------------------------------------
4. ARGUMENTS
----------------------------------------------------

Argument = Function call ke time jo actual values
hum pass karte hain.
*/

add(3, 4);

// number1 and number2 -> Parameters
// 3 and 4             -> Arguments

// Output:
// 7


/*
----------------------------------------------------
5. FUNCTION WITH RETURN
----------------------------------------------------

return kisi value ko function ke bahar bhejta hai.
*/

function subtract(number1, number2) {

    let result = number1 - number2;

    return result;
}

let ans = subtract(10, 3);

console.log("ans:", ans);

// Output:
// ans: 7


/*
----------------------------------------------------
6. RETURN VALUE DIRECTLY
----------------------------------------------------
*/

function multiply(number1, number2) {
    return number1 * number2;
}

let result = multiply(5, 4);

console.log("result:", result);

// Output:
// result: 20


/*
----------------------------------------------------
7. FUNCTION WITHOUT RETURN
----------------------------------------------------

Agar function mein return nahi hai, to function
by default undefined return karta hai.
*/

function hello() {
    console.log("Hello Divyanshu");
}

let value = hello();

console.log(value);

// Output:
// Hello Divyanshu
// undefined


/*
----------------------------------------------------
8. FUNCTION WITH USERNAME
----------------------------------------------------
*/

function loginUserMessage(username) {

    return `${username} just logged in`;
}

console.log(loginUserMessage("Divyanshu"));

// Output:
// Divyanshu just logged in


/*
----------------------------------------------------
9. IF ARGUMENT IS NOT PASSED
----------------------------------------------------

Agar argument pass nahi karte hain, parameter ki
value undefined ho jaati hai.
*/

console.log(loginUserMessage());

// Output:
// undefined just logged in


/*
----------------------------------------------------
10. DEFAULT PARAMETER
----------------------------------------------------

Agar argument pass nahi kiya gaya, to default
value use hoti hai.
*/

function greet(name = "Guest") {

    return `Hello ${name}`;
}

console.log(greet("Divyanshu"));
console.log(greet());

// Output:
// Hello Divyanshu
// Hello Guest


/*
----------------------------------------------------
11. DEFAULT PARAMETER WITH CALCULATION
----------------------------------------------------
*/

function calculatePrice(price, tax = 18) {

    return price + (price * tax / 100);
}

console.log(calculatePrice(1000));

// Output:
// 1180


/*
----------------------------------------------------
12. CHECKING EMPTY INPUT
----------------------------------------------------

!name ka use karke hum falsy values check kar sakte hain.
*/

function checkName(name) {

    if (!name) {
        console.log("Please enter your name!");
        return;
    }

    return `Hello ${name}`;
}

console.log(checkName("Divyanshu"));
console.log(checkName(""));


// Output:
// Hello Divyanshu
// Please enter your name!


/*
====================================================
              IMPORTANT TERMINOLOGY
====================================================

Function Definition:
    function add(a, b) {
        return a + b;
    }

Parameters:
    a and b

Function Call:
    add(10, 20)

Arguments:
    10 and 20

Return:
    return a + b;

====================================================
              PARAMETER vs ARGUMENT
====================================================

Parameter -> Function definition ke time

Argument  -> Function call ke time

Example:
*/

function addition(a, b) {   // a and b = PARAMETERS

    return a + b;
}

addition(10, 20);           // 10 and 20 = ARGUMENTS


/*
====================================================
                  QUICK SUMMARY
====================================================

1. function keyword
   -> Function create karne ke liye

2. Function Name
   -> Function ko identify karne ke liye

3. Parameters
   -> Input receive karne ke liye

4. Arguments
   -> Actual values jo function call ke time pass hoti hain

5. return
   -> Value ko function ke bahar bhejne ke liye

6. Function Call
   -> Function ko execute karne ke liye

7. Default Parameter
   -> Argument na milne par default value use hoti hai

====================================================
*/
