

class Person {
    constructor(name,age,height){
        this.name = name;
        this.age = age;
        this.height = height;
    }

    greet(){
        console.log('Hello');
    }
};
 let person = new Person ('Henry',26,'7ft');
 console.log({person});



 class Robot  extends Person{
    constructor (name,age,height){
        super (name,age,height);
    }
 };

 let robot = new Robot ('Elsa',3,'5ft');
 console.log({robot});


 class crazyRobot extends Person {
    constructor (name,age,height,dominate){
        super (name,age,height);
        this.walk = true
        this.height = '7ft'
        this.dominate = dominate
    }
    world(){
        console.log(`I will ${this.dominate} the world`);
    }
 }
 let crazy = new crazyRobot ('Felix',4,'3ft','enslave');
 crazy.world();

 class LovingRobot extends crazyRobot {
    constructor (name,age,height,dominance){
        super (name,age,height,dominance)
    }
 }

 let loving = new LovingRobot ('Amanda',10,'3ft','love');
 console.log({loving});