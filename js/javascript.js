var resultado = "";

function punto() {
    resultado = resultado + ".";
    document.getElementById("resultadoOperacion").innerHTML = resultado;
}


function n0() {
    resultado = resultado + "0";
    document.getElementById("resultadoOperacion").innerHTML = resultado;
}


function n1() {
    resultado = resultado + "1";
    document.getElementById("resultadoOperacion").innerHTML = resultado;
}

function n2() {
    resultado = resultado + "2";
    document.getElementById("resultadoOperacion").innerHTML = resultado;
}

function n3() {
    resultado = resultado + "3";
    document.getElementById("resultadoOperacion").innerHTML = resultado;
}

function n4() {
    resultado = resultado + "4";
    document.getElementById("resultadoOperacion").innerHTML = resultado;
}

function n5() {
    resultado = resultado + "5";
    document.getElementById("resultadoOperacion").innerHTML = resultado;
}

function n6() {
    resultado = resultado + "6";
    document.getElementById("resultadoOperacion").innerHTML = resultado;
}

function n7() {
    resultado = resultado + "7";
    document.getElementById("resultadoOperacion").innerHTML = resultado;
}


function n8() {
    resultado = resultado + "8";
    document.getElementById("resultadoOperacion").innerHTML = resultado;
}

function n9() {
    resultado = resultado + "9";
    document.getElementById("resultadoOperacion").innerHTML = resultado;
}

function dividir() {
    resultado = resultado + "/";
    document.getElementById("resultadoOperacion").innerHTML = resultado;
}

function sumar() {
    resultado = resultado + "+";
    document.getElementById("resultadoOperacion").innerHTML = resultado;
}

function restar() {
    resultado = resultado + "-";
    document.getElementById("resultadoOperacion").innerHTML = resultado;
}

function multi() {
    resultado = resultado + "*";
    document.getElementById("resultadoOperacion").innerHTML = resultado;
}

function borrar() {
    resultado = resultado.substring(0, resultado.length - 1);
    document.getElementById("resultadoOperacion").innerHTML = resultado;
}

function resultadoValor() {
    document.getElementById("resultadoOperacion").innerHTML = resultado;
}