export class Router{
    routes = {};

    add(routeName, page){
        this.routes[routeName] = page;
    }

    route(event){
        event = event || window.event;
        event.preventDefault();
        
        window.history.pushState({}, "", event.target.href);

        this.handle();
    }
    
    handle(){
        const { pathname } = window.location;
        const route = this.routes[pathname] || this.routes[404];
        const body = document.querySelector('body');
        const page = pathname.replace('/', '');

        fetch(route)
        .then(data=> data.text())
        .then(html=> document.querySelector('#app').innerHTML = html);

        if (page === 404){
            console.log('404');
        }else if(page === 'home'){
            document.querySelector(`#home`).classList.add('active');
            body.style.background = `url(../../../../assets/home.png) no-repeat center`;
            body.style.backgroundSize = 'cover';
        }else{
            document.querySelector(`#${page}`).classList.add('active');
            body.style.background = `url(../../../../assets/${page}.png) no-repeat center`;
            body.style.backgroundSize = 'cover';
        }
    }
}