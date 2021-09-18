import { catTemplate } from "../templates/cat";
import { dogTemplate } from "../templates/dog";
import { modal } from "./modal";


export const cat = () => {
    const $container = document.querySelector('#contentHome');
    const $cat = document.querySelector('#cat');
    const $dog = document.querySelector('#dog');
    initApp($cat, $dog, $container);
    $cat.addEventListener('click', ()=>{
        $container.innerHTML = catTemplate();
        $dog.classList.add('opacity');
        $cat.classList.remove('opacity');
        modal();
    });



    
    $dog.addEventListener('click', ()=>{
        $container.innerHTML = dogTemplate();
        $cat.classList.add('opacity');
        $dog.classList.remove('opacity');
        modal();
    });
}

function initApp(cat, dog, cont){
    
    cont.innerHTML = dogTemplate();
    cat.classList.add('opacity');
    dog.classList.remove('opacity');
    modal();
}
