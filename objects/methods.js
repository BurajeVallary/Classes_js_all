// properties that uses values as a function

let student = {
    name:"Steven",
    age:19,
    greet:function(){
        console.log("Hello");
        console.log(`Hello my name is ${student.name} and I am ${student.age} years old`);
       
        
    }
};

student.greet();

// adding methods

student.talk = function(){
    console.log('Hello there');

};
student.talk();