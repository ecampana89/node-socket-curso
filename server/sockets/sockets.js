const {io} = require('../server')

io.on('connection', (client) => {
    console.log('Usuario Conectado...')

    client.on('disconnect', () => {
        console.log('Cliente desconectado')
    })

    //escuchar el cliente
    client.on('enviarMensaje', (data, callback) => {
        console.log(`data: ${JSON.stringify(data)}`)

        client.broadcast.emit('enviarMensaje', data)
    })

    //emitir mensaje
    client.emit('enviarMensaje', {
        usuario: 'Administrador',
        mensaje: 'Bienvenido a esta aplicacion'
    })
})
