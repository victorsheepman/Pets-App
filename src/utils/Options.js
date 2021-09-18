import { catTemplate } from "../templates/cat";
import { dogTemplate } from "../templates/dog";
import { modal } from "./modal";


export const cat = () => {
    const $container = document.querySelector('#contentHome');
    const $cat = document.querySelector('#cat');

    $cat.addEventListener('click', ()=>{
        $container.innerHTML = catTemplate();
        modal();
    });



    const $dog = document.querySelector('#dog');
    $dog.addEventListener('click', ()=>{
        $container.innerHTML = dogTemplate();
        modal();
    });
    

}
