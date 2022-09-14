console.log(`Trabalhando com listas:`);

// const salvador = `Salvador`
// const saoPaulo = `São Paulo`
// const rioDeJaneiro = `Rio de Janeiro`

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);
listaDeDestinos.push(`Curitiba`); //adiciona itens
console.log(listaDeDestinos);
listaDeDestinos.splice(1, 1) //remove item a partir da posição e quantos elemento
console.log(listaDeDestinos);
console.log(listaDeDestinos[1], listaDeDestinos[0]);

// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const destinos = [
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
];

console.log("array com [] " + destinos);