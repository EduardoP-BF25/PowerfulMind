//    function deleteRow(r)
//       { 

//             swal({
//             title: "¿Está seguro?",
//             text: "El elemento se eliminara",
//             icon: "warning",
//             confirmButtonColor: '#3085d6',
//             cancelButtonColor: '#d33',
//             buttons: true,
//             dangerMode: true,
//           })
//           .then((willDelete) => {
//             if (willDelete) {
//               swal("El elemento se ha eliminado", {
//                 icon: "success",
//               });

//               var i=r.parentNode.parentNode.rowIndex
//               document.getElementById('datatablesSimple').deleteRow(i)
              
              
//             } else {
//               swal("No se realizo ningun cambio");
//             }
//           });
   
//       }

//       function quitar(r)
//       { 

//             swal({
//             title: "¿Está seguro?",
//             text: "El elemento se eliminara",
//             icon: "warning",
//             confirmButtonColor: '#3085d6',
//             cancelButtonColor: '#d33',
//             buttons: true,
//             dangerMode: true,
//           })
//           .then((willDelete) => {
//             if (willDelete) {
//               swal("El elemento se ha eliminado", {
//                 icon: "success",
//               });

//               var i=r.parentNode.parentNode.rowIndex
              
//               document.getElementById('carritoTab').deleteRow(i)
              
//             } else {
//               swal("No se realizo ningun cambio");
//             }
//           });
   
//       }

//        function insertRowInTable(){

//         swal({
//           title: "¿Está seguro?",
//           text: "El producto se agregara al carrito",
//           icon: "warning",
//           buttons: true,
//           dangerMode: true,
//         })
//         .then((willDelete) => {
//           if (willDelete) {
//             swal("El producto se ha enviado al carrito", {
//               icon: "success",
//             });

//             var table = document.getElementById("carritoTab")
//             var newRow = table.insertRow(-1)
//             newRow.insertCell().innerHTML = newRow.rowIndex
//             newRow.insertCell (-1) .innerHTML = "3344"
//             newRow.insertCell (-1) .innerHTML = "<img src=images/shutterstock_1041373417.webp>"
//             newRow.insertCell (-1) .innerHTML = "Vitamina Nature Green"
//             newRow.insertCell (-1) .innerHTML = " <input type=text value=0 id=item  name=item  disabled> <button onclick=multiplicar(),sumar(44) >+</button> <button onclick=decrementar(),sumar(-44) >-</button>"
//             newRow.insertCell (-1) .innerHTML = "$44"
//             newRow.insertCell (-1) .innerHTML = "<button class=bg-danger type=button onclick=quitar(this)>  Borrar</button>"
            

//           } else {
//             swal("No se ha enviado al carrito");
//           }
//         });

//     }
    


//     function insertRowInTable2(){

//       swal({
//         title: "¿Está seguro?",
//         text: "El producto se agregara al carrito",
//         icon: "warning",
//         buttons: true,
//         dangerMode: true,
//       })
//       .then((willDelete) => {
//         if (willDelete) {
//           swal("El producto se ha enviado al carrito", {
//             icon: "success",
//           });

//           var table = document.getElementById("carritoTab")
//           var newRow = table.insertRow(-1)
//           newRow.insertCell().innerHTML = newRow.rowIndex
//           newRow.insertCell (-1) .innerHTML = "6677"
//           newRow.insertCell (-1) .innerHTML = "<img src=images/suplementos-naturales_e61f6612_1200x1200.jpg >"
//           newRow.insertCell (-1) .innerHTML = "Suplemento maxi heatl"
//           newRow.insertCell (-1) .innerHTML = " <input type=text value=0 id=item2  name=item  disabled> <button onclick=multiplicar2(),sumar(250) >+</button> <button onclick=decrementar2(),sumar(-250) >-</button>"
//           newRow.insertCell (-1) .innerHTML = "$250 "
//           newRow.insertCell (-1) .innerHTML = "<button class=bg-danger type=button onclick=quitar(this)>  Borrar</button>"

//         } else {
//           swal("No se ha enviado al carrito");
//         }
//       });

        

//   }

//   function insertRowInTable3(){

//     swal({
//       title: "¿Está seguro?",
//       text: "El producto se agregara al carrito",
//       icon: "warning",
//       buttons: true,
//       dangerMode: true,
//     })
//     .then((willDelete) => {
//       if (willDelete) {
//         swal("El producto se ha enviado al carrito", {
//           icon: "success",
//         });

