import { Router}  from './router.js'

const router = new Router()

router.add('/', "/pages/home.html"),
router.add("/exploration", "/pages/exploration.html"),
router.add('/universe', "/pages/universe.html"),
router.add(404, "/pages/404.html")

const routes = {
  "/": "/pages/home.html",
  "/exploration": "/pages/exploration.html",
  "/universe": "/pages/universe.html",
  404: "/pages/404.html"
}

router.handle() //precisa rodar na hora de iniciar a aplicação

window.onpopstate = () => router.handle() //para funcionar o botão de voltar e avançar da página
window.route = () => router.route() //depois que coloquei em módulos, o preventDefault não funcionou, então estou acessan do window a função 