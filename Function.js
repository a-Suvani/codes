// Write a function to rake 5 number sand to find the mean of the numbers in Javascript

let num1 = prompt("Enter the first num");
let num2 = prompt("Enter the first num");
let num3 = prompt("Enter the first num");
let num4 = prompt("Enter the first num");
let num5 = prompt("Enter the first num");

function mean() {
  let mean = (num1 + num2 + num3 + num4 + num5) / 5;

}
console.log(mean);

//edited code
let numbers = [];

let range = prompt("Enter the range of the string:");

for ( let i = 0; i <= range; i++) {
    let num = parseInt(prompt(`Enter the num ${i+1}`));
    numbers.push(num);
}
 
function mean() { 
    let sum = 0;
    for (let i = 0; i < numbers.length; i++) {
        sum = sum + numbers[i];
    }
    let mean = sum/numbers.length;
    console.log(`Mean: ${mean}`);
}

mean();
