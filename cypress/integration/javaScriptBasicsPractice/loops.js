//do while loop
let p = 11;
do{
    //console.log(p);
    p++;
}while(p<=10)

//for in
const person = {
    name: "Naveen",
    age: 25
}

for(let key in person){
    console.log(key, person[key]);
}

//using array in for in 
const colors = ['red','green','blue']
for(let index in colors){
    console.log(index, colors[index]);
}


//for of loop
//specially used to get value from array
for(let col of colors)
    console.log(col);

//break and continue
//break - comes out of the loop
//continue - skip iterating that condition value

let k = 1;
for(let i=0;i<=10;i++){
    
    if(i===5) continue;
   // console.log('i value '+i);
}

while(k<=10){
    
    if(k===5) continue;
    console.log(k); 
    k++;   
}