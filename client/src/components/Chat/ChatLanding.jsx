import React, { useState } from 'react';
import Chat from './Chat';
import './chat.css';

const ChatLanding = () => {
  const [chatName, setChatName] = useState('');

  const [showChat, setChat] = useState(false);



  const BeforeJoin = () => (
    <>
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
    </ >
  );

  const AfterJoin = () => (
    <>
      <Chat name={chatName} />
    </>

  )



  return (
    <div className="chatOuter">
      <div className="chatInner">
        {!showChat ? <BeforeJoin /> : <AfterJoin />}
      </div>
    </div>
  )
}
export default ChatLanding;
