import {Router} from './routes.js'
const router = new Router()
router.add('/Projeto-07/', '/Projeto-07/pages/home.html')
router.add('/', '/Projeto-07/pages/home.html')
router.add('/about', '/Projeto-07/pages/about.html')
router.add('/contato', '/Projeto-07/pages/contato.html')
router.add(404, '/Projeto-07/pages/404.html')

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route()