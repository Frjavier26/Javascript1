// opciones en card
const cantidadInput = document.querySelector(".quantity");
const colorInput = document.querySelector("#color");
const precio = 7990;
const calcular = document.querySelector(".calculate");

// resultados
const precioTotal = document.querySelector(".final-price-amount");
const cantidadTotal = document.querySelector(".final-quantity-amount");
const colorFinal = document.querySelector(".bola-color");

let total = 0;

function calcularTotal(){
    const cantidad = cantidadInput.value
    const color = colorInput.value

    precioTotal.innerHTML = (+cantidad * precio).toLocaleString();
    cantidadTotal.innerHTML = cantidad
    colorFinal.style.backgroundColor = color
}
