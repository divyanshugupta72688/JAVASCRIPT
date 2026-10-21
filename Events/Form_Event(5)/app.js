let form = document.querySelector('form');
// form.addEventListener("submit",function(){
//     alert('form was submitted!');
// });

// agar submit karne per bhi usi page per rahna chahte ho to tumhe eventpreventDefault() use krna pdega

form.addEventListener("submit",function(event){
    event.preventDefault();
    alert('form was submitted!');
    console.log('Successfull! ')
});
