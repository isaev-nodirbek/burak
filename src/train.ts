console.log("EXECUTED");
// Compiled Langauge : Java, C, GoLang, C++, C#, Rust => Compiling & Running
//  Codes written in those languages should be compiled first than they can be run.
//  ERROR can be found in compiling proccess without running it
// FAST => There is no need for extra time in running proccess
// PLAFTORM DEPENDED => The same file should be compiled every time in various operation systems(Windows, macOS, Linux)

// Interpreted Langauge: NodeJS, Python, PHP, Ruby  => Running (No Compiling)
// there is no compiling proccess in those
// ERROR can not be found untill it arrive exact error location
// FLEXABLE => The same code can be run in any OPERATION SYSTEM. There is no need for compiling every time
// SLOWER => The same code should be interpreted every time

// TypeScript
// TypeScript => TypeScript Compiler => JavaScript
// Variables :
// Primitive types => string, number , boolean, null, undefined, symbol(There is no reference)
// Object types => obejcts , array, map

let box: string = "hello";
box = "100";

let stage: number | string = "hello";
stage = 100;

// interface
// interface Person {
//   name: string;
//   age: number;
//   nation: string;
// }
// const person: Person = {
//   name: "Nolan",
//   age: 25,
//   nation: "Uzbek",
// };
// console.log(person);

let skills: (number | string)[];
skills = ["Problem solving", "System design", 100];

class Person {
  age: number;
  firstName: string;
  lastName: string;

  constructor(age: number, firstName: string, latsName: string) {
    this.age = age;
    this.firstName = firstName;
    this.lastName = latsName;
  }
}
const person1 = new Person(30, "Nolan", "Devid");
console.log(person1);
