const express = require( 'express' );
const app = express();
const server = app.listen(23000);
const cors = require('cors');

app.use(cors());

let socketcontrolclaudia01 = require( './ws/socketcontrolclaudia01' );
let socketcontrolkaty01 = require( './ws/socketcontrolkaty01' );
let socketcontrolselena01 = require( './ws/socketcontrolselena01' );

const io = require( 'socket.io' )( server , {
    cors: {
      origin: "http://satellite.dewaticdev.buyungupix.bid:2323", 
      methods: ["GET", "POST"]
    }
});

io.on( 'connection', socketcontrolclaudia01 );
io.of( '/claudia01' ).on( 'connection', socketcontrolclaudia01 );
io.of( '/katy01' ).on( 'connection', socketcontrolkaty01 );
io.of( '/selena01' ).on( 'connection', socketcontrolselena01 );