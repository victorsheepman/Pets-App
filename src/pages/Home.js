const Home = () => {
    const view = 
        `<header class="header">
            <h1>Adopta una adorable mtascota</h1>
            <section class="header__categorias"> 
                <h3 class="sub-1">Categorías de mascotas</h3>
                <div class="header__container">
                    <button class="header__dog" id="dog">
                        <a href="">
                            <figure>
                                <img src="assets/icons/dogs.png" alt="">
                            </figure>
                            <p class="body-1">Perros</p>
                        </a>
                    </button>
                    <button class="header__cat" id="cat">
                        <a href="">
                            <figure>
                                <img src="assets/icons/cat.png" alt="">
                            </figure>
                            <p class="body-1">Gatos</p>
                        </a>
                    </button>
                </div>
            </section>
        </header>
        <div class="contentHome" id="contentHome1"></div>`;
    return view;

}
export default Home;