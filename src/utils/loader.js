
//Detalle
let $botonDetalle = document.getElementById('detalleBtn');
let $botonHistoria = document.querySelector('#historiaBtn');

//Historia
let $detalle = document.getElementById('detalle');
let $historia = document.querySelector('#historia');

//acciones
$botonDetalle.addEventListener('click', () => {
    debugger;
    $detalle.style.animation="detalle 0.5s linear forwards";
})
$botonHistoria.addEventListener('click', () => {
    $historia.style.animation = "historia 0.5s linear forwards";
})