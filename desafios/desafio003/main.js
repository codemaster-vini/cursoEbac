$(document).ready(function() {
    $('#header-button').click(function() {
        $('form').slideDown();
    })

    $('#cancelar').click(function() {
        $('form').slideUp();
    })
   
    $('form').submit(function(e) {
        e.preventDefault();

        const urlImagem = $('#url-imagem').val();
        const novaImagem = $('<li style="display: none"></li>');
        $(`
            <img src="${urlImagem}">
            <div class="imagem-link">
                <a href="${urlImagem}" target="_blank" title="Ver imagem em tamanho real">Ver imagem em tamanho real
                </a>
            </div>`
        ).appendTo(novaImagem);
        $(novaImagem).appendTo('.container-imagens');
        $(novaImagem).fadeIn(500);
        $('#url-imagem').val('');
    })
})