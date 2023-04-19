// const form = document.getElementById("contenedor");
// form.addEventListener("submit", (event) => {
//   event.preventDefault();
//   FileList;
//   // sendData();
// });
function sendData() {

  const alertError = `
    <div id="error" class="alert alert-danger centar" display="" role="alert">
      Contraseña incorrecta!! Vuelve a intentarlo
    <!-- <i class="bi bi-exclamation-octagon"></i> -->
    </div>`
  const alertSuccess = `
    <div id="ok" class="alert alert-success centar" display="" role="alert">
        Ingresando...
    <!-- <i class="bi bi-arrow-counterclockwise"></i> -->
    </div>   
  `


  const url = "https://powerfulmind.up.railway.app/usuario/login"; // reemplazar con la URL de tu API
  // const url = "http://localhost:3000/usuario/login"; // reemplazar con la URL de tu API
  
  const data = {
    correo: document.getElementById("inputCorreo").value,
    password: document.getElementById("inputcontra").value,
  };
  const options = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  };
  fetch(url, options)
    .then((response) => response.json())
    .then((data) => {
      console.log("Respuesta del servidor:", data);
      localStorage.setItem("token", data[0])
      if(data[0] != undefined && data[1].roleUsuario == "Administrador"){
        location.href = 'https://powerfulmind.up.railway.app/powerfulMind/homeAdmin';
        // location.href = 'http://localhost:3000/powerfulMind/homeAdmin';
        document.getElementById("div-alerts").innerHTML = alertError

      } 
      else if (data[0] != undefined && data[1].roleUsuario == "Psicologo") {
        location.href = 'https://powerfulmind.up.railway.app/powerfulMind/homePsicologo';
        // location.href = 'http://localhost:3000/powerfulMind/homePsicologo';
        document.getElementById("div-alerts").innerHTML = alertSuccess

      }
      // hacer algo con la respuesta del servidor, como mostrar un mensaje al usuario
    })
    .catch((error) => console.error("Error al enviar los datos:", error));
}
