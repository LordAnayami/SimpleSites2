class Dog {
    state: name:string;
    state:string = 'happy';
   
    constructor(){}
   
    bark():string {
      return "Woof! Woof! I am "+this.state;
    }
  }
   
  var maja:Dog = new Dog();
  console.log(maja.state);
  console.log(maja.bark());