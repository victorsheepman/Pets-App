export const dogTemplate = ()=> {
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
