// Integer

let integer = 2147483647;
let infinity = Infinity;
let negInfinity = -Infinity;
let nan = NaN;

console.log(`integer: ${integer}\ninfinity: ${infinity}\nnegInfinity: ${negInfinity}\nnan: ${nan}`);

// String

let name1 = "seunan";
let name2 = `${name1} babo`; // 백틱을 이용해 문자열을 템플릿화할 수 있다.

console.log(`name1: ${name1}\nname2: ${name2}`);

// Boolean

let isTrue = true;
let isFalse = false;

console.log(`isTrue: ${isTrue}\nisFalse: ${isFalse}`);

// Null & Undefined

let undefinedVariable;
let nullVariable = null;

console.log(`undefinedVariable: ${undefinedVariable}\nnullVariable: ${nullVariable}`);

let a;
a = a ?? 10; // null 병합 연산자, a가 null 또는 undefined일 경우 10을 반환한다.
console.log(`a = a ?? 10: ${a}`);

let numberA = 12;
let numberB = "2";
console.log(`numberA + numberB = ${numberA + numberB}`);
console.log(`numberA + parseInt(numberB) = ${numberA + parseInt(numberB)}`);
console.log(`numberA * numberB = ${numberA * numberB}`);
