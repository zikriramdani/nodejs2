var Turn = require('node-turn');
var server = new Turn({
    // set options
    authMech: 'long-term',
    credentials: {
        username: "password"
    },
    listeningPort: "8080", // 31330
    listeningIps: ["180.210.205.235"] // 172.31.157.216
});
server.start();