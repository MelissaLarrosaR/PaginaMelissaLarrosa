function mostrarRespuesta() {
    var nombre = document.getElementById("nombre").value;
    var mensaje = document.getElementById("mensaje").value;

    // verifica si el campo "Nombre" está vacío
    if (nombre.trim() === "") {
        alert("Por favor, ingrese su nombre.");
        return;
    }


    var textorespuestaacepto = "Hola " + nombre + ", gracias por aceptar la invitación. Nos vemos el 02 de marzo. Saludos.";
    var textorespuestadeclino = "Hola " + nombre + ", es una pena que no puedas asistir. Gracias por avisar. Saludos.";
    var textorespuestaacompañado = "Hola " + nombre + ", gracias por aceptar la invitación. Los esperamos el 02 de marzo. Saludos.";
    //hago un selector utilizando las variables que le asigne a los valores de los checkbox del formulario
    if (document.getElementById("acepto").checked) {
        document.getElementById("respuesta").innerHTML = textorespuestaacepto;
    }
    else if (declino = document.getElementById("declino").checked) {
        document.getElementById("respuesta").innerHTML = textorespuestadeclino;
    }
    else if (acompañado = document.getElementById("acompañado").checked) {
        document.getElementById("respuesta").innerHTML = textorespuestaacompañado;
    }

    //envio un correo electronico con la respuesta


}
