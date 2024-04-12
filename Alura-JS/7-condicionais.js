console.log(`Trabalhando com condicionais`)

const listaDeDestinos = new Array(
    `Salvador`,
    `São Paulo`,
    `Rio de Janeiro`
);

const idadeComprador = 21
console.log("Destinos possiveis:")
console.log(listaDeDestinos)

if(idadeComprador >= 18){
    console.log("Comprador maior de idade")
    listaDeDestinos.splice(1,1) // removendo item
}else {
    console.log("Venda proibida para menores 18 anos")
}

    
    
console.log(listaDeDestinos)
