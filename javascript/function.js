"use strict";

function calculate(command, a, b) {
  if (command === "add") {
    return console.log(a + b);
  } else if (command === "subtract") {
    return console.log(a - b);
  } else if (command === "divide") {
    return console.log(a / b);
  } else if (command === "multiply") {
    return console.log(a * b);
  } else if (command === "remainder") {
    return console.log(a % b);
  } else {
    return console.log(
      'command one of  "add", "subtract", "divide", "multiply", "remainer"'
    );
  }
}

calculate("add", 9, 3);
calculate("subtract", 9, 3);
calculate("divide", 9, 3);
calculate("multiply", 9, 3);
calculate("remainder", 10, 3);
calculate("malibu", 9, 3);

const fruits = ["apple", "banana"];
for (let i = 0; i < fruits.length; i++) {
  console.log(fruits[i]);
}
for (let fruit of fruits) {
  console.log(fruit);
}
fruits.forEach((fruit) => console.log(fruit));
