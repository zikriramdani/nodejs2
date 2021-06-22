const moduleexports = ( socket ) => {
    
    var msg = 'io.of./selena01.on.connection';
    var dateBegin = new Date();

    socket.join("roomselena01");

    socket.on( 'socketiocontrol', ( data ) => {
        socket.broadcast.in( "roomselena01" ).emit( 'socketiocontrol', data );
        console.log( 'Data roomselena01: ' + data );
    } );

    var dateEND = new Date();
    console.log(dateEND.getMinutes() + ":" + dateEND.getSeconds() + ":" + dateEND.getMilliseconds() + ' | ' + msg + ' END ' + (dateEND - dateBegin));

};

module.exports = moduleexports;
