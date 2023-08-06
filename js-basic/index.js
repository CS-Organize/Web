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
a = a ?? 10;
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
	for (let i = 0; i < 10000; ++i)
		;
	console.log("ACTION :: CRY");
}

function sing() {
	for (let i = 0; i < 10000; ++i)
		;
	console.log("ACTION :: SING");
}

function dance() {
	for (let i = 0; i < 10000; ++i)
		;
	console.log("ACTION :: DANCE");
}

function checkMood(mood, goodCallback, badCallback) { // 콜백함수란 함수를 인자로 받아 특정 작업이 끝났을 때 실행시키는 함수를 말한다.
	if (mood === "happy") {
		goodCallback();
	} else {
		badCallback();
	}
	console.log("콜백함수의 실행이 끝났습니다.");
}

checkMood("happy", sing, cry); */

let obj = new Object(); // 객체 생성자 함수를 이용한 객체 생성
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
console.log(obj2[propertyName]); // 괄호 표기법을 이용한 속성 접근
