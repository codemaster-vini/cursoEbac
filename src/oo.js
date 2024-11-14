"use strict";
class Pessoa {
    constructor(nome) {
        this.nome = nome;
    }
    dizOla() {
        return `${this.nome} disse 'olá'`;
    }
}
const marco = new Pessoa('Marco');
