/*THERE ARE TWO TYPES OF DATA TYPES (BASED ON HOW TO STORE DATA IN THE MEMORY AND
 HOW TO ACCESS THAT DATA).
1.(PREMETIVE DATA TYPES(CALL BY VALUE))->STRING,NUMBER,BOOLEAN,NULL(EMPTY),UNDEFIND,
Symbole,BigINt
2.NON PREMETIVE DATA(CALL BY REFERNCE)->YE VO VALUE HAI JO MEMORY ME REFERNCE DIYA JAA SAKTA HAI
ARRAY,OBJECTS,FUNCTIONS
JAVA SCRIPT IS A Dynamically typed
*/

//PREMETIVE DATATYPE->

const score = 100//Number
const scorevalue = 100.3//Number
const isLoggedIn = false//boolean
const outside = null;// null
let userEmail;// Undefined
const id = Symbol('123');

//NON PREMETIVE DATA TYPES->
const heros = ["shaktiman","naagraj","doga"];// arrays
let myobj = {// object
    name : "Divyanshu Gupta",
    age  : 23
}

let myfunc = function(){//function
    console.log("Hello Bachho !");
    
}
console.log(myfunc());

console.log(typeof heros);//object
console.log(typeof outside)// object
console.log(typeof myobj);
