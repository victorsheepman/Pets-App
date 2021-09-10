export const footerDinamic = ()=>{
    const $footer = document.querySelector('#footer');
    $footer.addEventListener('click', (event)=>{
        const node = event.path[2];
        const valueNode = node.value;
        for (let i = 0; i < 4; i++) {
            if($footer.children[i].value === valueNode){
                $footer.children[i].classList.add(`button-black-${i}`);
            }else{
                $footer.children[i].classList.remove(`button-black-${i}`);
            }
        }
    })
}
