// # Exercício 1

// Crie um array vazio chamado `sacolao`, e siga os passos abaixo:
let sacolao = []
// a) Crie três objetos que vão representar frutas do sacolão. Os objetos devem ter as seguintes propriedades: 
const frutaOne = {
    nome: 'Laranja',
    preço: 2,
    disponibilidade: true
}

const frutaTwo ={
    nome: 'Limão',
    preço: 1,
    disponibilidade: true
}

const frutaThree = { 
    nome: 'mirtilo',
    preço: 10,
    disponibilidade: false
}
// b) Adicione os objetos ao array `sacolao` utilizando o método **`push()`**
sacolao.push(frutaOne, frutaTwo, frutaThree)
// c) Imprima a o array `sacolao`, e certifique-se de que agora ela seja um array **com três objetos**
console.log(sacolao)