/*
    REDUCE()=>
             The reduce() method is used to reduce an array into a single value by applying a function to each element.”
*/

const mynums = [1,2,3];
const total = mynums.reduce(function(acc,currval){
    console.log(`acc:${acc} and currval:${currval}`);
    return acc + currval;
},0);
console.log("total :",total);

/*
OUTPUT- 
         acc:0 and currval:1
acc:1 and currval:2
acc:3 and currval:3
total : 6
        */



/* WRITE REDUCE IN OTHER WAY */

const mytotal = mynums.reduce((acc,currval)=>acc+currval,0);
console.log(mytotal);//6


const shopping_cart=[
    {
        itemname :"js course",
        price : 2999
    },
     {
        itemname :"py course",
        price : 999
    },
     {
        itemname :"mobile dev course",
        price : 5999
    },
     {
        itemname :"data science course",
        price : 12999
    }
];

const shopping_total=shopping_cart.reduce((acc,curr)=>acc+curr.price,0);
console.log(shopping_total);
