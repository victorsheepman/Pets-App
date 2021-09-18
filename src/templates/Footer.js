const Footer = () => {
    const view =
    `   
          
            <button class="footer__button" value="0">
                <a href="/#">
                    <img src="assets/icons/house.svg" alt="">
                </a>
                <p class = "body-2">House</p>
            </button>
            <button class="footer__button" value="1">
                <a href="#/1/">
                    <img src="assets/icons/message.svg" alt="">
                </a>
                <p class = "body-2">Mensajes</p>

            </button>
            <button class="footer__button"  value="2">
                <a href="#/2/">
                    <img src="assets/icons/heart.svg" alt="">
                </a> 
                <p class = "body-2">Favoritos</p>
            </button>
            <button class="footer__button"  value="3">
                <a href="#/3/">
                    <img src="assets/icons/search.svg" alt="">
                </a>
                <p class = "body-2">Perfil</p>
            </button>`;
    return view;
}




export default Footer;