let firstArr = new Array(1, 2, 3, 4); // 배열 생성자 함수를 이용한 배열 생성
let randArr = [1, "2", true, null, undefined, {}, [], function () {}]; // 배열 리터럴을 이용한 배열 생성

firstArr.push(5); // 배열의 끝에 요소를 추가한다.

console.log(firstArr.length); // 배열의 길이를 반환한다.

console.log(randArr);

const person = {
  name: "seunan", // 함수가 아닌 property -> Member
  age: 24,
  say: function () {
    console.log(`hello, my name is ${this.name}`); // this는 객체 자신을 가리킨다.
  }, // 함수인 property -> Method
};

const personKeys = Object.keys(person); // 객체의 속성들을 배열로 반환한다.
const personValues = Object.values(person); // 객체의 속성들의 값을 배열로 반환한다.

for (let i = 0; i < personKeys.length; i++) {
  console.log(`${personKeys[i]} : ${personValues[i]}`);
}

const numArr = [1, 2, 3, 4, 5];

// const newArr = [];
// arr.forEach((elm) => newArr.push(elm * 2)); // 배열의 요소들을 순회하며 콜백함수를 실행한다.
const newArr = numArr.map((elm) => elm * 2); // 배열의 요소들을 순회하며 콜백함수를 실행한 결과를 새로운 배열에 담아 반환한다.

console.log(numArr.includes(3)); // 배열에 특정 요소가 있는지 확인한다.
console.log(numArr.indexOf("3")); // 배열에 특정 요소가 있는지 확인하고 있을 경우 해당 요소의 인덱스를, 없으면 -1을 반환한다.

const arr = [
  { num: 1, color: "red" },
  { num: 2, color: "blue" },
  { num: 3, color: "green" },
  { num: 4, color: "yellow" },
];

console.log(
  arr.findIndex((elm) => {
    return elm.color === "red";
  })
);

const idx = arr.findIndex((elm) => elm.color === "red"); // 배열의 첫 요소부터 순회하며 콜백함수를 실행한 결과가 true가 되는 요소의 인덱스를 반환한다.
console.log(arr[idx].color);

const element = arr.find((elm) => elm.color === "red"); // 배열의 첫 요소부터 순회하며 콜백함수를 실행한 결과가 true가 되는 요소를 반환한다.
console.log(element.color);

const filteredArr = arr.filter((elm) => elm.color === "red"); // 배열의 첫 요소부터 순회하며 콜백함수를 실행한 결과가 true가 되는 요소들을 모아 새로운 배열로 반환한다.
console.log(filteredArr);

const arr1 = arr.slice(0, 2); // 배열의 특정 구간을 잘라 새로운 배열로 반환한다.
const arr2 = arr.slice(2, 4);

console.log(arr1.concat(arr2)); // 배열을 합쳐 새로운 배열로 반환한다.

let numbers = [0, 1, 3, 2, 10, 30, 20];
console.log(numbers.sort()); // sort() 메서드는 기본적으로 유니코드 순서로 정렬한다.

const compare = (a, b) => {
  if (a > b) return 1; // 콜백함수의 반환값이 0보다 크면 a를 b보다 뒤로 정렬한다.
  if (a === b) return 0; // 콜백함수의 반환값이 0이면 a와 b의 순서를 바꾸지 않는다.
  if (a < b) return -1; // 콜백함수의 반환값이 0보다 작으면 a를 b보다 앞으로 정렬한다.
};

numbers.sort(compare); // 숫자를 오름차순으로 정렬하려면 콜백함수를 이용해야 한다.
console.log(numbers);

console.log(numbers.sort((a, b) => a - b));

const cArr = ["안승원", "님", "안녕하세요", "반갑습니다"];

console.log(cArr.join(" ")); // 배열의 요소들을 구분자(default는 ,)를 이용해 하나의 문자열로 합친다.

/* 
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

const hobbies = ['reading', 'coding', 'listening to music', 'watching movies', 'playing games'];

for (const hobby of hobbies) {
	console.log(hobby);
}
*/
