//Object entries deveule los valores de una matriz.
const data = {
    frontend: 'Omar',
    backend: 'Isabel',
    desing: 'Ana'
}
console.log(data)
const entries = Object.entries(data);
console.log(entries);

//Objetc Values: Me devuelve los valores de un objeto a un arreglo. 

const data = {
    frontend: 'Omar',
    backend: 'Isabel',
    desing: 'Ana'
}
const values = Object.values(data)
console.log(values)
// Padding: nos permite añadir cadenas vacías a string, pudiendo modificar la cadena string como tal.
//Podría servir del lado del front , para mostrar una estructura de elementos.

const string = 'hello' 
console.log(string.padStart(7,'hi'))
console.log(string.padEnd(12, ' ------'))


const helloWorld = () =>{
    return new Promise((resolve,reject) =>{
        (true)
        ? setTimeout(() => resolve('Hello World'), 3000)
        : reject(new Error('Test error'))
    })
};

const HelloAsyn =  async() =>{
    const hello = await helloWorld();
    console.log(hello)
};
HelloAsyn()