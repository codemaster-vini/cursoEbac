$(document).ready(function(){

    $('form').submit(function(e){
        e.preventDefault();
        const urlImagem = $('#endereco-novo').val();
        const novaImg = $('<li></li>');
        $(`
            <img src="${urlImagem}" alt="Ver imagem em tamanho real">
        `).appendTo(novaImg);
        $(
            `<div class="overflow"><a target="_blank" rel="external" href="${urlImagem}">Ver imagem em tamanho real</a>`
        ).appendTo(novaImg);
        $(novaImg).appendTo('ul');
    })

    $('header button').click(function(){
        $('form').slideDown();
    })

    $('#botao-cancelar').click(function(){
        $('#url').value = 'olamundo';
        $('form').slideUp();
    })
})