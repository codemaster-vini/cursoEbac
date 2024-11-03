document.addEventListener('DOMContentLoaded', function() {
    const endPoint = 'https://api.github.com/users/codemaster-vini';

    fetch(endPoint).then(function (resp) {
        return resp.json();
    }).then(function(json) {
        const seguidores = json.followers;
        const seguindo = json.following;
        const avatar = json.avatar_url;
        const nome = json.name;
        const usuario = json.login;
        const repositorios = json.public_repos;
        const pagina = json.html_url;

        window.document.querySelector('#seguidores').innerHTML = `<h4>Seguidores</h4> ${seguidores}`;
        window.document.querySelector('#seguindo').innerHTML = `<h4>Seguindo</h4> ${seguindo}`;
        window.document.querySelector('.profile-avatar').src = avatar;
        window.document.querySelector('.profile-name').innerText = nome;
        window.document.querySelector('.profile-username').innerHTML = `@${usuario}`;
        window.document.querySelector('#repositorios').innerHTML = `<h4>Repositórios</h4> ${repositorios}`;
        window.document.querySelector('.profile-link').href = pagina;
    })
})