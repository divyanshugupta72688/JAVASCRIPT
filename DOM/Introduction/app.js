console.dir(document.querySelector("h1"));
console.dir(document.querySelector("p"));

/*
IF U WANT TO SELECT ANCHOR TAG IN DIV THEN SYNTAX WILL BE->
*/
console.dir(document.querySelectorAll("div a"));

/*
innerText-show the visible text content 
innerHTML-shows the full markup
textContent-shows all full text(hidden)
*/

let para = document.querySelector('p');
console.log(para.innerHTML);
console.log(para.innerText);
console.log(para.textContent);
para.innerHTML = '<h1>divyanshu Gupta </h1>'
console.log(para.innerHTML);
para.innerText = '<h1>Shurabhi SIngh</h1>'
console.log(para.innerText);
para.textContent = '<h1>Surabhi SIngh</h1>'