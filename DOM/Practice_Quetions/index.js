/*
Quetion1->add paragraph text that says "hey i am red"
*/

let body = document.querySelector('body');
let newp = document.createElement('p');
newp.innerText = 'Hey i m red!'
newp.style.color = 'red';
body.append(newp);


/*
Quetion2->a <div> with a black border and pink background color with the following element.
     .another<h1> that says "i am in div"
     . a <p> that says "Me Too !"
*/

let div = document.createElement("div");
div.style.backgroundColor = 'pink'
div.style.border = '2px solid black';
body.append(div);
let secondheading = document.createElement('h1');
secondheading.innerText = 'i am in div !'
let secondp = document.createElement('p');
secondp.innerText = 'Mee Too!'
div.append(secondheading,secondp);

/*

🎯 Question 3 — Ab khud solve karo!

Ek <button> create karo aur:

Button ka text "Click Me!" rakho.
Background color yellow rakho.
Text color red rakho.
Button ko <div> ke andar append karo jo tumne Question 2 mein banaya hai.
*/

let btn = document.createElement("button");
btn.innerText = 'Click Me!'
btn.style.backgroundColor = 'yellow';
btn.style.color = 'red';
div.append(btn);