//         var table = document.getElementById("carritoTab")
//         var newRow = table.insertRow(-1)
//         newRow.insertCell().innerHTML = newRow.rowIndex
//         newRow.insertCell (-1) .innerHTML = "6734"
//         newRow.insertCell (-1) .innerHTML = "<img src=images/medicine-bottle-of-brown-glass-pill-and-mint-isolated-on-white-background-photo.jpg>"
//         newRow.insertCell (-1) .innerHTML = "Menta Green"
//         newRow.insertCell (-1) .innerHTML = " <input type=text value=0 id=item3  name=item  disabled> <button onclick=multiplicar3(),sumar(130) >+</button> <button onclick=decrementar3(),sumar(-130) >-</button>"
//         newRow.insertCell (-1) .innerHTML = "$130"
//         newRow.insertCell (-1) .innerHTML = "<button class=bg-danger type=button onclick=quitar(this)>  Borrar</button>"

//       } else {
//         swal("No se ha enviado al carrito");
//       }
//     });

// }

// function insertRowInTable4(){

//   swal({
//     title: "¿Está seguro?",
//     text: "El producto se agregara al carrito",
//     icon: "warning",
//     buttons: true,
//     dangerMode: true,
//   })
//   .then((willDelete) => {
//     if (willDelete) {
//       swal("El producto se ha enviado al carrito", {
//         icon: "success",
//       });

//       var table = document.getElementById("carritoTab")
//       var newRow = table.insertRow(-1)
//       newRow.insertCell().innerHTML = newRow.rowIndex
//       newRow.insertCell (-1) .innerHTML = "5566"
//       newRow.insertCell (-1) .innerHTML = "<img src=images/Peinifeno-pintalabios-l-quido-tinte-de-brillo-labial-de-Color-rojo-cereza-hidratante-y-duradera-Copa.jpg>"
//       newRow.insertCell (-1) .innerHTML = "Bellabel"
//       newRow.insertCell (-1) .innerHTML = " <input type=text value=0 id=item4  name=item  disabled> <button onclick=multiplicar4(),sumar(100) >+</button> <button onclick=decrementar4(),sumar(-100) >-</button>"
//       newRow.insertCell (-1) .innerHTML = "$100"
//       newRow.insertCell (-1) .innerHTML = "<button class=bg-danger type=button onclick=quitar(this)>  Borrar</button>"

//     } else {
//       swal("No se ha enviado al carrito");
//     }
//   });
// }

// function insertRowInTable5(){

//   swal({
//     title: "¿Está seguro?",
//     text: "El producto se agregara al carrito",
//     icon: "warning",
//     buttons: true,
//     dangerMode: true,
//   })
//   .then((willDelete) => {
//     if (willDelete) {
//       swal("El producto se ha enviado al carrito", {
//         icon: "success",
//       });

//       var table = document.getElementById("carritoTab")
//       var newRow = table.insertRow(-1)
//       newRow.insertCell().innerHTML = newRow.rowIndex
//       newRow.insertCell (-1) .innerHTML = "8877"
//       newRow.insertCell (-1) .innerHTML = "<img src=images/cuidado.jpeg>"
//       newRow.insertCell (-1) .innerHTML = "Coco cream"
//       newRow.insertCell (-1) .innerHTML = " <input type=text value=0 id=item5  name=item  disabled> <button onclick=multiplicar5(),sumar(50) >+</button> <button onclick=decrementar5(),sumar(-50) >-</button>"
//       newRow.insertCell (-1) .innerHTML = "$50"
//       newRow.insertCell (-1) .innerHTML = "<button class=bg-danger type=button onclick=quitar(this)>  Borrar</button>"

//     } else {
//       swal("No se ha enviado al carrito");
//     }
//   });
// }

// function insertRowInTable6(){

//   swal({
//     title: "¿Está seguro?",
//     text: "El producto se agregara al carrito",
//     icon: "warning",
//     buttons: true,
//     dangerMode: true,
//   })
//   .then((willDelete) => {
//     if (willDelete) {
//       swal("El producto se ha enviado al carrito", {
//         icon: "success",
//       });

//       var table = document.getElementById("carritoTab")
//       var newRow = table.insertRow(-1)
//       newRow.insertCell().innerHTML = newRow.rowIndex
//       newRow.insertCell (-1) .innerHTML = "8723"
//       newRow.insertCell (-1) .innerHTML = "<img src=images/tH7-Hw0-Champu-de-camomila-0-152383434_m.jpg>"
//       newRow.insertCell (-1) .innerHTML = "Manzanilla Green"
//       newRow.insertCell (-1) .innerHTML = " <input type=text value=0 id=item6  name=item  disabled> <button onclick=multiplicar6(),sumar(100) >+</button> <button onclick=decrementar6(),sumar(-100) >-</button>"
//       newRow.insertCell (-1) .innerHTML = "$100"
//       newRow.insertCell (-1) .innerHTML = "<button class=bg-danger type=button onclick=quitar(this)>  Borrar</button>"

