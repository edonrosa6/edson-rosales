<?php
    $destino = "edsonrosales123@gmail.com, edsonrosalesunodostres@gmail.com";
    $email = $_POST["email"];
    $asunto = $_POST["asunto"];
    $mensaje = $_POST["mensaje"];

    $contenido = "Correo: " . $email . "\nMensaje: " . $mensaje;
    mail($destino, $asunto, $contenido);
?>