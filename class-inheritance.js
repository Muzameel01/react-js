class Person{
    constructor(name){
        this.name=name;
    }
    greet(){
        console.log(`hello ${this.name}`);
    }
}
class Student extends Person{
    constructor(name,level){
        super(name);
        this.level=level;
    }
    greet(){
        console.log(`hello ${this.name} from ${this. level}`);
    }
}
const o1= new Person("Azhar");
const o2= new Student("mujju","B.E")
o1.greet()
o2.greet()