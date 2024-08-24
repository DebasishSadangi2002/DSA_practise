// main.js

const MyArray = require('./MyArray'); // Import the class

const newArray = new MyArray(); // Create an instance of MyArray
const new1 = new MyArray(); // Create an instance of MyArray

const str = "Apple"

for (let i = 0; i < str.length; i++) {
    newArray.push(str[i])
}

for (let i = str.length -1; i >= 0; i--) {
    new1.push[newArray.get(i)]
    console.log(newArray[i]);
    
}

console.log(new1);

