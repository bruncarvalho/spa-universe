export class Router {

  routes = {}

  add(routeName, pageLink) {
    this.routes[routeName] = pageLink //estou dando um nome onde a chave é routeName e o valor é pageLink, do objeto routes, {404: '/pages/404.html', /: '/pages/home.html', /about: '/pages/exploration.html', /contact: '/pages/universe.html'}
  }

  route(event) {
    event = event || window.event
    event.preventDefault()

    window.history.pushState({}, "", event.target.href) //adiciona no histórico a mudança de página

    this.handle()
  }

  handle() {
    const { pathname } = window.location
    const route = this.routes[pathname] || this.routes[404]

    fetch(route).then(data => data.text()) //data antes da flecha é o parâmetro, depois o retorno
    .then(html => {
      document.querySelector('#app').innerHTML = html
    })
  }
}

/*
Explicação das linhas 22 à 24
fetch(route).then(data => data.text()): Esta parte já foi explicada. Ela faz a requisição HTTP para o URL especificado em route e, em seguida, converte a resposta para texto.

.then(html => { document.querySelector('#app').innerHTML = html }): Após a conversão da resposta para texto, esta parte do código é executada. Ela recebe o texto da resposta (agora armazenado na variável html) e a insere como conteúdo HTML dentro do elemento com o ID app.

Se não fosse em arrow seria assim:
fetch(route)
  .then(function(data) {
    return data.text();
  })
  .then(function(html) {
    var appElement = document.querySelector('#app');
    appElement.innerHTML = html;
  });


*/