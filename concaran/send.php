<?php

  //Funcion que formatea el mensaje de error en formato json y sale del script

  function Error($mensaje){
  	echo '{"status": "401", "mensaje": "'.$mensaje.'"}'; // Error 401 - Credenciales Invalidas
  	exit;

  }

  //Funcion para validar los datos

  function ValDato($dato){
  	$dato = trim($dato);        //Eliminar espacios a los lados
  	$dato = strip_tags($dato);//Eliminar etiquetas HTML
  	return $dato;

  }

  // Recolección y validación de valores del formulario

  if(isset($_POST['nombre']))
  	$nombre = ValDato($_POST['nombre']);
  if(isset($_POST['asunto']))
  	$asunto = ValDato($_POST['asunto']);
  if(isset($_POST['email']))
  	$email = ValDato($_POST['email']);
  if(isset($_POST['email2']))
    $email2 = ValDato($_POST['email2']);
  if(isset($_POST['mensaje']))
  	$mensaje = ValDato($_POST['mensaje']);

  //Se utiliza la funcion filter_var para validar el correo

  if(!filter_var($email, FILTER_VALIDATE_EMAIL))
  	Error('El correo no es valido.');
  if(strlen($mensaje)<15)
  	Error('Su mensaje debe ser al menos de 15 caracteres');

  //    Envio correo

  $para = 'estudioposcaconcaran@gmail.com'; // TEMPORAL
	$titulo = 'Contacto Web Estudio Posca - Concarán San Luis';
	$header = 'From: ' . $email;
	$msjCorreo = "Nombre: $nombre\n E-Mail: $email\n Asunto: $asunto\n Mensaje:\n $mensaje";

if($email2 == ''){
  mail($para, $titulo, $msjCorreo, $header);
  echo '{"status": "200", "mensaje": "OK"}';  // Retorno 200 - OK
}else{
  echo '{"status": "404", "mensaje": "Bot detectado"}';  // Retorno 404 - Error
}

?>