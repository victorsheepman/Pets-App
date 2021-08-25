import Footer from '../templates/Footer';
import Home from '../pages/Home';
import getHash from '../utils/getHash';
import resolveRoutes from '../utils/resolveRoutes';

const routes = {
    '/': Home,
    //'/:favotitos': favoritos
}

const router = async ()=>{
    const content = null || document.querySelector('#content');
    const footer = null || document.querySelector('#footer');
    
    footer.innerHTML = await Footer();
    let hash = getHash();
    console.log(hash);
    let route = await resolveRoutes(hash);
    
    let render =  routes[route] ? routes[route] : Error404;
    
    content.innerHTML = await render();

}

export default router;