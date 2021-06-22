const diarc = (socket) => {
    const CL = 'CL_';
    
    // Push Play
    socket.on('pushPlay', () => {
        Play = CL + 'play';
        message = Play.toString();
        // clients.publish(topics + gameTopicCL, message);
        console.log('Message sent!', message);
    });

    // Hint Left
    socket.on('hintLeft', () => {
        Left = CL + 'left';
        message = Left.toString();
        // clients.publish(topics + gameTopicCL, message);
        console.log('Message sent!', message);
    });

    // Hint Right
    socket.on('hintRight', () => {
        Right = CL + 'right';
        message = Right.toString();
        // clients.publish(topics + gameTopicCL, message);
        console.log('Message sent!', message);
    });

    // Hint Forward
    socket.on('hintForward', () => {
        Forward = CL + 'forward';
        message = Forward.toString();
        // clients.publish(topics + gameTopicCL, message);
        console.log('Message sent!', message);
    });

    // Hint Backward
    socket.on('hintBackward', () => {
        Backward = CL + 'backward';
        message = Backward.toString();
        // clients.publish(topics + gameTopicCL, message);
        console.log('Message sent!', message);
    });

    // Push Grip
    socket.on('pushGrip', () => {
        Grip = CL + 'grip';
        message = Grip.toString();
        // clients.publish(topics + gameTopicCL, message);
        console.log('Message sent!', message);
    });

    // Chat
    socket.on('send-chat-message', message => {
        socket.emit('chat-message', message);
        socket.broadcast.emit('chat-message', message);
    });
};

module.exports = diarc;
