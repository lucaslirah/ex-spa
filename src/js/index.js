import { Router } from './router.js';
import { Controls } from './controls.js';
const controls = new Controls();
const router = new Router();

controls.run();

router.add('/', '/pages/home.html');
router.add('/universe', '/pages/universe.html');
router.add('/exploration', '/pages/exploration.html');
router.add(404, '/pages/404.html');

router.handle();

window.onpopstate = () => router.handle();
window.route = () => router.route();