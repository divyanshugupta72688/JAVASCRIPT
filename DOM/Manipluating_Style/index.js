let img = document.querySelector('img');
console.dir(img);

let heading   = document.querySelector('h1')
heading.style.color = 'green';

let links = document.querySelectorAll('.box a');
for(let i = 0;i<links.length;i++){
    links[i].style.color = 'green';
}