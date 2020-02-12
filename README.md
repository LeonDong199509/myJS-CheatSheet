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
5. Array.from(Array(b).keys(),(e)=> e+1); // create array from 1 t0 b
6. Arr.reduce((a,b)=>(a+b),0); // get the sum of array
7. number.toString(10) // change number to string
8. s.substring(0,s.length-2) s.slice() // slice string
9. '#'.repeat(i+1).padStart(n)


1. string repeat padstart slice substring split
2. array: forEach reverse reduce Array.from() indexOf keys
3. set: has size
4. map: size forEach has set get keys values
