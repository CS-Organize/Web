function transformToObjects(numberArray) {
    // TODO: Add your logic
    // should return an array of objects
    return numberArray.map((item) => {
        return {var : item};
    })
    // return numberArray.map((item) => ({var : item}))
}

const objArr = transformToObjects([1, 2, 3, 4]); // [{var: 1}, {var: 2}, {var: 3}, {var: 4}];
console.log(objArr);

// Destructuring
const [firstName, lastName] = ["Seungwon", "An"];

console.log(`firstName : ${firstName}, lastName : ${lastName}`);

const {name: userName, age} = {name : "seunan", age : 24};

console.log(`userName : ${userName}, age : ${age}`);

// Spread Operator
const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const arr3 = [...arr1, ...arr2];
console.log(arr3);

const arr = [1, 2, 3, 4, 5];

console.log("-----------------map-----------------");

const newArr = arr.map((item) => item * 2);
console.log(newArr);

console.log("------------------find-----------------");

const found = arr.find((item) => item > 3);
console.log(found);

console.log("-----------------findidx----------------");

const foundIdx = arr.findIndex((item) => item > 3);
console.log(foundIdx);

console.log("-----------------filter-----------------");

const filtered = arr.filter((item) => item > 3);
console.log(filtered);

console.log("-----------------slice-----------------");

// 원래 배열은 변하지 않음
const sliced = arr.slice(1, 3);
console.log(sliced);
console.log(arr);

console.log("-----------------splice-----------------");

// 원래 배열이 변함
const spliced = arr.splice(1, 2);
console.log(spliced);
console.log(arr);
