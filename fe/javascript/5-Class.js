// 객체의 속성과 메서드를 정의한 클래스
class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  say() {
    console.log(
      `hello, my name is ${this.name} and I'm ${this.age} years old.`
    );
  }
}

// 클래스를 사용하기 위해서 인스턴스를 생성해야 한다.
const seunan = new Human("seunan", 24);
seunan.say();
