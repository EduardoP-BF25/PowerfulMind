
const token = localStorage.getItem('token');

// fetch('http://localhost:3000/usuario/searchAll',{
fetch('https://powerfulmind.up.railway.app/usuario/searchAll',{

    method:'GET',
    headers: {
        "Content-Type": "aplication/json",
        'Authorization': token
    }

})
.then(response => response.json())
.then(Usuario => {
    const tableBody = document.querySelector('#users');
    Usuario.forEach(Usuario => {
        const row = document.createElement('tr');
        row.innerHTML =`
        
        <td>${Usuario.imageUsuario}</td>
        <td>${Usuario.nombreUsuario}</td>
        <td>${Usuario.apellidoUsuario}</td>
        <td>${Usuario.telefono}</td>
        <td>${Usuario.fechaNacimiento}</td>
        <td>${Usuario.correo}</td>
        <td>${Usuario.roleUsuario}</td>
        <td>${Usuario.fechaRegistroUsuario}</td>
        <td>${Usuario.statusUsuario}</td>

        
        <td id="">
            <button type="button" class="btn btn-warning bg-warning" data-bs-toggle="modal" data-bs-target="#modalUsuariover"> 
                <i class="bi bi-pencil-square"> </i>Editar
            </button> 
        </td>
        `;
        tableBody.appendChild(row);
      });

});




function reloadPage(){
location.reload();
}
