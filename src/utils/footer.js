


const footerJs = () =>{
    const btnContainer = document.querySelector('#footer');



for(let i = 0; i < 4; i++){
    btnContainer.children[i].addEventListener('click',active);
}

function active() {
    let value = this.value;
    console.log(value);
    for (let i = 0; i < 4; i++) {
        if(btnContainer.children[i].value === value){
            this.classList.add("button-black");
        }else{
            btnContainer.children[i].classList.remove("button-black");
        }
        
    }
}
if(window.location=='/#'){
    debugger
    btnContainer.children[0].classList.add("button-black");
}

}
 export default footerJs;