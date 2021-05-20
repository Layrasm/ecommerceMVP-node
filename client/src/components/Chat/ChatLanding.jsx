import React, { useState } from 'react';
import ChatBox from './Chat';

const ChatLanding = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  const BeforeJoin = () => (
    <div>
      <div>
        <h1>Join</h1>
        <form>
          <div><input placeholder="Name" className="joinInput" type="text" onChange={(event) => setName(event.target.value)} /></div>
          <div><input placeholder="Room" className="joinInput" type="text" onChange={(event) => setRoom(event.target.value)} /></div>
          <button> Sign in </button>
        </form>
      </div>
    </div>
  );

  const AfterJoin = () => (
    <div>
      <ChatBox />
    </div>

  )



  return (
    <div>
      <BeforeJoin />

    </div>
  )
}

export default ChatLanding;
