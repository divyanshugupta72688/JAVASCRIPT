const div = document.createElement('div')// create an element
console.log(div);
div.className = "main";
div.id = "mainid"
div.setAttribute("title","generated title")
div.style.backgroundColor = "green";
div.innerText = "Chai aur Code"
document.body.appendChild(div)