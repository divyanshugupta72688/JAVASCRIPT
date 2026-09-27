
/*
============================================================
          JAVASCRIPT - THIS KEYWORD & ARROW FUNCTIONS
============================================================


============================================================
1. THIS KEYWORD
============================================================

Definition:

"this refers to the current calling object or execution
context, depending on how the function is called."

IMPORTANT:

`this` ka value function ko kaise call kiya gaya hai,
us par depend karta hai.
*/


/*
============================================================
2. THIS INSIDE OBJECT METHOD
============================================================
*/

const user = {

    username: "Divyanshu Gupta",

    price: 999,

    WelcomeMsg: function () {

        console.log(`${this.username}, welcome to the website`);

        console.log(this);

    }

};

user.WelcomeMsg();

/*
Output:

Divyanshu Gupta, welcome to the website

Yahan:

user.WelcomeMsg();

`this` -> user object

Therefore:

this.username
       ↓
user.username
       ↓
"Divyanshu Gupta"
*/


/*
============================================================
3. CHANGING OBJECT PROPERTY
============================================================
*/

user.username = "Ayush Gupta";

user.WelcomeMsg();

/*
Output:

Ayush Gupta, welcome to the website

Because:

this.username
       ↓
user.username
       ↓
"Ayush Gupta"
*/


/*
============================================================
4. THIS DOES NOT MEAN "PARENT"
============================================================

IMPORTANT:

`this` ko simply "parent object" mat samjho.

`this` ka value function ko kaise call kiya gaya hai,
uske according determine hota hai.

Object method mein:

user.WelcomeMsg();

`this` -> user
*/


/*
============================================================
5. THIS IN NORMAL FUNCTION
============================================================
*/

function one() {

    console.log(this);

}

one();

/*
Normal function mein `this` ka behavior environment aur
strict mode ke according change ho sakta hai.

Strict mode mein:

this -> undefined

Non-strict browser/older behavior mein `this` global object
ko refer kar sakta hai.
*/


/*
============================================================
6. THIS.PROPERTY
============================================================
*/

function checkThis() {

    console.log(this.username);

}

checkThis();

/*
Agar current `this` context mein username property
available nahi hai, to:

undefined

aa sakta hai.
*/


/*
============================================================
7. ARROW FUNCTION
============================================================

Arrow function ka syntax:

const functionName = () => {

    // code

};
*/

const sayHello = () => {

    console.log("Hello Divyanshu");

};

sayHello();


/*
============================================================
8. ARROW FUNCTION AND THIS
============================================================

IMPORTANT:

Arrow function ka apna `this` nahi hota.

Arrow function `this` ko surrounding lexical scope se
inherit karta hai.
*/


const chai = () => {

    let username = "Divyanshu Gupta";

    console.log(this.username);

    console.log(this);

};

chai();

/*
IMPORTANT:

Yahan `this` chai arrow function ka own `this` nahi hai.

Arrow function surrounding scope ka `this` use karega.

Therefore:

this.username

aur:

username

same nahi hain.
*/


/*

============================================================
                    END
============================================================
*/