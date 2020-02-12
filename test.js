var a = 5;
var b = 10;
console.log(`Fifteen is ${a + b} and not ${2 * a + b}.`);
this.foo='haha'
console.log(this)
var myObject = {
    foo: "bar",
    func: function() {
        var self = this;
        console.log(this)
        console.log("outer func:  this.foo = " + this.foo);
        console.log("outer func:  self.foo = " + self.foo);
        (function() {
            this.foo='haha'
            console.log(this)
            console.log("inner func:  this.foo = " + this.foo);
            console.log("inner func:  self.foo = " + self.foo);
        }());
    }
};
myObject.func();
function testThis1(){
    console.log(this)
}
testThis2 = ()=>{
    console.log(this)
}
testThis1()
testThis2()