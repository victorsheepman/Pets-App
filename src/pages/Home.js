const Home = () => {
    const view = 
        `
        <header class="header">
            <h1>Adopta una adorable mtascota</h1>
            <section class="header__categorias"> 
                <h3 class="sub-1">Categorías de mascotas</h3>
                <div class="header__container">
                    <button class="header__dog" id="dog" onclick="cat()" >
                            <figure>
                                <img src="assets/icons/dogs.png" alt="">
                            </figure>
                            <p class="body-1">Perros</p>
                    </button>
                    <button class="header__cat" id="cat">
                            <figure>
                                <img src="assets/icons/cat.png" alt="">
                            </figure>
                            <p class="body-1">Gatos</p>
                    </button>
                </div>
            </section>
        </header>
        <div class="contentHome" id="contentHome"></div>
        <section class="pet close" id="petmodal"></section>
        `;
    return view;

}
export default Home;