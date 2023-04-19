// const botonToggleInicio = document.querySelector('#hidden-Inicio');

const botonToggleUsers = document.querySelector('#hidden-users');
const botonTogglePsics = document.querySelector('#hidden-psics');
const botonTogglePacients = document.querySelector('#hidden-pacients');
const botonToggleAdmins = document.querySelector('#hidden-admins');



// const blockInicio = document.querySelector('#blockInicio');

const tablaUsuarios = document.querySelector('#tabla-usuarios');
const tablaPsics = document.querySelector('#tabla-psics');
const tablaPacients = document.querySelector('#tabla-pacients');
const tablaAdmins = document.querySelector('#tabla-admins');


// botonToggleInicio.addEventListener('click', function() {
//    // Aquí agregaremos el código para ocultar/mostrar el elemento
//   if (blockInicio.style.display === 'none') {
//       blockInicio.style.display = 'block';

//       tablaUsuarios.style.display = 'none';
//       tablaPsics.style.display = 'none';
//       tablaPacients.style.display = 'none';
//       tablaAdmins.style.display = 'none';

//    } else {
//       tablaUsuarios.style.display = 'none';


//    }   
//  });


botonToggleUsers.addEventListener('click', function() {
   // Aquí agregaremos el código para ocultar/mostrar el elemento
  if (tablaUsuarios.style.display === 'none') {
      tablaUsuarios.style.display = 'block';
      blockInicio.style.display = 'none';
      tablaPsics.style.display = 'none';
      tablaPacients.style.display = 'none';
      tablaAdmins.style.display = 'none';

   } else {
      tablaUsuarios.style.display = 'none';
      blockInicio.style.display = 'block';


   }   
 });
 
 botonTogglePsics.addEventListener('click', function() {
   // Aquí agregaremos el código para ocultar/mostrar el elemento
  if (tablaPsics.style.display === 'none') {
      tablaPsics.style.display = 'block';
      blockInicio.style.display = 'none';
      tablaUsuarios.style.display = 'none';
      tablaPacients.style.display = 'none';
      tablaAdmins.style.display = 'none';

   } else {
      tablaPsics.style.display = 'none';
      blockInicio.style.display = 'block';

   }   
 });

 botonTogglePacients.addEventListener('click', function() {
   // Aquí agregaremos el código para ocultar/mostrar el elemento
  if (tablaPacients.style.display === 'none') {
      tablaPacients.style.display = 'block';
      blockInicio.style.display = 'none';
      tablaPsics.style.display = 'none';
      tablaUsuarios.style.display = 'none';
      tablaAdmins.style.display = 'none';    
   } else {
      tablaPacients.style.display = 'none';
      blockInicio.style.display = 'block';

   }   
 });

 botonToggleAdmins.addEventListener('click', function() {
   // Aquí agregaremos el código para ocultar/mostrar el elemento
  if (tablaAdmins.style.display === 'none') {
      tablaAdmins.style.display = 'block';
      blockInicio.style.display = 'none';
      tablaPacients.style.display = 'none';
      tablaPsics.style.display = 'none';
      tablaUsuarios.style.display = 'none';

   } else {
      tablaAdmins.style.display = 'none';
      blockInicio.style.display = 'block';

   }   
 });