//     } else {
//       swal("No se ha enviado al carrito");
//     }
//   });

// }

// function insertRowInTable7(){

//   swal({
//     title: "¿Está seguro?",
//     text: "El producto se agregara al carrito",
//     icon: "warning",
//     buttons: true,
//     dangerMode: true,
//   })
//   .then((willDelete) => {
//     if (willDelete) {
//       swal("El producto se ha enviado al carrito", {
//         icon: "success",
//       });

//       var table = document.getElementById("carritoTab")
//       var newRow = table.insertRow(-1)
//       newRow.insertCell().innerHTML = newRow.rowIndex
//       newRow.insertCell (-1) .innerHTML = "6432"
//       newRow.insertCell (-1) .innerHTML = "<img src=images/shutterstock_1041373417.webp>"
//       newRow.insertCell (-1) .innerHTML = "Jugos naturales "
//       newRow.insertCell (-1) .innerHTML = " <input type=text value=0 id=item7  name=item  disabled> <button onclick=multiplicar7(),sumar(20) >+</button> <button onclick=decrementar7(),sumar(-20) >-</button>"
//       newRow.insertCell (-1) .innerHTML = "$20"
//       newRow.insertCell (-1) .innerHTML = "<button class=bg-danger type=button onclick=quitar(this)>  Borrar</button>"

//     } else {
//       swal("No se ha enviado al carrito");
//     }
//   });

// }

// function insertRowInTable8(){

//   swal({
//     title: "¿Está seguro?",
//     text: "El producto se agregara al carrito",
//     icon: "warning",
//     buttons: true,
//     dangerMode: true,
//   })
//   .then((willDelete) => {
//     if (willDelete) {
//       swal("El producto se ha enviado al carrito", {
//         icon: "success",
//       });

//       var table = document.getElementById("carritoTab")
//       var newRow = table.insertRow(-1)
//       newRow.insertCell().innerHTML = newRow.rowIndex
//       newRow.insertCell (-1) .innerHTML = "3298"
//       newRow.insertCell (-1) .innerHTML = "<img src=images/superfoods.jpeg>"
//       newRow.insertCell (-1) .innerHTML = "Bowl de avena"
//       newRow.insertCell (-1) .innerHTML = " <input type=text value=0 id=item8  name=item  disabled> <button onclick=multiplicar8(),sumar(50) >+</button> <button onclick=decrementar8(),sumar(-50) >-</button>"
//       newRow.insertCell (-1) .innerHTML = "$50"
//       newRow.insertCell (-1) .innerHTML = "<button class=bg-danger type=button onclick=quitar(this)>  Borrar</button>"

//     } else {
//       swal("No se ha enviado al carrito");
//     }
//   });

// }

// function insertRowInTable9(){

//   swal({
//     title: "¿Está seguro?",
//     text: "El producto se agregara al carrito",
//     icon: "warning",
//     buttons: true,
//     dangerMode: true,
//   })
//   .then((willDelete) => {
//     if (willDelete) {
//       swal("El producto se ha enviado al carrito", {
//         icon: "success",
//       });

//       var table = document.getElementById("carritoTab")
//       var newRow = table.insertRow(-1)
//       newRow.insertCell().innerHTML = newRow.rowIndex
//       newRow.insertCell (-1) .innerHTML = "8734"
//       newRow.insertCell (-1) .innerHTML = "<img src=images/chia1.jpg>"
//       newRow.insertCell (-1) .innerHTML = "Chia organica"
//       newRow.insertCell (-1) .innerHTML = " <input type=text value=0 id=item9  name=item  disabled> <button onclick=multiplicar9(),sumar(80) >+</button> <button onclick=decrementar9(),sumar(-80) >-</button>"
//       newRow.insertCell (-1) .innerHTML = "$80"
//       newRow.insertCell (-1) .innerHTML = "<button class=bg-danger type=button onclick=quitar(this)>  Borrar</button>"

//     } else {
//       swal("No se ha enviado al carrito");
//     }
//   });

// }

  
// function Compra()
// { 

