namespace casting {
    let idade: any = 25;
    (idade as number).toFixed();
    (idade as string).length;
    (idade as Array<string>).forEach(x => console.log(x))

    let nome: string = 22 as unknown as string
    console.log(nome)
}