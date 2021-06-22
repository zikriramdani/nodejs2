const socket = io('http://localhost:8080/diarc');

// Push Play
async function pushPlay() {
    socket.emit('pushPlay');
    // console.log('pushPlay');
};

// Hint Left
async function hintLeft() {
    socket.emit('hintLeft');
    // console.log('hintLeft');
};

// Hint Right
async function hintRight() {
    socket.emit('hintRight');
    // console.log('hintRight');
};

// Hint Forward
async function hintForward() {
    socket.emit('hintForward');
    // console.log('hintForward');
};

// Hint Backward
async function hintBackward() {
    socket.emit('hintBackward');
    // console.log('hintBackward');
};

// Push Grip
async function pushGrip() {
    socket.emit('pushGrip');
    // console.log('pushGrip');
};

 
// Chat
const messageForm = document.getElementById('send-container');
const messageInput = document.getElementById('message-input');
const messageContainer = document.getElementById('message-container');

messageForm.addEventListener('submit', e => {
    e.preventDefault();
    const message = messageInput.value;
    socket.emit('send-chat-message', message);
    messageInput.value = '';
});

socket.on('chat-message', data => {
    appendMessage(data);
});

async function appendMessage(message) {
    const messageElement = document.createElement('div');
    messageElement.innerText = message;
    messageContainer.append(messageElement);
};