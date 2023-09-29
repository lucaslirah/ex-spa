export class Controls{
    changeActive(navOptionMain, otherNavOption1, otherNavOption2) {
        document.querySelector(navOptionMain,).classList.add('active');
        document.querySelector(otherNavOption1).classList.remove('active');
        document.querySelector(otherNavOption2).classList.remove('active');
    }

    run(){
        const { pathname } = window.location;
        const body = document.querySelector('body');
        const page = pathname.replace('/', '');
        
        switch(page) {
            case '':
                document.querySelector(`#home`).classList.add('active');
                body.style.background = `url(../../../../assets/home.png) no-repeat center`;
                body.style.backgroundSize = 'cover';
                break;
            case 'universe':
                changeBackground();
                break;
            case 'exploration':
                changeBackground();
                break;
            default:
                body.style.background = `url(../../../../assets/home.png) no-repeat center`;
                body.style.backgroundSize = 'cover';
        }

        function changeBackground(){
            document.querySelector(`#${page}`).classList.add('active');
            body.style.background = `url(../../../../assets/${page}.png) no-repeat center`;
            body.style.backgroundSize = 'cover';
        }

        document.querySelector('#home').addEventListener('click', () => {
            this.changeActive('#home', '#exploration', '#universe');
        });
        document.querySelector('#universe').addEventListener('click', () => {
            this.changeActive('#universe', '#exploration', '#home');
        });
        document.querySelector('#exploration').addEventListener('click', () => {
            this.changeActive('#exploration', '#home', '#universe');
        });
    }
} 