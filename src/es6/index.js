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
