   const $footer = document.querySelector('#footer');
   
export const footerDinamic = (ruta)=>{
    remove(ruta);
}

function remove(value) {
   if(value == '1'){
        value = 1;
    }
    else if (value == '2') {
        value = 2;
    }else if(value == '3'){
        value = 3;
    }else{
        value = 0;
    }
    for(let i = 0; i < $footer.children.length; i++){
        if($footer.children[i].value == value){
           $footer.children[i].classList.add(`button-black-${i}`);
        }else{
           $footer.children[i].classList.remove(`button-black-${i}`); 
        }
    }
}
