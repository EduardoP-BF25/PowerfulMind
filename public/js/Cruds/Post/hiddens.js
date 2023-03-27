const botonToggleUsers = document.querySelector('#hidden-users');
const botonTogglePsics = document.querySelector('#hidden-psics');
const botonTogglePacients = document.querySelector('#hidden-pacients');
const botonToggleAdmins = document.querySelector('#hidden-admins');




const tablaUsuarios = document.querySelector('#tabla-usuarios');
const tablaPsics = document.querySelector('#tabla-psics');
const tablaPacients = document.querySelector('#tabla-pacients');
const tablaAdmins = document.querySelector('#tabla-admins');



botonToggleUsers.addEventListener('click', function() {
   // Aquí agregaremos el código para ocultar/mostrar el elemento
  if (tablaUsuarios.style.display === 'none') {
      tablaUsuarios.style.display = 'block';
      tablaPsics.style.display = 'none';
      tablaPacients.style.display = 'none';
      tablaAdmins.style.display = 'none';

   } else {
      tablaUsuarios.style.display = 'none';

   }   
 });
 
 botonTogglePsics.addEventListener('click', function() {
   // Aquí agregaremos el código para ocultar/mostrar el elemento
  if (tablaPsics.style.display === 'none') {
      tablaPsics.style.display = 'block';
      tablaUsuarios.style.display = 'none';
      tablaPacients.style.display = 'none';
      tablaAdmins.style.display = 'none';

   } else {
      tablaPsics.style.display = 'none';
   }   
 });

 botonTogglePacients.addEventListener('click', function() {
   // Aquí agregaremos el código para ocultar/mostrar el elemento
  if (tablaPacients.style.display === 'none') {
      tablaPacients.style.display = 'block';
      tablaPsics.style.display = 'none';
      tablaUsuarios.style.display = 'none';
      tablaAdmins.style.display = 'none';    
   } else {
      tablaPacients.style.display = 'none';
   }   
 });

 botonToggleAdmins.addEventListener('click', function() {
   // Aquí agregaremos el código para ocultar/mostrar el elemento
  if (tablaAdmins.style.display === 'none') {
      tablaAdmins.style.display = 'block';
      tablaPacients.style.display = 'none';
      tablaPsics.style.display = 'none';
      tablaUsuarios.style.display = 'none';

   } else {
      tablaAdmins.style.display = 'none';

   }   
 });