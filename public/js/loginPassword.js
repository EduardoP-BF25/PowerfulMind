// Icono Password
const iconPassword = document
.querySelector('#iconPassword');

// Input Pasword
const password = document.querySelector('#inputcontra');

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
