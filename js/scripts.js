const encastre_coco = 1000;
const munieca = 8500;
const auto_pp = 6500;
const pelotas = 2300;
const iva = x => x * 0.21;
const descuento = y => y * 0.15;
let saldocondto = 0;
const suma = (a, b) => a + b;
const resta = (a, b) => a - b;


let carrito = prompt("Qué productos vas a llevar? \n 1- Juego de Encastre \n 2- Muñeca Super Cute \n 3- Auto Paw Patrol \n 4- Pelota infantil");




switch (carrito) {
    case "1":
        let encastre_con_descuento = (resta(encastre_coco, descuento(encastre_coco)));
        alert("Tu saldo a pagar con descuento antes de iva es de $ " + encastre_con_descuento);
        let encastre_con_dto_con_iva = (suma(encastre_con_descuento, iva(encastre_con_descuento)));
        alert("Tu saldo a pagar final es de $ " + encastre_con_dto_con_iva);
        break;
    case "2":
        let munieca_con_descuento = (resta(munieca, descuento(munieca)));
        alert("Tu saldo a pagar con descuento antes de iva es de $ " + munieca_con_descuento);
        let munieca_con_dto_con_iva = (suma(munieca_con_descuento, iva(munieca_con_descuento)));
        alert("Tu saldo a pagar final es de $ " + munieca_con_dto_con_iva);
        break;
    case "3":
        let auto_pp_con_descuento = (resta(auto_pp, descuento(auto_pp)));
        alert("Tu saldo a pagar con descuento antes de iva es de $ " + auto_pp_con_descuento);
        let auto_pp_con_dto_con_iva = (suma(auto_pp_con_descuento, iva(auto_pp_con_descuento)));
        alert("Tu saldo a pagar final es de $ " + auto_pp_con_dto_con_iva);
        break;

    case "4":
        let pelotas_con_descuento = (resta(pelotas, descuento(pelotas)));
        alert("Tu saldo a pagar con descuento antes de iva es de $ " + pelotas_con_descuento);
        let pelotas_con_dto_con_iva = (suma(pelotas_con_descuento, iva(pelotas_con_descuento)));
        alert("Tu saldo a pagar final es de $ " + pelotas_con_dto_con_iva);
        break;
    default:
        alert("No elegiste ningún producto. Actualizá la página para volver a intentarlo.");

        break;
}


let confirmacion = prompt("Confirma la compra?")

if (confirmacion == "si") {
    alert("Muchas gracias por su compra");
} else if (confirmacion == "no") {
    alert("Lo esperamos en otra oportunidad, gracias!");

} else {

    do {
        alert("Ingreso incorrecto, debe ingresar si o no");
        confirmacion = prompt("Confirma la compra?");
        if (confirmacion == "si") {
            alert("Muchas gracias por su compra");
        } else if (confirmacion == "no") {
            alert("Lo esperamos en otra oportunidad, gracias!");
            break;

        };
        break;

    } while (confirmacion != ("si" || "no"));
}
