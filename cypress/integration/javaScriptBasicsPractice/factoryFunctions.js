//factory function - it produces objects

function createCircle(radius){
    return{
        radius,
        draw(){
            console.log('draw function');
        }
    }
}

const c1 = createCircle(3);
//console.log(c1);
const c2 = createCircle(5);
//console.log(c2.radius);


//Constructor functions | pascal notation - all word starts with cap
function Cirlce(radius){
    this.radius = radius;
    this.draw=function(){
        console.log('draw',radius);
    }
}

const cc1  = new Cirlce(4);
console.log(cc1);
console.log(cc1.radius);
cc1.draw();