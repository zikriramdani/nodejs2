const moduleexports = ( socket ) => {
    
    var msg = 'io.of./katy01.on.connection';
    var dateBegin = new Date();

    socket.join("roomkaty01");

    socket.on( 'socketiocontrol', ( data ) => {
        socket.broadcast.in( "roomkaty01" ).emit( 'socketiocontrol', data );
        console.log( 'Data roomkaty01: ' + data );
    } );

    var dateEND = new Date();
    console.log(dateEND.getMinutes() + ":" + dateEND.getSeconds() + ":" + dateEND.getMilliseconds() + ' | ' + msg + ' END ' + (dateEND - dateBegin));

};

module.exports = moduleexports;
