const notasAlunos = [
    {nome: 'Marco', nota: 5.6},
    {nome: 'Priscila', nota: 9.7},
    {nome: 'Janaina', nota: 7.3},
    {nome: 'Pablo', nota: 4.3},
    {nome: 'Gustavo', nota: 6.4},
    {nome: 'Rayane', nota: 5.2},
    {nome: 'Cecilia', nota: 8.5}
];

function alunosAcimaDaMedia(notasAlunos) {
    const media = 6;

    return notasAlunos.filter((aluno) => aluno.nota >= media)
}

console.log(alunosAcimaDaMedia(notasAlunos))