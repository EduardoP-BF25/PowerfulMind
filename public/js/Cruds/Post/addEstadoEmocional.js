const formEstadoEmocional = document.getElementById("psicAddEstadoEmocional");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    FileList;
    // sendData();
});
function sendDataEstadoEmocional() {
    // const url = "http://localhost:3000/registrarse.html"; // reemplazar con la URL de tu API
    const url =  "https://powerfulmind.up.railway.app/estadoEmocional/add";
    const data = {

        nombre: document.getElementById("nombreEstadoEmocional").value,       

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
        
        // hacer algo con la respuesta del servidor, como mostrar un mensaje al usuario
    })
    .catch((error) => console.error("Error al enviar los datos:", error));
}
