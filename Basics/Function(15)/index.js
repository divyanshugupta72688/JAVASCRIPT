// ... ->rest operator

function calculateCartPrice(...num){
    return num;
}
console.log(calculateCartPrice(200,300,400));

//...->spread operator
let arr = [10, 20, 30];
console.log(...arr);

/*
🧠 Shortcut:
Rest = Collect 📦
Spread = Expand/Spread 📤
*/

// we can declare function as a varriable

const sayHello = function () {
    console.log("Hello Divyanshu");
};

sayHello();