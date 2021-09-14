const $modal = document.getElementById("content");


export const modal = ()=>{
    const $container = document.querySelector('#contentHome');
    const modalPet = $modal.children[2];

    for (let i = 0; i < $container.children.length; i++) {
       $container.children[i].addEventListener('click', ()=>{
            modalPet.classList.remove('close');
            modalPet.classList.add("open");
       });
    }
    modalPet.children[2].addEventListener('click', ()=>{
        modalPet.classList.remove('open');
        modalPet.classList.add("close");
    })
}