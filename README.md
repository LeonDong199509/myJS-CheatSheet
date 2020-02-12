# myJS-CheatSheet
reference: https://www.toptal.com/javascript/interview-questions
1. var fruits = ["Banana", "Orange", "Apple", "Mango"];
var a = fruits.indexOf("Apple")
2. 'aeiou'.includes('i') 
3. var objclone = Object.assign({},obj);
4. var myArray = ['a', 'b', 'c', 'd'];
myArray.push('end');
myArray.unshift('start');
console.log(myArray); // ["start", "a", "b", "c", "d", "end"]
With ES6, one can use the spread operator:

myArray = ['start', ...myArray];
myArray = [...myArray, 'end'];