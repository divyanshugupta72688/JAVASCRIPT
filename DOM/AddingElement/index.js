let oldp = document.querySelector('p');
let newp = document.createElement('p');
newp.innerText = 'Everything Will be Fine At the end !'
let newh = document.createElement('h1');
newh.innerText = ' Said By Divyanshu Gupta.';
oldp.append(newh,newp,"End of the day!");

/*
appendChild() adds a single DOM node to the end of a parent element and returns that node.
append() can add multiple DOM nodes and text strings at the end of a parent element. It returns undefined.
*/

let btn = document.createElement("button");
btn.innerText = 'Click me !'
oldp.appendChild(btn);

/*
appendChild()	                              append()
Sirf DOM Node accept karta hai.	                 DOM Node aur string dono accept karta hai.
Ek baar mein ek Node add karta hai.	             Ek baar mein multiple items add kar sakta hai.
Added Node return karta hai.	                 undefined return karta hai.

append ki tarah ki prepand bhi work karta hai !
*/

/*
insertAdjacentElement(position, element)
position->
'beforebegin': Before the targetElement itself.
'afterbegin': Just inside the targetElement, before its first child.
'beforeend': Just inside the targetElement, after its last child.
'afterend': After the targetElement itself.
*/


/* beforebegin */
let secondbtn = document.createElement("button");
secondbtn.innerText = "Dont click !"
oldp.insertAdjacentElement('beforebegin',secondbtn);

/* afterbegin */
let thirdbtn = document.createElement("button");
thirdbtn.innerText = "Don't click at third button !"
oldp.insertAdjacentElement('afterbegin',thirdbtn);

// we can directly remove 
thirdbtn.remove();