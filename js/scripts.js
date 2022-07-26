class Producto {
    constructor(nombre, precio, id) {
        this.nombre = nombre;
        this.precio = precio;
        this.id= id;

    }
    conDescuento() {
        this.precio = this.precio - this.precio * 0.15
        return this.precio
    }

}

const productos = [];
productos.push(new Producto("encastre_coco", 1000,0));
productos.push(new Producto("munieca", 8500,1));
productos.push(new Producto("auto_pp", 6500,2));
productos.push(new Producto("pelota", 2300,3))
const carrito = []
let total = 0;

function totalizar() {
    for (let index = 0; index < carrito.length; index++) {
        total = total + carrito[index].precio
    }
}

function agregarCarrito(p) {
    carrito.push(p)
}

function seguircomprando() {
    let confirmacion = prompt("Qué desea hacer: \n1- Seguir comprando \n 2- Finalizar compra")
    if (confirmacion == "1") {
        seleccionprod()


    } else if (confirmacion == "2") {
        alert("El total a pagar es $" + total +". Muchas gracias por su compra");

    }
     else {

    do {
        alert("Ingreso incorrecto");
        confirmacion = prompt("Qué desea hacer: \n1- Seguir comprando? \n 2- Finalizar compra \n 3- Abandonar compra");
        if (confirmacion == "1") {
            seleccionprod(); 
        } else if(confirmacion == "2") {
            alert("El total a pagar es $" + total +". Muchas gracias por su compra");
          

        } 
        

    } while (confirmacion != "1" && confirmacion!="2");
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
            alert("No elegiste ningún producto. Actualizá la página para volver a intentarlo.");
            break;
    }

}

seleccionprod()



