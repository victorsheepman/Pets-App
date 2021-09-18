 import { pets } from "../utils/mockupData";

export const pet =  (value = 1)=>{
    const list = pets.find(pet => pet.id == value);
    const view = `
    <article class="pet__container">
        <div class="pet__info">
            <div class="pet__name">
                <div>
                    <h3 >${list.firstName}</h3>
                    <figure class="pet__name__sex">
                        <img src=${list.sex} alt="">
                    </figure>
                </div>
                <figure id="like">
                    <svg width="24" height="22" viewBox="0 0 24 22" fill="#D9D4E7" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#D9D4E7" d="M20.84 3.60999C20.3292 3.099 19.7228 2.69364 19.0554 2.41708C18.3879 2.14052 17.6725 1.99817 16.95 1.99817C16.2275 1.99817 15.5121 2.14052 14.8446 2.41708C14.1772 2.69364 13.5708 3.099 13.06 3.60999L12 4.66999L10.94 3.60999C9.9083 2.5783 8.50903 1.9987 7.05 1.9987C5.59096 1.9987 4.19169 2.5783 3.16 3.60999C2.1283 4.64169 1.54871 6.04096 1.54871 7.49999C1.54871 8.95903 2.1283 10.3583 3.16 11.39L4.22 12.45L12 20.23L19.78 12.45L20.84 11.39C21.351 10.8792 21.7563 10.2728 22.0329 9.60535C22.3095 8.93789 22.4518 8.22248 22.4518 7.49999C22.4518 6.77751 22.3095 6.0621 22.0329 5.39464C21.7563 4.72718 21.351 4.12075 20.84 3.60999V3.60999Z" stroke="#D9D4E7" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                    </svg>
                </figure>
            </div>
            <div class="pet__place">
                <figure>
                    <svg width="20" height="24" viewBox="0 0 20 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M4.34315 4.34315C5.84344 2.84285 7.87827 2 10 2C12.1217 2 14.1566 2.84285 15.6569 4.34315C17.1571 5.84344 18 7.87827 18 10C18 13.0981 15.9843 16.1042 13.774 18.4373C12.6894 19.5822 11.6013 20.5195 10.7833 21.1708C10.4789 21.4133 10.213 21.6152 10 21.7726C9.78702 21.6152 9.52111 21.4133 9.21668 21.1708C8.39867 20.5195 7.31061 19.5822 6.22595 18.4373C4.01574 16.1042 2 13.0981 2 10C2 7.87827 2.84285 5.84344 4.34315 4.34315ZM9.44476 23.8317C9.44505 23.8319 9.4453 23.8321 10 23L9.4453 23.8321C9.7812 24.056 10.2188 24.056 10.5547 23.8321L10 23C10.5547 23.8321 10.555 23.8319 10.5552 23.8317L10.556 23.8312L10.5581 23.8298L10.5648 23.8253L10.5877 23.8098C10.6072 23.7966 10.6349 23.7776 10.6704 23.753C10.7415 23.7038 10.8435 23.6321 10.9722 23.5392C11.2295 23.3534 11.5936 23.0822 12.0292 22.7354C12.8987 22.043 14.0606 21.0428 15.226 19.8127C17.5157 17.3958 20 13.9019 20 10C20 7.34784 18.9464 4.8043 17.0711 2.92893C15.1957 1.05357 12.6522 0 10 0C7.34784 0 4.8043 1.05357 2.92893 2.92893C1.05357 4.8043 0 7.34784 0 10C0 13.9019 2.48426 17.3958 4.77405 19.8127C5.93939 21.0428 7.10133 22.043 7.97082 22.7354C8.40636 23.0822 8.77055 23.3534 9.02779 23.5392C9.15646 23.6321 9.25853 23.7038 9.32956 23.753C9.36508 23.7776 9.39285 23.7966 9.41232 23.8098L9.43524 23.8253L9.4419 23.8298L9.44401 23.8312L9.44476 23.8317ZM8 10C8 8.89543 8.89543 8 10 8C11.1046 8 12 8.89543 12 10C12 11.1046 11.1046 12 10 12C8.89543 12 8 11.1046 8 10ZM10 6C7.79086 6 6 7.79086 6 10C6 12.2091 7.79086 14 10 14C12.2091 14 14 12.2091 14 10C14 7.79086 12.2091 6 10 6Z" fill="black"/>
                    </svg>
                </figure>
                <p class="body-2">
                    4140 Parker Rd. Allentown,<br> 
                    New Mexico 31134
                </p>
            </div>
            <div class="pet__caracter">
                <span>
                    <img src="assets/icons/raza.png" alt="">
                    <p class="body-2">${list.raza}</p>
                </span>
                <span style=" width: 155px;">
                    <img src="assets/icons/edad.png" alt="">
                    <p class="body-2">${list.age} Meses</p>
                </span>
            </div>
            <div class="pet__personality">
                <header>
                    <h2>Personalidad</h2>
                </header>
                <div class="pet__personality--body">
                    <div>
                        <img src="assets/icons/love.png" alt="">
                        <p class="body-2">Cariñoso</p>
                    </div>
                    <div>
                        <img src="assets/icons/crazy.png" alt="">
                        <p class="body-2">Inquieto</p>
                    </div>
                    <div>
                        <img src="assets/icons/jugueton.png" alt="">
                        <p class="body-2">Juguetón</p>
                    </div>
                </div>
            </div>
            <article class="pet__history">
                <h2>Historia de ${list.firstName}</h2>
                <p class="body-2">${list.firstName} es un perrito muy lindo y cariñoso, tiene 5 hermanitos más y por cuestiones de espacio y tiempo no podremos cuidar a todos, nuestra misión es encontrar la familia ideal para él y seguro que tú eres la persona indicada.</p>

            </article>  
            <div class="pet__user">
                <div class="pet__user--info">
                    <img src="assets/images/user.jpg" alt="">
                    <p>Publicado por: <br> <strong class="body-2-bold">Maria Dolores</strong></p>
                </div>
                <button class="">Contactar</button>
            </div>
        </div> 
    </article>
    <span class="back">
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M8.70711 0.292893C9.09763 0.683418 9.09763 1.31658 8.70711 1.70711L3.41421 7H15C15.5523 7 16 7.44772 16 8C16 8.55228 15.5523 9 15 9H3.41421L8.70711 14.2929C9.09763 14.6834 9.09763 15.3166 8.70711 15.7071C8.31658 16.0976 7.68342 16.0976 7.29289 15.7071L0.292893 8.70711C0.0983937 8.51261 0.000764098 8.25792 4.33509e-06 8.003C1.40123e-06 8.002 0 8.001 0 8C0 7.999 1.40124e-06 7.998 4.33509e-06 7.997C0.000399186 7.8625 0.027346 7.73425 0.0758786 7.61722C0.124319 7.50014 0.195951 7.3904 0.290776 7.29502M0.293158 7.29263L7.29289 0.292893C7.68342 -0.097631 8.31658 -0.097631 8.70711 0.292893" fill="white"/>
        </svg>     
    </span>

    `;
    return view;

}