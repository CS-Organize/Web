// https://www.typescriptlang.org/ko/docs/handbook/2/everyday-types.html

const age: number = 30;
const temperature: number = 35.4;
const name: string = "seunan";
const isStudent: boolean = true;
const rand: any = "?";

function greet(person: string): void {
  console.log(`Hello, ${person}`);
}

greet(name);

interface Person {
  name: string;
  age: number;
}

let user: Person = {
  name: "seunan",
  age: 24,
};

console.log(user);

class Animal {
  private name: string;

  constructor(name: string) {

    this.name = name;
  }

  public move(distance: number): void {
    console.log(`${this.name} moved ${distance} meters.`);
  }
}

let dog = new Animal("Dog");
dog.move(10);

function identity<T>(arg: T): T {
  return arg;
}

let output1 = identity<string>("myString");
let output2 = identity(100);

let id: number | string;
id = 10;
id = "abc";

if (typeof id === "string") {
  console.log("string");
} else {
  console.log("number");
  
}

type Point = { x: number; y: number };
let p1: Point = { x: 10, y: 20 };

enum Direction {
  Up = 1,
  Down,
  Left,
  Right,
}

let dir: Direction = Direction.Up;
console.log(dir);

