funcDeclaration(); // 호이스팅으로 인해 함수 선언문은 호출 가능하다.
// funcExpression();

function funcDeclaration() {
	console.log("Run funcDeclaration");
	console.log(this.key);
	return ("Declaration");
}

const funcExpression = function () {
	console.log("Run funcExpression");
	return ("Expression");
}

const arrowFunc = () => {
	console.log("Run arrowFunc");
	return ("Arrow");
}

const arrowFuncOmitReturn = () => "Arrow";
// return문만 있을 경우 중괄호와 return을 생략할 수 있다.

const arrowFuncOmitBrackets = arg => `Arrow ${arg}`;
// 매개변수가 하나일 경우 괄호를 생략할 수 있다. 함수의 몸체가 표현식일 경우 중괄호와 return을 생략할 수 있다.

const testThis = {
	name: "seunan",
	sayHiDeclaration: function() {
		console.log(`Hi, ${this.name}`); // this가 바인딩된다.
	},
	sayHiExpression: () => {
		console.log(`Hi, ${this.name}`); // this가 바인딩되지 않는다.
	},
}

testThis.sayHiDeclaration();
testThis.sayHiExpression();

callbackFunc("seunan", () => console.log("Callback"));

// 콜백함수란 함수를 인자로 받아 특정 작업이 끝났을 때 실행시키는 함수를 말한다.
function callbackFunc(name, callback) {
	console.log(`Hello, ${name}`);
	callback();
}
