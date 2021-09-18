const Message = () => {
    const view = 
        `
        <section class="message">
        <h1>Mensajes</h1>
        <div class="message__chat" id="message">
            <figure class="message__chat--img">
                <img src="assets/images/user-1.jpg" alt="">
            </figure>
            <div class="message__chat--body">
                <h3 class="body-1-bold">Maria Dolores</h3>
                <p class="body-2">¡Hola! claro, podemos acordar un lugar y hora para que conoscas...</p>
            </div>
            <img src="assets/icons/chevron.png" style="margin-left:8px ;" alt="">
        </div>
    </section>
    <section class="userModal close" id="modaluser">
        <header class="userModal__header">
            <figure class="message__chat--img">
                <img src="assets/images/user-1.jpg" alt="">
            </figure>
            <h3 class="body-1-bold">Maria Dolores</h3>
        </header>
        <div class="userModal__body">
            <div>
                <h3 class="body-2">¡Hola! Me encantaría adoptar a Rocky.</h3>
            </div>
        </div>
        <input type="text" placeholder="Aa">
        <span class="back" id="back">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M8.70711 0.292893C9.09763 0.683418 9.09763 1.31658 8.70711 1.70711L3.41421 7H15C15.5523 7 16 7.44772 16 8C16 8.55228 15.5523 9 15 9H3.41421L8.70711 14.2929C9.09763 14.6834 9.09763 15.3166 8.70711 15.7071C8.31658 16.0976 7.68342 16.0976 7.29289 15.7071L0.292893 8.70711C0.0983937 8.51261 0.000764098 8.25792 4.33509e-06 8.003C1.40123e-06 8.002 0 8.001 0 8C0 7.999 1.40124e-06 7.998 4.33509e-06 7.997C0.000399186 7.8625 0.027346 7.73425 0.0758786 7.61722C0.124319 7.50014 0.195951 7.3904 0.290776 7.29502M0.293158 7.29263L7.29289 0.292893C7.68342 -0.097631 8.31658 -0.097631 8.70711 0.292893" fill="white"/>
            </svg>     
        </span>
    </section> 
        `;
    return view;

}
export default Message;