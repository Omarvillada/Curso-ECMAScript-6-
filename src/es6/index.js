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

epicPhrase2 = `${hello} ${world}`
console.log(epicPhrase2);