export const chat = ()=> {
    const $message = document.querySelector('#message');
    const $back = document.querySelector('#back');
    const modaluser =  document.querySelector('#modaluser')
    $message.addEventListener('click',()=>{
        modaluser.classList.remove('close');
        modaluser.classList.add("open");
    } );
    $back.addEventListener('click', ()=>{
        modaluser.classList.remove('open');
        modaluser.classList.add("close");
    })
}