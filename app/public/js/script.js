/* Desenvolvido por Amanda Souza */

// manimuplar o menu dde navegação

const url_atual =window.location.pathname

if(url_atual == '/'){
    document.getElementById('menuHome').className = 'nav-link menu activ'
}else if(url_atual == '/articles'){
    document.getElementById('menuArticles').className = 'nav-link menu activ'
}else if(url_atual == '/admin'){
    document.getElementById('menuAdmin').className = 'nav-link menu activ'
}