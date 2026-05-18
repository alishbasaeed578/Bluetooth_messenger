const socket = io();

const sendBtn = document.getElementById('sendBtn');

const messageInput =
    document.getElementById('messageInput');

const messages =
    document.getElementById('messages');

const fileInput =
    document.getElementById('fileInput');

const scanBtn =
    document.getElementById('scanBtn');

const deviceList =
    document.getElementById('deviceList');

function addMessage(text, type){

    const div = document.createElement('div');

    div.classList.add('message');

    div.classList.add(type);

    const time =
        new Date().toLocaleTimeString();

    div.innerHTML = `
        ${text}
        <br>
        <small>${time}</small>
    `;

    messages.appendChild(div);

    messages.scrollTop =
        messages.scrollHeight;
}

sendBtn.addEventListener('click', () => {

    const text = messageInput.value;

    if(text === '') return;

    socket.emit('message', text);

    addMessage(text, 'sent');

    messageInput.value = '';
});

socket.on('message', (text) => {

    addMessage(text, 'received');
});

fileInput.addEventListener('change', () => {

    const file = fileInput.files[0];

    const reader = new FileReader();

    reader.onload = () => {

        socket.emit('file', {

            name: file.name,

            data: reader.result
        });

        addMessage(
            `File sent: ${file.name}`,
            'sent'
        );
    };

    reader.readAsDataURL(file);
});

socket.on('file', (file) => {

    const div =
        document.createElement('div');

    div.classList.add(
        'message',
        'received'
    );

    const link =
        document.createElement('a');

    link.href = file.data;

    link.download = file.name;

    link.innerText =
        `Download ${file.name}`;

    div.appendChild(link);

    messages.appendChild(div);
});

scanBtn.addEventListener('click',
async () => {

    try {

        const device =
            await navigator.bluetooth.requestDevice({

                acceptAllDevices:true
            });

        deviceList.innerHTML =
            `Connected to: ${device.name}`;

    } catch(err){

        console.log(err);
    }
});