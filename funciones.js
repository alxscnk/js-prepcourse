function cuidadoConElConsoleLog(Nombre) {
    console.log(Nombre);
    return Nombre;
}

function otraFuncion() {
    return ("El nombre retornado por la funcion ¨cuidadoConElConsoleLog¨ es: " + cuidadoConElConsoleLog("alex"));
}

function cuidadoConElConsoleLog(Nombre) {
    return Nombre;
    console.log(Nombre);
}