//use square brackets while creating arrays
//to get the length: eg num.length
//1 Array method:
//push- add an item at the end of the array
//unshift- adds an item at the beginning of an array
//to remove items at the end- .pop()
//to remove an item at the start of an array - .shift


let items=[2,5,"sweet",false,45];
items.push(62);
console.log(items);
items.unshift(6.5);
console.log(items);
items.pop();
console.log(items);
items.shift();
console.log(items);

//Array Sorting
//-Either ascending or descending
//-ve the first argument is less than the other

let num=[1,10,34,25,30];
 let sorted=num.sort((x,y)=>x-y);
console.log(sorted);

//Looping
//Go through every element in an array in js is called mapping
//filter goes through an array and omits the element not specified

//eg Given an array of X elements return an array with each element with X multiply by 2
//create an array of x


const results=num.map(
    (item)=>{
        return item * 2
    }
)
console.log(results);

//concat
//add two arrays together or joing two arrays together

let a=[1,2,3];
let b=[4,5,6];

let joined1=a.concat(b)
console.log({joined1});


//spread  or rest operators
//used to join an array or distructure an array
//use ...

let c=[1,40,...a,...b];
console.log({c});

//distructing
//storing array variables with new variables

let [z,x,...e]=c;
console.log({z});
console.log({x});
console.log({e});



