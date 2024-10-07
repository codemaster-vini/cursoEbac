const form = window.document.getElementById("form-enviar");
const atividade = window.document.querySelector("input#atividade");
const nota = window.document.querySelector("input#nota");
const notas = [];
const aprovado = `<td><span id="aprovado">Aprovado</span></td>`;
const reprovado = `<td><span id="reprovado">Reprovado</span></td>`;
const mediaFinal = Number(window.prompt("Digite a média a ser considerada"));

function adicionarLinha(){
    notas.push(Number(nota.value));

    let linha = "<tr>";
    linha += `<td>${atividade.value}</td>`;
    linha += `<td>${nota.value}</td>`;
    linha += `<td>${nota.value >= mediaFinal? '<img src="images/aprovado.png" alt="Emoji celebrando">': '<img src="images/reprovado.png" alt="Emoji triste">'}</td>`;
    linha += "</tr>";

    window.document.getElementById("table-body").innerHTML += linha;

    atividade.value = "";
    nota.value = "";
}

function media (){
    let soma = 0;

    for(let i = 0; i < notas.length; i++){
        soma += notas[i];
    }

    let media = soma / notas.length;

    let linhaTFoot = document.querySelector("tfoot");
    linhaTFoot = "<tr>";
    linhaTFoot += "<td><strong>Média final</strong></td>";
    linhaTFoot += `<td><strong>${media.toFixed(1)}</strong></td>`;
    linhaTFoot += `${media >= mediaFinal? aprovado : reprovado}`;
    linhaTFoot += "</tr>";

    window.document.querySelector("tfoot").innerHTML = linhaTFoot;

    window.document
}

form.addEventListener("submit", enviar);
function enviar (e){
    e.preventDefault();
    adicionarLinha();
    media();
}