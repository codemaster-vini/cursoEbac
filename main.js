function Computador(ram, ssd, hd) {
    this.ram = ram;
    this.ssd = ssd;
    this.hd = hd;

    this.kwh = function(kw) {
        if (typeof kw === 'number') {
            let _kw = (kw * 24 * 30) / 1000;

            return `O consumo será de ${_kw} kWh/mês`;
        }
    }
}

function Desktop(mouse, teclado) {
    Computador.call(this, '16Gb', '512Gb', '1Tb');
    this.mouse = mouse;
    this.teclado = teclado;
}

function Notebook(bateria) {
    Computador.call(this, '8Gb', '252Gb', 'none');
    this.bateria = bateria;
}

const pc = new Desktop('Logitech G pro', 'Logitech G915 LIGHTSPEED');
const notebook = new Notebook('5200 mAh');

console.log(pc);
console.log(pc.kwh(91));
console.log(notebook);
console.log(notebook.kwh(45));