let inp = document.querySelector("input");
// inp.addEventListener("keydown",function(){
//     console.log("key was pressed");
    
// });

// inp.addEventListener("keyup",function(){
//     console.log("key was released");
    
// });

inp.addEventListener("keydown",function(event){
    console.dir(event.key)
    console.log(event.code);
    console.log("key was pressed");
    
});
