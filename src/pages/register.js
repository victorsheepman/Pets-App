const register = ()=>{
    const view = `

    <section class="register">
        <h1>Perfil</h1>
        <div class="register__user">
            <img src="assets/images/user-3.jpg" alt="">
            <span class="body-2">Juan Méndez <br>
                    <p class="button">Editar Cuenta</p>
            </span>
          
        </div>  
        <form action="">
           <label for="Nombre">Nombre</label>
           <input type="text" name="Nombre">
           <label for="Apellido">Apellido</label>
           <input type="text" name="Apellido">  
           <label for="Nombre">Correo</label>
           <input type="text" name="Correo" placeholder="">       
            <button>Guardar</button>
        </form>
    </section>
    `;
    return view;
}
export default register;