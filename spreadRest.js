function fn(x,y, ...values){
    console.log(x,y,values)
}
fn(10,20,30,40,50)         ///upto this line is  rest parameter example

var obj = {
    name :"ravi",
    id:"101"
}

var obj1 = {
    ...obj,
}

console.log(obj1)

var names = ["sneha", 101,"teja"];

var name = [...names]
console.log(name)