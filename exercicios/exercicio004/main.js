$(document).ready(function() {
    $('#carrossel').slick({
        autoplay: true
    })

    $('#hamburguer').click(function() {
        $('nav').slideToggle()
    })

    $('#telefone').mask('(00) 00000-0000', {placeholder: '(00) 00000-0000'})

    $('form').validate({
        rules: {
            nome: {
                required: true
            },
            email: {
                required: true,
                email: true
            },
            telefone: {
                required: true,
                minlength: 15
            }
        },
        messages: {
            nome: '<span class="mensagemErro">Por favor, insira seu nome</span>',
            email: '<span class="mensagemErro">Este campo é obrigatório</span>',
            telefone: '<span class="mensagemErro">Este campo é obrigatório</span>'
        }
    })

    $('.loja button').click(function() {
        const destino = $('#contato')
        let veiculo = $(this).parent().find('h3').text()

        $('html').animate({
            scrollTop: destino.offset().top
        }, 1000)

        $('#veiculo-interesse').val(veiculo)
    })
})