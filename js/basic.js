/* let num = 1;
let infinity = Infinity;
let min_infinity = -Infinity;
let nan = NaN; */

/* let name = "seunan";
let name2 = `babo ${name}`; */

/* let isTrue = true;
let isFalse = false; */

/* let a;
let b = null; */

/* let numberA = 12;
let numberB = "2";
console.log(numberA + numberB);
console.log(numberA + parseInt(numberB));
console.log(numberA * numberB); */

/* let a;
a = a ?? 10; // null 병합 연산자, a가 null 또는 undefined일 경우 10을 반환한다.
console.log(a); */

/* console.log(helloA()); // 함수 선언식은 호이스팅이 가능하다. 호이스팅이란 선언문이나 함수 선언식을 해당 스코프의 최상단으로 끌어올리는 것을 말한다.
// console.log(helloB());

function helloA() {
	return "hello";
} // 함수 선언식

let helloB = function () {
	return "hello";
}; // 함수 표현식

console.log(helloB());

let helloC = () => { // 화살표 함수, 무명 함수를 간단하게 표현할 수 있다.
	return "hello";
}

let helloD = () => "hello"; // return문만 있을 경우 중괄호와 return을 생략할 수 있다.

console.log(helloC()+"\n"+helloD()); */

/* function cry() {
	console.log("ACTION :: CRY");
}

function sing() {
	console.log("ACTION :: SING");
}

function dance() {
	console.log("ACTION :: DANCE");
}

function checkMood(mood, goodCallback, badCallback) { // 콜백함수란 함수를 인자로 받아 특정 작업이 끝났을 때 실행시키는 함수를 말한다.
	if (mood === "happy") {
		goodCallback();
	} else {
		badCallback();
	}
}

checkMood("happy", sing, cry); */

/* let obj = new Object(); // 객체 생성자 함수를 이용한 객체 생성
let obj1 = {}; // 객체 리터럴을 이용한 객체 생성

let obj2 = {
	key : "value", // key : value 형태로 객체의 속성을 정의, object property
	key1 : "value1",
	key2 : true,
	key3 : undefined,
	key4 : [1, 2, 3],
	key5 : function () {
		console.log("hello");
	},
	key : "new value" // 객체의 속성은 중복될 수 없다. 중복될 경우 마지막에 정의된 속성이 덮어쓴다.
};

console.log(obj2.key); // 점 표기법을 이용한 속성 접근
console.log(obj2["key"]); // 괄호 표기법을 이용한 속성 접근
let propertyName = "key";
console.log(obj2[propertyName]); // 괄호 표기법을 이용한 속성 접근 */

/* const person = {
	name : "seunan", // 함수가 아닌 property -> Member
	age : 25,
	say : function () {
		console.log(`hello, my name is ${this.name}`); // this는 객체 자신을 가리킨다.
	} // 함수인 property -> Method
};

person["gender"] = "man" // const로 선언된 객체 자체를 변경하는 것은 불가능하지만 객체의 속성을 변경하는 것은 가능하다.
person.location = "seoul"; // 객체의 속성을 동적으로 추가할 수 있다.

// person = {
// 	name : "babo",
// 	age : 01,
// }; // const로 선언된 객체 자체를 변경하는 것은 불가능하다.

console.log(person);

delete person.location; // 객체의 속성을 삭제할 수 있다.
delete person["gender"]; // delete로 삭제한 property는 메모리 공간에서 완전히 삭제되지 않으므로 null로 초기화해주는 것이 좋다.
person.name = null;

console.log(person);

// getPropertyValue("location");
// getPropertyValue("gender");
function getPropertyValue(key) {
	console.log(person[key]);
}
person.say();

console.log(`name : ${"name" in person}`); // in 연산자를 이용해 객체에 특정 속성이 있는지 확인할 수 있다.
console.log(`age : ${"age" in person}`);
console.log(`location : ${"location" in person}`); */

/* let arr = new Array(1, 2, 3, 4); // 배열 생성자 함수를 이용한 배열 생성
let arr1 = [1, "2", true, null, undefined, {}, [], function () {}]; // 배열 리터럴을 이용한 배열 생성

// console.log(arr1);

arr.push(5); // 배열의 끝에 요소를 추가한다.

console.log(arr.length); // 배열의 길이를 반환한다. */

/* let person = {
	name : "seunan",
	age : 25,
	location : "seoul",
};
const personKeys = Object.keys(person); // 객체의 속성들을 배열로 반환한다.
const personValues = Object.values(person); // 객체의 속성들의 값을 배열로 반환한다.

for (let i = 0; i < personKeys.length; i++) {
	console.log(`${personKeys[i]} : ${personValues[i]}`);
} */

/* const arr = [1, 2, 3, 4, 5];

// const newArr = [];
// arr.forEach((elm) => newArr.push(elm * 2)); // 배열의 요소들을 순회하며 콜백함수를 실행한다.
const newArr = arr.map((elm) => elm * 2); // 배열의 요소들을 순회하며 콜백함수를 실행한 결과를 새로운 배열에 담아 반환한다.

// console.log(arr.includes(3)); // 배열에 특정 요소가 있는지 확인한다.
// console.log(arr.indexOf("3")); // 배열에 특정 요소가 있는지 확인하고 있을 경우 해당 요소의 인덱스를, 없으면 -1을 반환한다. */

const arr = [
	{ num : 1, color : "red" },
	{ num : 2, color : "blue" },
	{ num : 3, color : "green" },
	{ num : 4, color : "yellow" },
];

// console.log(
// 	arr.findIndex((elm) => {
// 		return elm.color === "red";
// 	})
// );

// const idx = arr.findIndex((elm) => elm.color === "red"); // 배열의 첫 요소부터 순회하며 콜백함수를 실행한 결과가 true가 되는 요소의 인덱스를 반환한다.
// console.log(arr[idx].color);

// const element = arr.find((elm) => elm.color === "red"); // 배열의 첫 요소부터 순회하며 콜백함수를 실행한 결과가 true가 되는 요소를 반환한다.
// console.log(element.color);

// const filteredArr = arr.filter((elm) => elm.color === "red"); // 배열의 첫 요소부터 순회하며 콜백함수를 실행한 결과가 true가 되는 요소들을 모아 새로운 배열로 반환한다.
// console.log(filteredArr);

// const arr1 = arr.slice(0, 2); // 배열의 특정 구간을 잘라 새로운 배열로 반환한다.
// const arr2 = arr.slice(2, 4);

// console.log(arr1.concat(arr2)); // 배열을 합쳐 새로운 배열로 반환한다.

// let numbers = [0, 1, 3, 2, 10, 30, 20];
// console.log(numbers.sort()); // sort() 메서드는 기본적으로 유니코드 순서로 정렬한다.

// const compare = (a, b) => {
// 	if (a > b) return 1; // 콜백함수의 반환값이 0보다 크면 a를 b보다 뒤로 정렬한다.
// 	if (a === b) return 0; // 콜백함수의 반환값이 0이면 a와 b의 순서를 바꾸지 않는다.
// 	if (a < b) return -1; // 콜백함수의 반환값이 0보다 작으면 a를 b보다 앞으로 정렬한다.
// };

// numbers.sort(compare); // 숫자를 오름차순으로 정렬하려면 콜백함수를 이용해야 한다.
// console.log(numbers);

// console.log(numbers.sort((a, b) => a - b));

const cArr = ["안승원", "님", "안녕하세요", "반갑습니다"];

console.log(cArr.join(" ")); // 배열의 요소들을 구분자(default는 ,)를 이용해 하나의 문자열로 합친다.
