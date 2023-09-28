export class Controls{
    changeActive(navOptionMain, otherNavOption1, otherNavOption2) {
        document.querySelector(navOptionMain,).classList.add('active');
        document.querySelector(otherNavOption1).classList.remove('active');
        document.querySelector(otherNavOption2).classList.remove('active');
    }
    run(){
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