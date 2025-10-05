export function sum(array){
    return array.length 
    ? array.reduce((adicao, valor)=>adicao+valor, 0) 
    : NaN;
}

export function sumOdd(array){
    return array.length 
    ? array.filter((valor) => valor & 1).reduce((adicao, valor) => adicao+valor, 0) 
    : NaN
}

export function product(array){
    return array.length
    ? array.reduce((acumulador, valor) => acumulador*valor, 1)
    : NaN
}

export default {sum, sumOdd, product};