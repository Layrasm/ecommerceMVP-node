import React from 'react';
import io from 'socket.io-client';

const Chat = ({ name }) => {
  return (
    <div>
      <h1>{name}</h1>
    </div>
  )
}

export default Chat;
