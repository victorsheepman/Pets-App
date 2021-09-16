import Footer from '../templates/Footer';
import Home from '../pages/Home';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';
import { cat } from '../utils/Options';
import { dog } from '../utils/Options';
import { footerDinamic } from '../utils/footer';
import { pet } from '../templates/pet';
import { sentToFavorite } from '../utils/like';
import Fav from '../pages/fav';
const routes = {
    '/': Home,
    '/:favoritos': Fav
}

const router = async ()=>{
    const content = null || document.querySelector('#content');
    const footer = null || document.querySelector('#footer');
    footer.innerHTML = await Footer();
    let hash = getHash();
    console.log(hash);
    let route = await resolveRoutes(hash);
    console.log(route);

    
    let render =  routes[route] ? routes[route] : Error404;
    
    content.innerHTML = await render();
    cat();
    footerDinamic(route);  
}

export default router;