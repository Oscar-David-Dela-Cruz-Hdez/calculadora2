// calculadora.js

let display = document.getElementById('pantallita');
let operacionActual = '';
let operador = '';
let primerOperando = '';

function agregarNumero(numero) {
    display.value += numero;
}

function operacion(op) {
    primerOperando = display.value;
    operador = op;
    display.value = '';
}

function calcular() {
    let segundoOperando = display.value;
    let resultado;
    switch (operador) {
        case '+':
            resultado = parseFloat(primerOperando) + parseFloat(segundoOperando);
            break;
        case '-':
            resultado = parseFloat(primerOperando) - parseFloat(segundoOperando);
            break;
        case '*':
            resultado = parseFloat(primerOperando) * parseFloat(segundoOperando);
            break;
        case '/':
            resultado = parseFloat(primerOperando) / parseFloat(segundoOperando);
            break;
        default:
            resultado = 'Error';
    }
    display.value = resultado;
    operacionActual = '';
    operador = '';
    primerOperando = '';
}

function limpiar() {
    display.value = '';
    operacionActual = '';
    operador = '';
    primerOperando = '';
}
