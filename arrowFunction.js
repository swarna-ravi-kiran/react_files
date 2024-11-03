var newFn = (x,y) => {
console.log("arrow function")
// console.log(x + y);
return x + y;
}
var results = newFn(5,45);
console.log(results);

//////////////normal function ex////////////
var obj = {
    name : "ravi",
    city:"ap",
    f1 : function(){
        console.log(this.name, this.city)    //  here this will  represents the current  object
    }
}

obj.f1();

//////////////arrow function example////////////
var obj1 = {
    name : "swarna",
    city:"kanigiri",
    fn : () => {
        console.log(this.name, this.city)    //  here this will  represents the window object
    }
}

obj1.fn();