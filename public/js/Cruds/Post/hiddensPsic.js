
const botonTogglePacients = document.querySelector('#hidden-pacients');
const botonTogglePosts = document.querySelector('#hidden-posts');

const tablaPacients = document.querySelector('#tabla-pacients');
const tablaPosts = document.querySelector('#tabla-posts');


 botonTogglePacients.addEventListener('click', function() {
   // Aquí agregaremos el código para ocultar/mostrar el elemento
  if (tablaPacients.style.display === 'none') {
      tablaPacients.style.display = 'block';
      tablaPosts.style.display = 'none';  
        
   } else {
      tablaPacients.style.display = 'none';
   }   
 });

 botonTogglePosts.addEventListener('click', function() {
   // Aquí agregaremos el código para ocultar/mostrar el elemento
  if (tablaPosts.style.display === 'none') {
      tablaPosts.style.display = 'block';
      tablaPacients.style.display = 'none';

   } else {
      tablaPosts.style.display = 'none';

   }   
 });