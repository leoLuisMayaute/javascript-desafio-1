let number = prompt("Tabla de multiplicar de : ");
let tablaDeMultiplicar;

for (let i = 1; i <= 12; i++){
    tablaDeMultiplicar = number * i;
    document.write(`${number} x ${i} es igual a ${tablaDeMultiplicar} <br>`);
}