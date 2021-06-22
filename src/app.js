let express = require( 'express' );
let bodyParser = require('body-parser'); // Chat
let app = express();
let server = require( 'http' ).Server( app );
let io = require( 'socket.io' )( server );
let diarc = require( './ws/diarc' );
let path = require( 'path' );
let favicon = require( 'serve-favicon' );
let mongoose = require('mongoose'); // Chat

app.use( favicon( path.join( __dirname, 'favicon.ico' ) ) );
app.use( '/assets', express.static( path.join( __dirname, 'assets' ) ) );

app.use(bodyParser.json()); // Chat
app.use(bodyParser.urlencoded({extended: false})); // Chat

// Start Chat
let Message = mongoose.model('Message',{
    name : String,
    message : String
});
// End Chat

app.get('/', ( req, res ) => {
    res.redirect('/diarc');
});

// Satellite
app.get( '/diarc', ( req, res ) => {
    res.sendFile( __dirname + '/diarc.html' );
});

app.post('/messages', (req, res) => {
    var message = new Message(req.body);
    message.save((err) =>{
        if(err)
            sendStatus(500);
        io.emit('message', req.body);
        res.sendStatus(200);
    })
})

io.of('/diarc').on('connection', diarc);

server.listen( 8080 );
