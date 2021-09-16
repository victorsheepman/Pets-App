
import { pets } from "./mockupData";

export const getFavorite = ()=>{
    const modalPet = document.querySelector('#petmodal');
    const name = modalPet.children[0].children[0].children[0].children[0].children[0].textContent;
    const petLike = pets.filter(pet => pet.firstName == name);
    pets.forEach((element) => {
        if(element.id == petLike[0].id){
            element.like = true;
        }
    } );
    const back = document.querySelector('#like');
    back.children[0].children[0].setAttribute('fill', 'black');

}