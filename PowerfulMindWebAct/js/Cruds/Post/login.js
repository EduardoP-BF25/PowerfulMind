const form = document.getElementById("contenedor");
form.addEventListener("submit", (event) => {
  event.preventDefault();
  FileList;
  sendData();
  
});
function sendData() {
  const url = "https://powerfulmind.up.railway.app/login"; // reemplazar con la URL de tu API
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
        location.href = 'https://powerfulmind.up.railway.app/homeAdmin';

      } 
      else if (data[0] != undefined && data[1].roleUsuario == "Psicologo") {
        location.href = 'https://powerfulmind.up.railway.app/homePsicologo';

      }

      // hacer algo con la respuesta del servidor, como mostrar un mensaje al usuario
    })
    .catch((error) => console.error("Error al enviar los datos:", error));
}
