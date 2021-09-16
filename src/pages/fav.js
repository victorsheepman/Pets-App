import { pets } from "../utils/mockupData";

const Fav = () => {
    const items = pets.filter(i => i.like === true);
    console.log(items);
    const view = 
        `
            <section class="fav">
                <h1>Mascotas Favoritas</h1>
                <div class="fav__body" id="fav">
                ${items.map((pet)=>`
                    <div class="card pos-${pet.id}" value="${pet.id}">
                        <img src=${pet.img} alt="">
                        <div class="card__title">
                            <p class="body-2-bold">${pet.firstName}</p>
                            <p class="body-2">${pet.raza}</p>
                        </div>
                    </div>
                
                `).join('')}
        `;
    return view;

}
export default Fav;