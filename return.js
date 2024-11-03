function fn(){
    return "i am good"   // return keyword use chesinappudu function varibale  lo  store chesi  aa variable ni print cheyyali
};

var  data = fn();
console.log(data)          ///this is normal  function


var newData = () =>  "i am very good"         //  for printing single  statement we  can use like this
// console.log(newData())
var mydata = newData();
console.log(mydata)


var  data1 = () => ({             // for  executing multiple lines then we have to use curly braces.
    name : 'swarna'
});
console.log(data1().name)

