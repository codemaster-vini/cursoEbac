"use strict";
const alunosMatriculados = [
    {
        nome: 'Marco',
        curso: ['Front-end', 'Python'],
        idade: 22
    },
    {
        nome: 'Priscila',
        curso: ['Front-end', 'Python'],
        idade: 22
    },
    {
        nome: 'Luana',
        curso: ['Front-end', 'Java'],
        idade: 22
    }
];
alunosMatriculados.push({
    nome: 'Gian',
    curso: ['Arquitetura'],
    idade: 25
});
const novoAluno = {
    nome: 'Carla',
    idade: 20
};
console.log(alunosMatriculados);
console.log(novoAluno);
