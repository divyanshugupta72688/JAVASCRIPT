
// ========================================================
// JAVASCRIPT EXECUTION CONTEXT + FUNCTION EXECUTION
// ========================================================

let val1 = 10;

let val2 = 5;

function addNum(num1, num2) {

    let total = num1 + num2;

    return total;
}

let result1 = addNum(val1, val2);

let result2 = addNum(10, 2);

console.log(result1);
console.log(result2);


/*
========================================================
1. GLOBAL EXECUTION CONTEXT
========================================================

Jab JavaScript file execute hoti hai, sabse pehle
GLOBAL EXECUTION CONTEXT create hota hai.

Global Execution Context ke 2 phases hote hain:

1. Memory Creation Phase
2. Execution Phase


--------------------------------------------------------
2. MEMORY CREATION PHASE
--------------------------------------------------------

Is phase mein JavaScript variables aur functions ke liye
memory allocate karta hai.

val1     -> uninitialized
val2     -> uninitialized

addNum   -> complete function definition

result1  -> uninitialized
result2  -> uninitialized

NOTE:
let variables memory mein initially "uninitialized"
state mein hote hain (TDZ).


--------------------------------------------------------
3. EXECUTION PHASE
--------------------------------------------------------

Ab JavaScript code ko line-by-line execute karta hai.

First:

val1 = 10

Second:

val2 = 5


--------------------------------------------------------
4. FIRST FUNCTION CALL
--------------------------------------------------------

Code:

let result1 = addNum(val1, val2);

val1 = 10
val2 = 5

So function call becomes:

addNum(10, 5)


--------------------------------------------------------
5. FUNCTION EXECUTION CONTEXT
--------------------------------------------------------

Jab function call hota hai, JavaScript function ke liye
ek NEW FUNCTION EXECUTION CONTEXT create karta hai.

num1 = 10
num2 = 5

Then:

total = num1 + num2

total = 10 + 5

total = 15

Then:

return total;

Function 15 return karta hai.

So:

result1 = 15

Function execution complete hone ke baad
Function Execution Context remove ho jata hai.


--------------------------------------------------------
6. SECOND FUNCTION CALL
--------------------------------------------------------

Code:

let result2 = addNum(10, 2);

Again NEW Function Execution Context create hoga.

num1 = 10
num2 = 2

total = 10 + 2

total = 12

return total;

So:

result2 = 12

Function Execution Context remove ho jayega.


--------------------------------------------------------
7. FINAL OUTPUT
--------------------------------------------------------

console.log(result1);

15

console.log(result2);

12


========================================================
COMPLETE FLOW
========================================================

              JavaScript File
                     |
                     ↓
        Global Execution Context
                     |
          -----------------------
          |                     |
          ↓                     ↓
 Memory Creation          Execution Phase
    Phase                     |
          |                   ↓
          |              val1 = 10
          |              val2 = 5
          |                   |
          |                   ↓
          |              addNum(10,5)
          |                   |
          |                   ↓
          |          Function Execution Context
          |                   |
          |             num1 = 10
          |             num2 = 5
          |             total = 15
          |                   |
          |                return 15
          |                   |
          |                   ↓
          |              result1 = 15
          |                   |
          |          Function EC removed
          |                   |
          |                   ↓
          |              addNum(10,2)
          |                   |
          |                   ↓
          |          Function Execution Context
          |                   |
          |             num1 = 10
          |             num2 = 2
          |             total = 12
          |                   |
          |                return 12
          |                   |
          |                   ↓
          |              result2 = 12
          |                   |
          |          Function EC removed
          |                   |
          |                   ↓
          |              Output:
          |                15
          |                12


========================================================
INTERVIEW ANSWER
========================================================

INTERVIEWER:
"What happens when this JavaScript code executes?"

YOU:

"Sir, when JavaScript executes this file, first a
Global Execution Context is created.

It has two phases: Memory Creation Phase and
Execution Phase.

During the Memory Creation Phase, memory is allocated
for the variables and the addNum function.

Then during the Execution Phase, val1 gets 10 and
val2 gets 5.

When addNum is called, a new Function Execution Context
is created. The arguments 10 and 5 are assigned to
num1 and num2.

Then total becomes 15 and the function returns 15.
This value is stored in result1 and the Function
Execution Context is removed.

The same process happens for addNum(10, 2), which
returns 12 and stores it in result2.

Finally, the output is 15 and 12."


========================================================
SHORT INTERVIEW ANSWER
========================================================

Agar interviewer bole:

"Explain in short."

Then bolo:

"JavaScript first creates a Global Execution Context,
which has Memory Creation and Execution phases.

When a function is called, a separate Function
Execution Context is created.

The function executes, returns a value, and after
execution its context is removed.

In this example, addNum(10,5) returns 15 and
addNum(10,2) returns 12."


========================================================
INTERVIEW KEYWORDS
========================================================

Global Execution Context
Memory Creation Phase
Execution Phase
Function Execution Context
Function Call
Arguments
Parameters
Return Value
Execution Context Removal
*/


/*
PROGRAM FLOW=>

    Global Execution Context
        ↓
Memory Creation Phase
        ↓
Execution Phase
        ↓
addNum(10, 5)
        ↓
Function Execution Context
        ↓
num1 = 10
num2 = 5
total = 15
        ↓
return 15
        ↓
result1 = 15
        ↓
Function Execution Context ends
        ↓
addNum(10, 2)
        ↓
return 12
        ↓
result2 = 12

*/