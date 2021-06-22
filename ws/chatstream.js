const stream = ( socket ) => {

    socket.on( 'subscribe', ( data ) => {

        var msg = 'socket.on(subscribe)';
        var dateBegin = new Date();

        //subscribe/join a room
        socket.join( data.room );
        socket.join( data.socketId );
        
        console.log( data.room );
        console.log( data.socketId );

        //Inform other members in the room of new user's arrival
        // if ( socket.adapter.rooms[data.room].length > 1 ) {
        //     socket.to( data.room ).emit( 'new user', { socketId: data.socketId } );
        // }

    } );

    socket.on( 'unsubscribe', ( data ) => {
        socket.leave( data.room );
    } );

    socket.on( 'chat', ( data ) => {
        // console.log(data);
        socket.to( data.room ).emit( 'chat', { sender: data.sender, msg: data.msg } );
    } );

    socket.on( 'remote', ( data ) => {
        // console.log(data);
        socket.to( data.room ).emit( 'remote', { sender: data.sender, machine: data.machine, msg: data.msg } );
    } );
};

module.exports = stream;
