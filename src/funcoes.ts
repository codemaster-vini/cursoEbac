function calculaArea(base: number, altura: number): number {
    return base * altura;
}

const calculaArea2 = (base: number, altura: number):number => base * altura;

function somar(...numeros: Array<number>): void {
    // numeros.reduce()
    console.log(numeros)
}

function teste(): string | number {
    if (10 > 5) {
        return 'Dez é maior que cinco'
    } else{
        return 5
    }
}

const resultadoTeste = teste();