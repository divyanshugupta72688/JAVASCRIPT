const div = document.createElement('div')// create an element
console.log(div);
div.className = "main";
div.id = "mainid"
div.setAttribute("title","generated title")
div.style.backgroundColor = "green";
div.innerHTML = "<h1>Mai Tera hero!</h1>"
document.body.appendChild(div)