let btn = document.querySelector('button');
let ul = document.querySelector('ul');
let inp = document.querySelector('input');
btn.addEventListener("click",function(){
    let item = document.createElement('li');
    item.innerText = inp.value;
    ul.appendChild(item);
    let dltbtn = document.createElement("button");
    dltbtn.innerText = 'delete';
    dltbtn.classList.add("delete");
    item.appendChild(dltbtn);

    console.log(inp.value);
    inp.value=""
});

let btndel = document.querySelectorAll(".delete")
for(delbtn of btndel){
    delbtn.addEventListener("click",function(){
        console.log('item was deleted!');
        let par = this.parentElement;
        par.remove();
    })
}