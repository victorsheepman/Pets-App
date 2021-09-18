import Footer from '../templates/Footer';
import Home from '../pages/Home';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';
import { cat } from '../utils/Options';
import { footerDinamic } from '../utils/footer';
import Fav from '../pages/fav';
import Message from '../pages/Message';
import { chat } from '../utils/chat';
import register from '../pages/register';

const routes = {
    '/': Home,
    '/:favoritos': Fav,
    '/:chat':Message,
    '/:register':register
}

const router = async ()=>{
    const content = null || document.querySelector('#content');
    const footer = null || document.querySelector('#footer');
    footer.innerHTML = await Footer();
    let hash = getHash();
    let route = await resolveRoutes(hash);
    debugger;
    footerDinamic(hash);
    let render =  routes[route] ? routes[route] : Error404;
    
    content.innerHTML = await render();
    if(route === '/'){
        cat();
    }
    if(route === '/:chat'){
        chat();
    }
      
}

export default router;