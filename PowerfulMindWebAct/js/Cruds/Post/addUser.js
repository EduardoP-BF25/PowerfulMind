
const form = document.getElementById("addUser");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    FileList;
    // sendData();
});
function sendData() {
    const url = "powerfulmind.up.railway.app/registrarse.html"; // reemplazar con la URL de tu API

    const data = {
      
        nombreUsuario: document.getElementById("nombreusuario").value,
        apellidoUsuario: document.getElementById("apellidousuario").value,
        fechaNacimiento: document.getElementById("fechaNacimiento").value,       
        correo: document.getElementById("correo").value,
        password: document.getElementById("contraseña").value,
        roleUsuario: document.getElementById("roleUsuario").value,
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
        
        if(data[0] != undefined ){
        location.href = 'powerfulmind.up.railway.app/login.html';
        } 

        // hacer algo con la respuesta del servidor, como mostrar un mensaje al usuario
    })
    .catch((error) => console.error("Error al enviar los datos:", error));
}
