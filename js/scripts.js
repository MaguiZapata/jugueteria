class Producto {
    constructor(nombre, precio, id, img) {
        this.nombre = nombre;
        this.precio = precio;
        this.id = id;
        this.img = img;

    }
    conDescuento() {
        this.precio = this.precio - this.precio * 0.15
        return this.precio
    }

}

const productos = [];
productos.push(new Producto("encastre_coco", 1000, 0, "./img/encastre_coco.webp"));
productos.push(new Producto("munieca", 8500, 1, "./img/munieca.jpg"));
productos.push(new Producto("auto_pp", 6500, 2, "./img/auto_ppatrol.jpg"));
productos.push(new Producto("pelota", 2300, 3, "./img/pelotas.jpg"));

let galeria = document.getElementById("productos");
let stringresp = ""
//Crea las tarjetas en html segun el contenido del array productos
for (let i = 0; i < productos.length; i++) {
    const element = productos[i];
    let tarjeta = `<div class="card mb-3">
                    <img src= ${element.img} class="card-img-top" alt="...">
                    <div class="card-body">
                    <h5 class="card-title">${element.nombre}</h5>
                    <p class="card-text"><small class="text-muted"> $ ${element.precio}</small></p>
                    </div>
                    <a href="#" id = "${element.id}" class="btn btn-primary agregar">Agregar al carrito</a>
                    </div>`;
    //
    stringresp = stringresp + tarjeta
}
galeria.innerHTML = stringresp

//btnagregar es un array con todos los botones "agregar"
let btnagregar = document.querySelectorAll(".agregar")
//para cada elemento del btnagregar dispara un evento con el click en el btn 
btnagregar.forEach(element => {
    element.addEventListener("click", (e) => {
        let idProd = e.target.id
        agregarCarrito(idProd);
        totalizar()

    })
});

let carrito = []
//traigo del localstorage el contenido de carritoGuadado y le asigno una variable
let carritoGuardado = JSON.parse(localStorage.getItem("carritoGuardado"));
// si el carritoGuardado está definido, entonces lo copia en el array carrito, si no, no hace nada
if (carritoGuardado!= undefined) {
    carrito = carritoGuardado
}
else{
    null
}
const contadorCarrito = document.getElementById("contadorCarrito")
actualizarTablaCarrito()
//guarda en el localstorage el carrito
function guardarCarrito() {
    localStorage.setItem("carritoGuardado", JSON.stringify(carrito));
}

//le asigno una variable a un elemento del html
let totalTabla = document.getElementById("total")
//suma los valores de todos los productos del carrito
function totalizar() {
    let total = 0
    for (let index = 0; index < carrito.length; index++) {

        total = total + carrito[index].precio;
    }
    totalTabla.innerText = `El total a pagar es $ ${ total}`

}


function agregarCarrito(id) {
    let productoseleccionado = productos.find(prod => prod.id == id)

    carrito.push(productoseleccionado)
    alert(`Agregaste ${productoseleccionado.nombre} a tu carrito`);
    guardarCarrito()
    actualizarTablaCarrito();
    contadorCarrito.innerHTML = carrito.length;

}
;


function actualizarTablaCarrito() {
    if (carrito.length != 0) {

        let resumen = document.getElementById("resumencompra");
        let compra = "";

        for (let i = 0; i < carrito.length; i++) {
            const element = carrito[i];
            let tablaresumen = `       
                                        <tr>
                                            <th scope="row">1 </th>
                                            <td>${ element.nombre}</td>
                                            <td> <img class = "imgtabla" src="${ element.img}" alt=""></td>
                                            <td>${ element.precio}</td>
                                            
                                        </tr>
                                        
                                        `

            compra = compra + tablaresumen
        }

        resumen.innerHTML = compra

        
    }

    contadorCarrito.innerHTML = carrito.length

}

let btnVaciar= document.getElementById("vaciar");
btnVaciar.addEventListener ("click", (e)=>{
carrito= [];
localStorage.removeItem("carritoGuardado");
actualizarTablaCarrito();
location.reload()
})





















/* 






function seguircomprando() {
    let confirmacion = prompt("Qué desea hacer: \n1- Seguir comprando \n 2- Finalizar compra")
    if (confirmacion == "1") {
        seleccionprod()


    } else if (confirmacion == "2") {
       
        ;

        let cuerpo = document.getElementById("cuerpo")

        cuerpo.innerHTML = `<h2>El total a pagar es $  ${ total}. Muchas gracias por su compra</h2>`

    } else {

        do {
            alert("Ingreso incorrecto");
            confirmacion = prompt("Qué desea hacer: \n1- Seguir comprando? \n 2- Finalizar compra \n 3- Abandonar compra");
            if (confirmacion == "1") {
                seleccionprod();
            } else if (confirmacion == "2") {
               
                cuerpo.innerHTML = `<h2>El total a pagar es $  ${ total}. Muchas gracias por su compra</h2>`

            }


        } while (confirmacion != "1" && confirmacion != "2");
    }
}

function infoCompra(id) {
    let prod = productos.find(item => item.id === id);
    alert("El precio de " + prod.nombre + " con descuento es de $ " + prod.conDescuento());
    agregarCarrito(prod);
    totalizar()
    seguircomprando()
}

function seleccionprod() {
    let compra = prompt("Qué productos vas a llevar? \n 0- Juego de Encastre \n 1- Muñeca Super Cute \n 2- Auto Paw Patrol \n 3- Pelota infantil");

    switch (compra) {
        case "0":
            infoCompra(0)

            break;
        case "1":
            infoCompra(1)
            break;
        case "2":
            infoCompra(2)
            break;
        case "3":
            infoCompra(3)
            break;
        default:
            cuerpo.innerHTML = `<h2>No elegiste ningún producto. Actualizá la página para volver a intentarlo.</h2>`

            break;
    }

}

seleccionprod() */