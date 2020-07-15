// Arrays and map function

// const array = new Array(100);
const array = [1, 2, 3, 4];
// array.push(1);
// array.push(2);
// array.push(3);
// array.push(4);

let array1 = [...array, 5, 6, 7, 8, 9, 10];

const array2 = array1.map(function(number) {
    return number * 2;
});

console.log(array);
console.log(array1);
console.log(array2);