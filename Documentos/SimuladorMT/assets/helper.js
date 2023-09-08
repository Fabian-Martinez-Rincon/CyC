function show_messages(msg) {
  $("#log_container").slideUp('slow', function () {
    document.getElementById("log").innerHTML = msg;
    $("#log_container").slideDown('slow', function () {
    });
  });
}

function load_code(code) {
  if (code.length >= 10) {
    myCodeMirror.setValue(code);
  }
  else {
    myCodeMirror.setValue('// Escribir el código de la MT (función delta) y compilar.\n' +
      '// Cargar el input en la cinta.\n'+
      '// Presionar \"Play\" para comenzar la ejecución.\n\n' +
      '// Sintaxis\n' +
      '// delta(q1,s1)=(q2,s2,M) con M perteneciente a {D,I,S}\n' +
      '// se escribe en dos líneas de la siguiente manera:\n' +
      '// q1,s1\n' +
      '// q2,s2,M\n\n'+
      '// Estados especiales:\n' +
      '//    q0 es el estado inicial\n' +
      '//    qA es el estado de aceptación para MT Reconocedoras\n'+
      '//    qR es el estado de rechazo para MT Reconocedoras\n'+ 
      '//    qd es el estado de detención para MT Computadoras\n\n'+ 
      '//Código de ejemplo:\n\n' +
      'MT: Sucesor\n\n' +
      'q0, 0\n' +
      'q0, 0, D\n\n' +
      'q0, 1\n' +
      'q0, 1, D\n\n' +
      'q0, B\n' +
      'q1, B, I\n\n' +
      'q1, 1\n' +
      'q1, 0, I\n\n' +
      'q1, 0\n' +
      'qd, 1, S\n\n' +
      'q1, B\n' +
      'qd, 1, S\n\n');
  }
}