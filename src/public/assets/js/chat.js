  const CHAR_RETURN = 13;

  const localhost = 'ws://localhost:3000/chat'
  
  const socket = new WebSocket(localhost);
  const chat = document.getElementById('chat');
  const name = document.getElementById('name');
  const msg = document.getElementById('msg');
  msg.focus();

  const writeLine = (text) => {
    const line = document.createElement('div');
    line.innerHTML = `<p>${text}</p>`;
    chat.appendChild(line);
  };

  socket.addEventListener('open', () => {
    writeLine('connected');
  });

  socket.addEventListener('close', () => {
    writeLine('closed');
  });

  socket.addEventListener('message', ({ data }) => {
    writeLine(data);
  });

  msg.addEventListener('keydown', (event) => {
    if (event.keyCode === CHAR_RETURN) {
      const s = name.value + ': ' + msg.value;
      msg.value = '';
      writeLine(s);
      socket.send(s);
    }
  });