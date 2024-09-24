let obj = new Object(); // 객체 생성자 함수를 이용한 객체 생성
let obj1 = {}; // 객체 리터럴을 이용한 객체 생성

let obj2 = {
  key: "value", // key : value 형태로 객체의 속성을 정의, object property
  key1: "value1",
  key2: true,
  key3: undefined,
  key4: [1, 2, 3],
  key5: function () {
    console.log("hello");
  },
  key: "new value", // 객체의 속성은 중복될 수 없다. 중복될 경우 마지막에 정의된 속성이 덮어쓴다.
};

console.log(obj2.key); // 점 표기법을 이용한 속성 접근
console.log(obj2["key"]); // 괄호 표기법을 이용한 속성 접근
let propertyName = "key";
console.log(obj2[propertyName]); // 변수 또는 표현식을 이용한 속성 접근을 할 때는 괄호 표기법을 사용해야 한다.

const person = {
  name: "seunan", // 함수가 아닌 property -> Member
  age: 24,
  say: function () {
    console.log(`hello, my name is ${this.name}`); // this는 객체 자신을 가리킨다.
  }, // 함수인 property -> Method
};

person["gender"] = "man"; // const로 선언된 객체 자체를 변경하는 것은 불가능하지만 객체의 속성을 변경하는 것은 가능하다.
person.location = "seoul"; // 객체의 속성을 동적으로 추가할 수 있다.

/* person = {
	name : "babo",
	age : 01,
}; // const로 선언된 객체 자체를 변경하는 것은 불가능하다. */

console.log(person);

delete person.location; // 객체의 속성을 삭제할 수 있다.
delete person["gender"]; // delete로 삭제한 property는 메모리 공간에서 완전히 삭제되지 않으므로 null로 초기화해주는 것이 좋다.
person.name = null;

console.log(person);

function getPropertyValue(key) {
  console.log(person[key]);
}
getPropertyValue("location");
getPropertyValue("gender");

person.say();

console.log(`name : ${"name" in person}`); // in 연산자를 이용해 객체에 특정 속성이 있는지 확인할 수 있다.
console.log(`age : ${"age" in person}`);
console.log(`location : ${"location" in person}`);

console.log(`name : ${person.hasOwnProperty("name")}`); // hasOwnProperty 메소드를 이용해 객체 자신의 속성인지 확인할 수 있다.
