interface Product {
    name: string;
    price: number;   
}
let Products: Product[];

const objeto1: Product = {
    name: "Carro",
    price: 30000
} 

const objeto2: Product = {
    name: "Luces",
    price: 1000
} 

Products.push(objeto1, objeto2);
console.log(Products);



