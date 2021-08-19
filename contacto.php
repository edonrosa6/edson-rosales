<?php
    $destino = "edsonrosales123@gmail.com, edsonrosalesunodostres@gmail.com";
    $email = $_POST["email"];
    $asunto = $_POST["asunto"];
    $mensaje = $_POST["mensaje"];

    $contenido = "Correo electrónico: " . $email . "\nMensaje " . $mensaje; 
    mail($destino, $asunto, $contenido);
    header("Location:index.html");
?>