//Default params y concatenacion

function newFunction(name, age, country){
    var name = name || 'Omar'
    var age = age || 32;
    var country = country || 'Colombia';
    console.log(name, age, country)
}
// es6

function newFunction2(name = "Omar", age = 24, country = "Colombia"){
    console.log(name,age,country)
}

newFunction2();
newFunction2('Ricardo', 25, 'Colombia');

//

let hello = "Hello";
let world = "World";
let epicPhrase = hello + ' ' + world
console.log(epicPhrase)
//Comillas francesas

epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//Multilinea
let lorem = "Quiero escribir poesia nadaísta \n"
+ "Otra frase sin sentido"

//es6
let lorem2 =  `Escribro y me falta una tecla
programo y me falta memoria`;
console.log(lorem)
console.log(lorem2)

//Desestructuracion de elementos

let person = {
    'name':'Omar',
    'age': 24,
     'country': 'COL'
}
console.log(
    person.name,
    person.age,
    person.country
)

let { name } =  person
console.log(name)

//Operador de propagacion

let team1 = ['Oscar', 'Omar', 'Julio']
let team2 = ['Valeria', 'Valentina', 'Carolina']

let education = ['David', ...team1, ...team2]

console.log(education)

{
    var globalVar = "global var";
}

{
    let globalLet = "global Let";
    console.log(globalLet)
}

console.log(globalVar)

const a = "b";
a = 'a';
console.log(a)

let nombre = 'Omar';
let age = 24

//es5
obj = {name: nombre, edad: age};

//es6
obj2 = {nombre, age};
console.log(obj2)

const names = [
    {
        name:'Omar',
        age:24,
    },
    {
        name:'Pedro',
        age:30,
    },
    {
        name:'Carolina',
        age:23,
    }
]
let listofnames = names.map(
    function(item){
        console.log(item.name)
    }
)

let listOfnames2 = names.map(
    item => console.log(item.name)
);

const listOfnames3 = (name,age,country)  => {
    console.log()
}

const listOfnames4 = name => {
    console.log()
}

const square = num => num * num;

console.log(square(2));

//Promesas

const hellowPromise = () =>{
    return new Promise((resolve, reject) => {
        if(false){
            resolve('Hey!')
        }else{
            reject('Ups!')
        }
    })
}

hellowPromise()
.then(response => console.log(response))
.catch(error => console.log(error))
//Clases
class calculator{
    constructor(){
        this.valuA = 0
        this.valueB = 0
    }   
    sum(valueA, valueB){
        this.valuA = valueA
        this.valueB = valueB
        return this.valuA + this.valueB;
    }
}

//Modulos
const call = new calculator()
console.log(call.sum(2,2))

import { hello } from './module'

hello()
//Generadores
function* helloWorld(){
    if(true){
        yield 'hellow, ';
    }
    if(true){
        yield 'World';
    }
};

const generatorHello = helloWorld();
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);
console.log(generatorHello.next().value);