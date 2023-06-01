let a ="10";
//implicit coersion
//js is changing it
let b =a*10;
console.log(b);
console.log(typeof(b));
console.log(typeof(+a));

//explicit 
//use js methods
//you are the one using in built operations to make it change

let c =Number (a);
console.log("c",typeof(c));

let d =String (a);
console.log("d",typeof(d));

let e = new Array(d);
console.log(e);

let f = "45";
console.log(parseFloat(f));
