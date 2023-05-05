var textoresultadocorrecto = "¡Correcto! has elegido todas las respuestas correctas.";
var textoresultadoincorrecto = "¡Incorrecto! has elegido alguna respuesta incorrecta.";

function mostrarResultado(valor) {
    if(valor) {
	    document.getElementById("resultado").innerHTML = textoresultadocorrecto;
    } else {
        document.getElementById("resultado").innerHTML = textoresultadoincorrecto;
    }
}


function verificarRespuesta() {
	var preg1;
    var preg2;
    var preg3;
    var preg4;
    var preg5;
    var preg6;


    if (document.getElementById("preg1op1").checked) {
        preg1 = document.getElementById("preg1op1").value;
    } 
    if (document.getElementById("preg2op2").checked) {
        preg2 = document.getElementById("preg2op2").value;
    }
    if (document.getElementById("preg3op2").checked) {
        preg3 = document.getElementById("preg3op2").value;
    }
    if (document.getElementById("preg4op3").checked) {
        preg4 = document.getElementById("preg4op3").value;
    }
    if (document.getElementById("preg5op1").checked) {
        preg5 = document.getElementById("preg5op1").value;
    }
    if (document.getElementById("preg6op2").checked) {
        preg6 = document.getElementById("preg6op2").value;
    }

    if (preg1 && preg2 && preg3 && preg4 && preg5 && preg6) {
        mostrarResultado(true);
    } else {
        mostrarResultado(false);
    }


}