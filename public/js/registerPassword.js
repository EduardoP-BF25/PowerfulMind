// Icono Password
const iconPassword = document
.querySelector('#iconPassword');

// Input Pasword
const password = document.querySelector('#password');

iconPassword.addEventListener('click', () => {

// Toggle the type attribute using
// getAttribure() method
const type = password
    .getAttribute('type') === 'password' ?
    'text' : 'password';
      
password.setAttribute('type', type);

// Toggle the eye and bi-eye icon
this.classList.toggle('bi-eye');
});


// Icono Password
const iconRepeatPassword = document
.querySelector('#iconRepeatPassword');

// Input Pasword
const repeatPassword = document.querySelector('#repeatPassword');

iconRepeatPassword.addEventListener('click', () => {

// Toggle the type attribute using
// getAttribure() method
const type = repeatPassword
    .getAttribute('type') === 'password' ?
    'text' : 'password';
      
    repeatPassword.setAttribute('type', type);

// Toggle the eye and bi-eye icon
this.classList.toggle('bi-eye');
});


 
function verificarPasswords() {

   document.getElementById("div-alerts").innerHTML = ""

   // Acá va el código 
   // Ontenemos los valores de los campos de contraseñas 
   password1 = document.getElementById('password');
   password12 = document.getElementById('repeatPassword');

   const alertError = `
   <div id="error" class="alert alert-danger centar" display="" role="alert">
      Las Contraseñas no coinciden!! Vuelve a intentarlo
 <!-- <i class="bi bi-exclamation-octagon"></i> -->
                        </div>`
   const alertSuccess = ` 
      <div id="ok" class="alert alert-success centar" display="" role="alert">
         Ingresando...
         <!-- <i class="bi bi-arrow-counterclockwise"></i> -->
      </div>   
   `

   // Verificamos si las constraseñas no coinciden
   if (password1.value != password12.value) {

      // Si las constraseñas no coinciden mostramos un mensaje
      document.getElementById("div-alerts").innerHTML = alertError

      return false;
   }
   else {

      // Si las contraseñas coinciden ocultamos el mensaje de error
      document.getElementById("div-alerts").innerHTML = alertSuccess
      
      // Refrescamos la página (Simulación de envío del formulario)
      setTimeout(function() {
         sendData();
      }, 2000);
      return true;
      
   }
}
