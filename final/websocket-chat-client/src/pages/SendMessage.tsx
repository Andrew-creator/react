import io from 'socket.io-client';
import { useEffect, useState } from 'react';

const socket = io("http://localhost:4000", {
  query: {
    roomId: 17,
    userName: "Bob"
  }
});

//socket.connect()

socket.on('connection', () => {
    console.log('connected')
});

export function SendMessage() {
    const [messages, setMessages] = useState([]);

  useEffect(() => {
    socket.on('connection', () => {
      console.log('connected')
    });

    socket.on('message', (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const message = event.target.elements.message.value;
    socket.emit('message', message);
    event.target.elements.message.value = '';
  };

  return (
    <div>
      <ul>
        {messages.map((message, index) => (
          <li key={index}>{message}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <input type="text" name="message" />
        <button>Отправить</button>
      </form>
    </div>
  );
}