

// function verificarPasswords() {

//     password1 = document.getElementById('password');
//     password12 = document.getElementById('repeatPassword');

//     // Verificamos si las constraseñas no coinciden
//     if (password1.value != password12.value) {

        
//     // Si las constraseñas no coinciden mostramos un mensaje
//         document.getElementById("error").classList.add("mostrar");

//     return false;
//     }
//     else{
//         sendData()
//     }

// }




const form = document.getElementById("addUser");
form.addEventListener("submit", (event) => {
    event.preventDefault();
    FileList;
    // sendData();
});

function sendData() {
    // const url = "http://localhost:3000/registrarse.html"; // reemplazar con la URL de tu API
    const url =  "https://powerfulmind.up.railway.app/usuario/add";
    const data = {
      
        nombreUsuario: document.getElementById("nombreusuario").value,
        apellidoUsuario: document.getElementById("apellidousuario").value,
        fechaNacimiento: document.getElementById("fechaNacimiento").value,       
        correo: document.getElementById("correo").value,
        password: document.getElementById("password").value,
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

        // hacer algo con la respuesta del servidor, como mostrar un mensaje al usuario
    })
    .catch((error) => console.error("Error al enviar los datos:", error));


        setTimeout(function() {
            location.href = 'https://powerfulmind.up.railway.app/powerfulMind/login';
        }, 3000);

}

// const formUser = document.getElementById("adminAddUser");
// form.addEventListener("submit", (event) => {
//     event.preventDefault();
//     FileList;
//     // sendData();
// });
function sendDataAdmin() {
    // const url = "http://localhost:3000/registrarse.html"; // reemplazar con la URL de tu API
    const url =  "https://powerfulmind.up.railway.app/usuario/add";
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
        
        // hacer algo con la respuesta del servidor, como mostrar un mensaje al usuario
    })
    .catch((error) => console.error("Error al enviar los datos:", error));
}
