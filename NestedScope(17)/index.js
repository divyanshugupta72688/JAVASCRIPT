
/*
============================================================
             JAVASCRIPT - NESTED SCOPE & HOISTING
============================================================


============================================================
1. NESTED SCOPE
============================================================

Jab ek function ke andar doosra function define hota hai,
use Nested Scope kehte hain.

Example:
*/

function one() {

    const username = "Divyanshu";

    function two() {

        const website = "Youtube";

        console.log(username);

    }

    two();
}

one();

// Output:
// Divyanshu


/*
------------------------------------------------------------
IMPORTANT:

Function two() ke andar username directly declared nahi hai.

Lekin username function one() ke scope mein available hai.

Isliye two() username ko access kar sakta hai.
*/


/*
============================================================
2. CHILD CAN ACCESS PARENT
============================================================

Child scope apne parent/outer scope ke variables ko
access kar sakta hai.
*/

function parent() {

    const name = "Divyanshu";

    function child() {

        console.log(name);

    }

    child();
}

parent();

// Output:
// Divyanshu


/*
============================================================
3. PARENT CANNOT ACCESS CHILD
============================================================

Parent scope child ke variables ko directly access nahi
kar sakta.
*/

function parentFunction() {

    function childFunction() {

        const website = "Youtube";

    }

    // console.log(website); // ❌ Error

}

parentFunction();



