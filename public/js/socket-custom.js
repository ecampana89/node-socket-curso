const socket = io();
socket.on('connect', function () {
    console.log("Conectado al servidor...")
});

socket.on('disconnect', function () {
    console.log("Perdimos conexion con el servidor...")
});

//Enviar informacion
socket.emit('enviarMensaje', {
    usuario: 'Esteban Campana',
    mensaje: 'Hola mundo'
}, function (respuesta) {
    console.log(" respuesta server: ", respuesta);
});

//escuchar al servidor
socket.on('enviarMensaje', function (mensaje) {
    console.log('servidor: ', mensaje)
})
