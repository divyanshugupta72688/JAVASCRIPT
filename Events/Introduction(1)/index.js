/*
There are 3 common ways to handle events in JavaScript:

1. Inline Event Handling
   HTML ke andar event likhte hain.
   Large projects mein HTML aur JavaScript ko separate rakhna better hota hai.

2. Using Event Properties
   Example: onclick, onmouseenter
   Same event property ko dobara assign karne par previous handler replace ho jata hai.

3. Using addEventListener()
   Ek hi event ke liye multiple event listeners add kar sakte hain.
*/

let btn = document.querySelectorAll('button');
console.dir(btn);

// btn.onclick = function(){
//     alert('button was clicked');
// };

// function sayhello(){
//     console.log('Hi , I am Divyanshu gupta ')
// }
// btn.onclick=sayhello;

// /* sayhelloo function overwrite kar dega pahle vale function ko */
// /* overwrite naa kare isko following way me likh sakte hai! */
// btn.onclick = function(){
//     alert('Maza Aa Gya MaderChod!');
//     sayhello();
// }

// btn.onmouseenter = function(){
//     console.log('you entered a button')
// }


/*
addEventListener->
element.addEventListener(event,callback)
*/

for(bt of btn){
    bt.addEventListener("click",nothing);
    bt.addEventListener("click",everything);
}
function nothing(){
    alert('You Clicked it!');
}

function everything(){
    alert('I lost Everything!')
}