

//Global Variable accessed everywhere
let a = 20;

function add(b) {
    console.log(a+b);
 // Local variable accessible in the scope defined   
    let c =30;             
    console.log(a+b+c);
}
add(20);
console.log({a});

function greet() {
    let hello = "hey";
    function talk(params) {
        let greeting= "hello there"
       console.log(` ${hello} ${greeting}`);
    }
    talk()
}
greet()
