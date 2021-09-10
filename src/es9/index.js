
/**
 * Spread Operator
 */
const obj = {
    nombre:"Omar",
    edad: "Pais",
    country: "Colombia"
}

let {nombre, ...all} = obj
console.log(nombre, all)

const obj ={
    nombre:"Pedro",
    age:24
}

const obj1 ={
    ...obj,
    country:"Colombia"
}

console.log(obj1)

const helloWorld = () => {
    return new Promise((resolve, reject) => {
        (true)? setTimeout(() => resolve('Hello World'), 3000): reject(new Error('Test Error'))
    });
};

helloWorld()
.then(Response => console.log(Response))
.catch(Error => console.log(Error))
.finally(() => console.log('Finalizo'))

const regexData = /([0-9]{4})-([0-9]{2})-([0-9]{2})/;
const match = regexData.exec('2018-04-28');
const year = match[1];
const month = match[2];
const day = match[3];
console.log('Date -> ', year, month, day);