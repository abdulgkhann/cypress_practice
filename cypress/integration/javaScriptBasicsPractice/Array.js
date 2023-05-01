const num = [5,6];
//console.log(num.length);
//console.log(num);

//to add element at end of array
num.push(7,8);

//to add in start of the array
num.unshift(5,3);


//to add in between
num.splice(0,0,1);

console.log(num);

//to remove eleemt at end
console.log(num.pop());

//to remove element at begin
console.log(num.shift());

//to remove in middle
console.log(num.splice(2,1));

//to empty array - 1. make array blank, 2. make array.length = 0, 3. using splice(0,array.length), 4.
/* let another = num;
num.splice(0);
console.log(num);
console.log(another);
 */
console.log('--------------------------------')

//to print all elements
for(const key in num){
    //console.log(num[key])
}

//to find element  in array  (primitive - value type)
//it will return -1 if element not found
console.log(num.indexOf(4))

console.log(num.indexOf(5,num.indexOf(5)+1));
console.log(num.includes(4));

console.log('--------------------------------')

//to find element in array (reference type)
const courses = [
    {id:1, name:'a'},
    {id:2, name:'b'}
];

console.log(courses.includes({id:2, name:'b'}));

//using find method
const cfind = courses.find(function(course){
    return course.name==='b';
});
console.log(cfind);

//reducing it to lamda function
const c2find = courses.findIndex(ele => ele.name==='b');
console.log(c2find);

console.log('--------------------------------')
//learing reduce, filter, map methogs of array

//1. reduce method can be used to perform acculumation operation(like sum of all array elements)
const marks = [12,99,16,423,2,12];

console.log(marks.reduce((sum,mark)=>(sum+mark),0)); //here sum is where the values are getting saved, mark is having each element value one by one

//2. filter methog is used to fethc the elements whihc satisfy the given filter logic
//eg getting all lement vt value as 12
console.log(marks.filter(mark=>mark==12));  //here mark is uised to derive each element value one after another 

//eg getting number divisble by 2
console.log(marks.filter(mark=>mark%2==0)); 

//3. map method is used to perform certain operation on each element and get new array out of it
//eg - multiple all the eleemnt by 3
console.log(marks.map(mark=>mark*3));


//using all in one
let combinationmark = marks.filter(mark=>mark%2==0).map(mark=>mark*6).reduce((sum,mark)=>sum+mark,0);
console.log(combinationmark);
