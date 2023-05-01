//Math has many other methods - min, max, random, etc (refer mozilla doc for methods)
let getRandomArbitrary = function(min,max){
    return Math.floor(Math.random()*(max-min)+min);
}

console.log(getRandomArbitrary(55,100));


//Date object
const now = new Date();

console.log(now.getDate());

//foramating date as you like
console.log(now.toLocaleDateString("en-US", { day: 'numeric' })+ "-"+ now.toLocaleDateString("en-US", { month: 'numeric' }) + "-" + now.toLocaleDateString("en-US", { year: 'numeric' }))