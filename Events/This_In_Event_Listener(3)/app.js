let btn = document.querySelector('button');
let p = document.querySelector('p');
let h1 = document.querySelector('h1');
let h3 = document.querySelector('h3');
// btn.addEventListener('click',function(){
//     console.log(this)
// });

// btn.addEventListener('click',function(){
//     console.log(this.innerText);
//     this.style.backgroundColor = 'green';
// });

// p.addEventListener('click',function(){
//     console.log(this.innerText);
//     this.style.backgroundColor = 'green';
// });
// h3.addEventListener('click',function(){
//     console.log(this.innerText);
//     this.style.backgroundColor = 'green';
// });
// h1.addEventListener('click',function(){
//     console.log(this.innerText);
//     this.style.backgroundColor = 'green';
// });



// you can write above code in other following way!

function changecolor(){
    console.dir(this.innerText);
    this.style.backgroundColor = 'pink';
}

btn.addEventListener("click",changecolor);
p.addEventListener("click",changecolor);
h1.addEventListener("click",changecolor);
h3.addEventListener("click",changecolor);
