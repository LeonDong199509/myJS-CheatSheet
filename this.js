var length = 10;
function fn() {
	console.log(this);
}

var obj = {
  length: 5,
  method: function(fn) {
    fn();
    arguments[0]();
  },
  method1: null
};

obj.method(fn, 1);
obj.method1 = fn;
obj.method1();
console.log(this)