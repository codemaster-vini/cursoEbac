//Uso do 'for' ou o do 'forEach'

const alunos = ['Marco', 'Ana', 'Paulo', 'Grabriel', 'Priscila'];

for(let c = 0; c < alunos.length; c++) {
    console.log(`${alunos[c]} curso de Front End`);
}

console.log('------------------------------------------------------------------------------');

alunos.forEach(function(nome) {
    const cursoAlunos = `${nome} curso de Front End`;

    console.log(cursoAlunos);
})

console.log('------------------------------------------------------------------------------');

//Uso do 'map', 'find' e 'findIndex'

const carros = ['Golf', 'Up TSI', 'Gol'];

const marcas = carros.map(function(carro) {
    return {
        Carros: carro,
        Marca: "Volkswagen"
    }
})

console.log(marcas)

const gol = marcas.find(function(carro) {
    return carro.Carros == "Gol"
})

console.log(gol);

const indiceUp = marcas.findIndex(function(carro) {
    return carro.Carros == "Up TSI"
})

console.log(indiceUp);
console.log('------------------------------------------------------------------------------');

//Uso do 'filter'

const animes = ['Tokyo Ghoul', 'HxH', 'SAO'];
const lista = animes.map(function(anime) {
    return {
        Anime: anime,
        Favorito: 'True'
    }
})

lista.push({
    Anime: 'Tokyo Revengers',
    Favorito: 'False'
})

console.log(lista);

const favoritos = lista.filter(function(anime) {
    return anime.Favorito == "False"
})

console.log(favoritos)
console.log('------------------------------------------------------------------------------');


//Uso do 'reduce' 

const numeros = [20, 10, 30, 40];
const somaDosNumeros = numeros.reduce(function(armazenado, nAtual) {
    return armazenado = armazenado + nAtual       
}, 0)

console.log(numeros);
console.log(somaDosNumeros);