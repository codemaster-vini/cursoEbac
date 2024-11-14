class Pessoa {
    nome: string;

    constructor(nome: string) {
        this.nome = nome;
    }

    dizOla(): string {
        return `${this.nome} disse 'olá'`
    }
}

const marco = new Pessoa('Marco')