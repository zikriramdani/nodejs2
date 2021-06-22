const moduleexports = ( socket ) => {
    
    var msg = 'io.of./claudia01.on.connection';
    var dateBegin = new Date();

    socket.join("roomClaudia01");

    socket.on( 'socketiocontrol', ( data ) => {
        socket.broadcast.in( "roomClaudia01" ).emit( 'socketiocontrol', data );
        console.log( 'Data roomClaudia01: ' + data );
    } );

    socket.on( 'socketioinfo', ( data ) => {
        socket.broadcast.in( "roomClaudia01" ).emit( 'socketioinfo', data );
        console.log( 'Data roomClaudia01: ' + data );
    } );

    var dateEND = new Date();
    console.log(dateEND.getMinutes() + ":" + dateEND.getSeconds() + ":" + dateEND.getMilliseconds() + ' | ' + msg + ' END ' + (dateEND - dateBegin));

};

module.exports = moduleexports;
