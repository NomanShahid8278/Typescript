// Basic Types
let id: number = 5;
let company: string = "Tkxel";
let isPublishes: boolean = true;

// any: you can assign any value to variable which has any as its type.
let x: any = "Noman Shahid";
x = 2;

// you can also declare variable before giving it value.
let age: number;
age = 24;

// If you are using Array in Typescript you need to tell that, which type of data you will have in that array.
let ids: number[] = [1, 2, 3, 4, 5]; // Now you can not push string or any other sort of data in this array.

// You can use any if you want to put multiple types of data in array.
let arr: any[] = [1, "Nomi", true];

// You can also create Tuple.
let person: [string, number, boolean] = ["Nomi", 24, true]; // You need to store data in the position where you put its data type.

// You can also have Tuple Array
let employees: [number, string][];
employees = [
  [1, "Nomi"],
  [2, "Noman"],
  [3, "Shahid"],
];

// Union actually is variable of multiple types
let pid: string | number = "22";

// Enums, It can be number, string or any other types
enum Direction {
  Up,
  Down,
  Left,
  Right,
}

// Objects
type User = {
  id: number;
  name: string;
};

const user: User = {
  id: 1,
  name: "Nomi",
};

// Type Assertion
let cid: any = 1;

// First way
let customerId = <number>cid;

// Second Way
let customer_id = cid as number;

// Functions
// We defined that x is a number as well as y and number written after bracket representing that return type is also number
function addNumber(x: number, y: number): number {
  return x + y;
}

console.log(addNumber(1, 2));

// Void, when your function does not have any return type then you write void as return type
function log(message: string | number): void {
  console.log(message);
}

log("Noman Shahid");

// Interfaces, It works in same manner as type but you cannot use it with Unions.
// Some other interface properties are like readonly which can only be readed ,or like optional fields which we can assign with the help of '?'
interface UserInterface {
  readonly id: number;
  name: string;
  age?: 24;
}

// Interfaces with Functions
interface myFunction {
  (x: number, y: number): number;
}

const add: myFunction = (x: number, y: number): number => x + y;
const sub: myFunction = (x: number, y: number): number => x - y;

// Classes
class PersonData {
  id: number;
  name: string;

  register() {
    console.log(`${this.name} id is ${this.id}`);
  }

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

const person1 = new PersonData(24, "Noman");

// Interfaces with classes
interface PersonInterface {
  id: number;
  name: string;
  register(): string;
}

class PersonData2 implements PersonInterface {
  id: number;
  name: string;

  register(): string {
    return this.name;
  }

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
  }
}

// Generics
function getArray<T>(items: T[]): T[] {
  return new Array().concat(items);
}

let numArr = getArray<number>([1, 2, 3, 4]);
let strArr = getArray<string>(["Nomi", "Noman", "Shahid"]);
