console.log(`Trabalhando com condicionais: `);
const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`,
);

const idadeComprador = 15;
const estaAcompanhada = true;
const temPassagemComprada = true;

console.log("Destinos possíveis: ");
console.log(listaDeDestinos);

// if (idadeComprador >= 18) {
//     console.log("Comprador maior de idadade");
//     listaDeDestinos.splice(1, 1); // removendo item
// }   else if (estaAcompanhada == true) {
//     console.log("Comprador está acompanhado");
//     listaDeDestinos.splice(1, 1); //removedo item
// }else {
//     console.log("Não é maior de idade e não posso vender");
// }

if (idadeComprador >= 18 || estaAcompanhada == true){
    console.log("\nCompra pode ser realizada, maior de idade ou acompanhado");
    listaDeDestinos.splice(1, 1); 
} else {
    console.log("\nNão é maior de idade ou não está acompanhado e não posso vender");
}
 
console.log("\nEmbarque: \n\n");
if(idadeComprador >= 18 && temPassagemComprada) {
    console.log("Boa viagem!");
} else {
    console.log("Você não pode embarcar");
}



console.log(listaDeDestinos);
// console.log(idadeComprador > 18);
// console.log(idadeComprador < 18);
// console.log(idadeComprador <= 18);
// console.log(idadeComprador >= 18);
// console.log(idadeComprador == 18);
// console.log(idadeComprador != 18);
