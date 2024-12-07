const arrays = [ 
    42,
    true,
    "Hello, World! ",
    {
        name: "john",
        age: 25,
        isStudent: false,
    },
    false,
    3.14,
    "JavaScript is fun!",
];

// Q # 1:
let stringifiedArrays = arrays.map(function(item) {
    return String(item);
});

console.log(stringifiedArrays);

// Q # 2:
let numbersOnly = arrays.filter(function(item) {
    return typeof item === "number";
});

console.log(numbersOnly);

// Q # 3:
arrays.forEach(function(item) {
    console.log(typeof item);
});

// Q # 4:
let sumOfNumbers = arrays.reduce(function(accumulator, currentValue) {
    if (typeof currentValue === "number") {
        return accumulator + currentValue;
    }
    return accumulator;
}, 0); 

console.log(sumOfNumbers);

// Q # 5:
let firstBoolean = arrays.find(function(item) {
    return typeof item === "boolean";
});

console.log(firstBoolean);

// Q # 6:
let firstObjectIndex = arrays.findIndex(function(item) {
    return typeof item === "object" && !Array.isArray(item); 
});

console.log(firstObjectIndex);

// Q # 7:
let containsNumber = arrays.some(function(item) {
    return typeof item === "number"; 
});

console.log(containsNumber);

// Q # 8:
let allStrings = arrays.every(function(item) {
    return typeof item === "string"; 
});

console.log(allStrings);