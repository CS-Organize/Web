let a;

if (a) {
  // truthy한 값: falsy한 값이 아닌 모든 값
  console.log("truthy");
} else {
  // falsy한 값: false, 0, "", null, undefined, NaN
  console.log("falsy");
}

const getName1 = (person) => {
  if (!person) {
    // person이 null 또는 undefined일 경우
    return "person이 없습니다.";
  } else {
    return person.name;
  }
};

const getName2 = (person) => {
  return person && person.name; // 단락회로 평가, person이 null 또는 undefined일 경우 person.name을 평가하지 않고 바로 false를 반환한다.
};

const getName3 = (person) => {
  const name = person && person.name; // 단락회로 평가, person이 null 또는 undefined일 경우 person.name을 평가하지 않고 바로 false를 반환한다.
  return name || "객체가 아닙니다."; // name이 falsy한 값일 경우 "객체가 아닙니다."를 반환한다.
};

const getName4 = (person) => person?.name ?? "person이 없습니다."; // 옵셔널 체이닝 연산자, 널 병합 연산자

let person;
let name = getName1(person);
console.log(name);
name = getName2(person);
console.log(name);
name = getName3(person);
console.log(name);
name = getName4(person);
console.log(name);

let b = [];
const arrStatus = b.length === 0 ? "빈 배열" : "한 개 이상 들어있는 배열"; // 삼항 연산자
console.log(arrStatus);

let score = 50;
score >= 90 // 삼항 연산자 중첩 가능 하지만 가독성이 떨어진다.
  ? console.log("A")
  : score >= 50
  ? console.log("B")
  : console.log("C");

function isKoreanFood(food) {
  if (["김치찌개", "비빔밥", "된장찌개"].includes(food))
    // includes 메서드는 배열에 특정 요소가 포함되어 있는지 확인한다.
    return true;
  return false;
}

console.log(`isKoreanFood("김치찌개") = ${isKoreanFood("김치찌개")}`);

const meal = {
  한식: "김치찌개",
  중식: "짜장면",
  일식: "초밥",
  양식: "스테이크",
  인도식: "카레",
};

const getMeal = (mealType) => {
  return meal[mealType] || "해당하는 식사가 없습니다.";
};

console.log(getMeal("한식"));
console.log(getMeal("채식"));

let arr = ["one", "two", "three"];
let [one1, two1, three1] = arr; // 배열 디스트럭처링 할당
let [one2, two2, three2, four2 = "four"] = ["one", "two", "three"];
console.log(one1, two1, three1, four2);

let c = 10,
  d = 20;
[c, d] = [d, c]; // 배열 디스트럭처링 할당을 이용한 변수 값 교환
console.log(c, d);

let obj = {
  one: "one",
  two: "two",
  three: "three",
};

let { one: able_chg, two, three, four = "four" } = obj; // 객체 디스트럭처링 할당 (key 값이 일치해야 한다.), : 를 이용해 변수명을 변경할 수 있다.
console.log(able_chg, two, three, four);

const cookie = {
  base: "cookie",
  madeIn: "korea",
};

const chocolateCookie = {
  ...cookie, // 스프레드 문법, 펼치는 연산자
  flavor: "chocolate",
};

const blueberryCookie = {
  ...cookie,
  flavor: "blueberry",
};

const noTopingCookies = ["촉촉한쿠키", "안촉촉한쿠키"];
const topingCookies = ["바나나 쿠키", "초코 쿠키", "딸기 쿠키"];

const allCookies = [...noTopingCookies, "함정 쿠키", ...topingCookies]; // 배열 합치기

console.log(allCookies);
