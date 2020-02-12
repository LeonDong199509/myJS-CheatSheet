function Person(first,) {
  this.firstName = first;
  this.printName = function(){
      console.log(this.firstName);
  };
}
Person.prototype.printHa = function(){
    console.log('Ha'+this.firstName);
}
const p1 = new Person('Leon');
p1.printName();
p1.printHa();

function Person1(first,) {
  this.firstName = first;
  this.printName = ()=>{
      console.log(this.firstName);
  };
}
Person1.prototype.printHa = ()=>{ // cannot use arrow function for prototype, because this always point to where it's defined
    console.log('Ha'+this.firstName);
}
const p2 = new Person1('Leon');
p2.printName();
p2.printHa();