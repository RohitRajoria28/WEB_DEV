class Person{
    do="what?"
    
   //  constructor in class
    constructor(name,occupation){
       this.name=name;
       this.occupation=occupation;
    }
    
   //  Method in class
     setDetails(name,occupation){
        this.name=name;
        this.occupation=occupation;
     }
     
}

let obj1=new Person("rohit","student");
// obj1.setDetails("simran","student");
obj1["construct"]="any";
console.log(obj1);