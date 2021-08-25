let $dog = document.querySelector('#dog');
let $cat = document.querySelector('#cat');
let $containerHome = document.querySelector('#contentHome1');
 console.log($containerHome);
const dogTemplate = ()=> {
    const view = `
        <section class="dog" id="dog">
            <div class="card pos-1">
                <img src="assets/images/chester.png" alt="">
                <div class="card__title">
                    <p class="body-2-bold">Chester</p>
                    <p class="body-2">Golden retriever</p>
                </div>
            </div>
            <div class="card pos-2">
                <img src="assets/images/papi.png" alt="">
                <div class="card__title">
                    <p class="body-2-bold">Papi</p>
                    <p class="body-2">Chihuahua</p>
                </div>
            </div>
            <div class="card pos-3">
                <img src="assets/images/rocky.png" alt="">
                <div class="card__title">
                    <p class="body-2-bold">Rocky</p>
                    <p class="body-2">Rottweiler</p>
                </div>
            </div>
            <div class="card pos-4">
                <img src="assets/images/pelusa.png" alt="">
                <div class="card__title">
                    <p class="body-2-bold">Pelusa</p>
                    <p class="body-2">Bichón frisé</p>
                </div>
            </div>
        </section>`;
    return view;
}
console.log(dogTemplate());

$containerHome.innerHTML = dogTemplate()!== null ? dogTemplate():'noo carga'; ;



const catTemplate = () =>{
    const view =  
    `
    <section class="cat" id="cat">
        <div class="card pos-1">
            <img src="assets/images/cat-2.png" alt="">
            <div class="card__title">
                <p class="body-2-bold">Matilde</p>
                <p class="body-2">British Shorthair</p>
            </div>
        </div>
        <div class="card pos-2">
            <img src="assets/images/cat-3.png" alt="">
            <div class="card__title">
                <p class="body-2-bold">Pelusa</p>
                <p class="body-2">Birmano</p>
            </div> 
        </div>
        <div class="card pos-3">
            <img src="assets/images/cat-1.png" alt="">
            <div class="card__title">
                <p class="body-2-bold">Kity</p>
                <p class="body-2">Bombay</p>
            </div>  
        </div>
        <div class="card pos-4">
            <img src="assets/images/cat-4.png" alt="">
            <div class="card__title">
                <p class="body-2-bold">Bombón</p>
                <p class="body-2">Gato americano </p>
            </div> 
        </div>
    </section>
    `;
    return view;
}

    $cat.addEventListener('click', () => {
        console.log('hola');
        $containerHome.innerHTML = catTemplate();
    });
    $dog.addEventListener('click', () => {
        $containerHome.innerHTML = dogTemplate();
    });





















    
/*function add(child) {
    let $containerHome = document.querySelector('#contentHome');
    $containerHome.innerHTML = child;
}
debugger

$dog.onclick = add(dogTemplate);
$cat.onclick = add(catTemplate);
*/