//       swal({
//       title: "¿Está seguro?",
//       text: "Se realizara el pago",
//       icon: "warning",
//       buttons: true,
//       dangerMode: true,
//     })
//     .then((willDelete) => {
//       if (willDelete) {
//         swal("Se realizo la compra", {
//           icon: "success",
//         });


//       } else {
//         swal("No se realizo el pago");
//       }
//     });

   
// }

// function Agregar()
// { 

//       swal({
//       title: "¿Está seguro?",
//       text: "Se agregara el producto",
//       icon: "warning",
//       buttons: true,
//       dangerMode: true,
//     })
//     .then((willDelete) => {
//       if (willDelete) {
//         swal("Se ha guardado", {
//           icon: "success",
//         });


//       } else {
//         swal("No se guardo");
//       }
//     });

   
// }

// function Agregaredit()
// { 

//       swal({
//       title: "¿Está seguro?",
//       text: "Se cambiara la información",
//       icon: "warning",
//       buttons: true,
//       dangerMode: true,
//     })
//     .then((willDelete) => {
//       if (willDelete) {
//         swal("Se ha guardado", {
//           icon: "success",
//         });


//       } else {
//         swal("No se guardo");
//       }
//     });

   
// }


// function vaciar()
// { 

//       swal({
//       title: "¿Está seguro?",
//       text: "Se reiniciara el contenido",
//       icon: "warning",
//       buttons: true,
//       dangerMode: true,
//     })
//     .then((willDelete) => {
//       if (willDelete) {
//         swal("Su carrito ahora esta vacio", {
//           icon: "success",
//         });
//         location.reload()

//       } else {
//         swal("No se realizo el reinicio");
//       }
//     });

   
// }




// var yearSelect = document.querySelector("#year");
// var monthSelect = document.querySelector("#month");
// var daySelect = document.querySelector("#day");


// // testeamos si la nueva entrada es de tipo fecha o texto
// var test = document.createElement("input");

// try {
//   test.type = "date";
// } catch (e) {
//   console.log(e.description);
// }

// function populateDays(month) {
//   // borra la actual muestra de elementos <option> que quedan fuera
//   // del <select> para el día, listo para que los siguentes días sean inyectados
//   while (daySelect.firstChild) {
//     daySelect.removeChild(daySelect.firstChild);
//   }

//   // Crea una variable que guarda el nuevo número de días a ser inyectados.
//   var dayNum;

//   // ¿Son 31 o 30 días?
//   if (
//     (month === "Enero") |
//     (month === "Marzo") |
//     (month === "Mayo") |
//     (month === "Julio") |
//     (month === "Augosto") |
//     (month === "Octubre") |
//     (month === "Diciembre")
//   ) {
//     dayNum = 31;
//   } else if (
//     (month === "Abril") |
//     (month === "Junio") |
//     (month === "Septiembre") |
//     (month === "Noviembre")
//   ) {
//     dayNum = 30;
//   } else {
//     // Si el mes es febrero, calcula si el año es bisiesto o no.
//     var year = yearSelect.value;
//     var isLeap = new Date(year, 1, 29).getMonth() == 1;
//     isLeap ? (dayNum = 29) : (dayNum = 28);
//   }

//   // Inyecta el número adecuado de nuevos elementos <option> dentro del <select> para los días
//   for (i = 1; i <= dayNum; i++) {
//     var option = document.createElement("option");
//     option.textContent = i;
//     daySelect.appendChild(option);
//   }

//   // Si el día previo ya ha sido establecido, establece el valor de daySelect
//   // a ese día, para evitar saltar a uno cuando
//   // el año cambie
//   if (previousDay) {
//     daySelect.value = previousDay;

//     // Si el día anterior fue establecido en un número alto, digamos 31, y luego
//     // y elegimos un mes con menos días (por ejemplo febrero),
//     // esta parte del código se asegura de que el día con el valor más grande sea seleccionado
//     // en vez de  mostrat un daySelect en blanco.
//     if (daySelect.value === "") {
//       daySelect.value = previousDay - 1;
//     }

//     if (daySelect.value === "") {
//       daySelect.value = previousDay - 2;
//     }

//     if (daySelect.value === "") {
//       daySelect.value = previousDay - 3;
//     }
//   }
// }


// var date = new Date();
//   var year = date.getFullYear();

//   // Hacer que este año y los cien años anteriores estén en el <select>
//   for (var i = 0; i <= 100; i++) {
//     var option = document.createElement("option");
//     option.textContent = year - i;
//     yearSelect.appendChild(option);
//   }

