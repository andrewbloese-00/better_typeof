import {TypeChecker} from '../index.mjs';

//define custom class
class Person { 
	constructor( name , age ){
		this.age = age; 
		this.name = name; 
	} 
}

//register it
TypeChecker.typeRegistry['Person'] = Person;


//test it
const person = new Person("Andrew",23);
const personType = TypeChecker.type_of(person)
console.log(person," = " + personType);


console.log("Checks objects for registered classes!", personType === "Person")


const arr = [1,2,3];
const arrType = TypeChecker.type_of(arr);
console.log(arr, " = " + arrType);
console.log("Checks Arrays Automatically" ,arrType === "array");










