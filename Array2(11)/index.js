const marvel_heros = ["spiderman","thor","Irnoman"];
const dc_heros = ["superman","flash","batman"];


// to merge an array we have various mathod

//1. push method

marvel_heros.push(dc_heros);
console.log(marvel_heros);

//2.concatenation

const all_heros = marvel_heros.concat(dc_heros);
console.log(all_heros);

//3.spread method

const all_new_heros = [...marvel_heros,...dc_heros];
console.log(all_new_heros);