// // cuando los valores del los elementos <select> del año o el mes son cambiados, vuelve a correr populateDays()
// // en el caso de que el cambio afecte al número de días disponible
// yearSelect.onchange = function () {
//   populateDays(monthSelect.value);
// };

// monthSelect.onchange = function () {
//   populateDays(monthSelect.value);
// };

// //preserva el día seleccionado
// var previousDay;

// // actualiza que día ha sido establecido anteriormente
// // fíjate en el final de populateDays() para entender el uso
// daySelect.onchange = function () {
//   previousDay = daySelect.value;
// };


// function registro(){

//   swal({
//     title: "¿Está seguro?",
//     text: "Se relizara el registro",
//     icon: "warning",
//     buttons: true,
//     dangerMode: true,
//   })
//   .then((willDelete) => {
//     if (willDelete) {
//       swal("Registro finalizado", {
//         icon: "success",
//       });




//     } else {
//       swal("Se ha cancelado su registro");
//     }
//   });

// }


// function decrementar() {
	

//   valor = document.getElementById("item");
//   if (valor.value > 0) valor.value --;
//  }

//  function multiplicar() {
//   num = parseInt(); 

//   valor = document.getElementById("item");
//   valor.value ++;

// }


// function decrementar2() {
	

//   valor = document.getElementById("item2");
//   if (valor.value > 0) valor.value --;
//  }

//  function multiplicar2() {
//   num = parseInt(); 

//   valor = document.getElementById("item2");
//   valor.value ++;

// }


// function decrementar3() {
	

//   valor = document.getElementById("item3");
//   if (valor.value > 0) valor.value --;
//  }

//  function multiplicar3() {
//   num = parseInt(); 

//   valor = document.getElementById("item3");
//   valor.value ++;

// }

// function decrementar4() {
	

//   valor = document.getElementById("item4");
//   if (valor.value > 0) valor.value --;
//  }

//  function multiplicar4() {
//   num = parseInt(); 

//   valor = document.getElementById("item4");
//   valor.value ++;

// }

// function decrementar5() {
	

//   valor = document.getElementById("item5");
//   if (valor.value > 0) valor.value --;
//  }

//  function multiplicar5() {
//   num = parseInt(); 

//   valor = document.getElementById("item5");
//   valor.value ++;

// }

// function decrementar6() {
	

//   valor = document.getElementById("item6");
//   if (valor.value > 0) valor.value --;
//  }

//  function multiplicar6() {
//   num = parseInt(); 

//   valor = document.getElementById("item6");
//   valor.value ++;

// }

// function decrementar7() {
	

//   valor = document.getElementById("item7");
//   if (valor.value > 0) valor.value --;
//  }

//  function multiplicar7() {
//   num = parseInt(); 

//   valor = document.getElementById("item7");
//   valor.value ++;

// }

// function decrementar8() {
	

//   valor = document.getElementById("item8");
//   if (valor.value > 0) valor.value --;
//  }

//  function multiplicar8() {
//   num = parseInt(); 

//   valor = document.getElementById("item8");
//   valor.value ++;

// }

// function decrementar9() {
	

//   valor = document.getElementById("item9");
//   if (valor.value > 0) valor.value --;
//  }

//  function multiplicar9() {
//   num = parseInt(); 

//   valor = document.getElementById("item9");
//   valor.value ++;

// }



// function sumar (valor) {
//   var total = 0;	
//   valor = parseInt(valor); // Convertir el valor a un entero (número).

//   total = document.getElementById('spTotal').innerHTML;

//   // Aquí valido si hay un valor previo, si no hay datos, le pongo un cero "0".
//   total = (total == null || total == undefined || total == "") ? 0 : total;

//   /* Esta es la suma. */
//   total = (parseInt(total) + parseInt(valor));

//   // Colocar el resultado de la suma en el control "span".
//   document.getElementById('spTotal').innerHTML = total;
// }






// // function decrementar2(num) {
	
// //   num = parseInt(num); 

// //   valor = document.getElementById("item3");
// //   if (valor.value > 0) valor.value --;


// //   valor2 = document.getElementById("item4");

// //   producto = num * valor.value;

// //   valor2.value = producto;
// //  }


// //  function multiplicar2(num) {
// //   num = parseInt(num); 

// //   valor = document.getElementById("item3");
// //   valor.value ++;

// //   valor2 = document.getElementById("item4");

// //   producto = num * valor.value;

// //   valor2.value = producto;

// // }

// // "<input type=text value=$250   disabled>"

