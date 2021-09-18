
import { pet } from "../templates/pet";
import { getFavorite } from "./like";


export const modal = ()=>{
    const $container = document.querySelector('#contentHome');
    const modalPet = document.querySelector('#petmodal');

    for (let i = 0; i < $container.children.length; i++) {
       $container.children[i].addEventListener('click', (event)=>{ 
            const value = event.path[1].getAttribute('value');
            getValue(value);
            modalPet.classList.remove('close');
            modalPet.classList.add("open");
           debugger;
       });
    }
   
    function getValue(id) {
        modalPet.innerHTML = pet(id);
        modalPet.children[1].addEventListener('click', ()=>{
            modalPet.classList.remove('open');
            modalPet.classList.add("close");
        });
        const buttonLike = document.querySelector('#like');
        buttonLike.addEventListener('click', getFavorite);
    }
}




