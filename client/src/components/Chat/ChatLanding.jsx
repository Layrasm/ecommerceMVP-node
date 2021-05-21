import React, { useState } from 'react';
import Chat from './Chat';
import './chat.css';

const ChatLanding = () => {
  const [chatName, setChatName] = useState('');

  const [showChat, setChat] = useState(false);



  const BeforeJoin = () => (
    <div>
      <h1>Join</h1>
      <form>
        <div>
          <input
            placeholder="Enter Name"
            type="text"
            value={chatName}
            onChange={(event) => setChatName(event.target.value)}
            autoFocus
            required
          />
        </div>

        <button type="submit" onClick={() => setChat(true)}> Sign in </button>
      </form>
    </div >
  );

  const AfterJoin = () => (
    <div>
      <Chat name={chatName} />
    </div>

  )



  return (
    <div className="chatMain">
      {!showChat ? <BeforeJoin /> : <AfterJoin />}

    </div>
  )
}
export default ChatLanding;
