

class Sockets {

    constructor( io ) {

        this.io = io;
        this.socketsEvent();
        
    }

    socketsEvent() {

        // On connection
        this.io.on('connection', ( socket ) => {

            // Escuchar evento: message-to-server
            socket.on('message-to-server', (data) => {
                console.log(data);
                this.io.emit('message-from-server', data);
            });

        });
    }

}

module.exports = Sockets;