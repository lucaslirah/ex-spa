import { Controls } from './controls.js';
import { Router } from './router.js';
const controls = new Controls();
const router = new Router();

router.add(404, '/pages/404.html');
router.add('/', '/pages/home.html');
router.add('/universe', '/pages/universe.html');
router.add('/exploration', '/pages/exploration.html');

controls.run();
router.handle();

window.route = () => router.route();
window.onpopstate = () => router.handle();