import { Controls } from './controls.js';
import { Router } from './router.js';
const controls = new Controls();
const router = new Router();

// controls.run();

router.add(404, '/pages/404.html');
router.add('/', '/pages/home.html');
router.add('/universe', '/pages/universe.html');
router.add('/exploration', '/pages/exploration.html');

router.handle();

window.route = () => router.route();
window.onpopstate = () => router.handle();