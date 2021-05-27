import React, { useEffect, useRef, useState } from 'react';
import './chat.css';
import io from "socket.io-client";
import TextField from "@material-ui/core/TextField"


const Chat = () => {
  const [state, setState] = useState({ message: "", name: "" })
  const [chat, setChat] = useState([])

  const socketRef = useRef()

  useEffect(
    () => {
      socketRef.current = io.connect("http://localhost:4000")
      socketRef.current.on("message", ({ name, message }) => {
        setChat([...chat, { name, message }])
      })
      return () => socketRef.current.disconnect()
    },
    [chat]
  )

  const onTextChange = (e) => {
    setState({ ...state, [e.target.name]: e.target.value })
  }

  const onMessageSubmit = (e) => {
    const { name, message } = state
    socketRef.current.emit("message", { name, message })
    e.preventDefault()
    setState({ message: "", name })
  }

  const renderChat = () => {
    return chat.map(({ name, message }, index) => (
      <div key={index}>
        <div>
          {name}: {message}
        </div>
      </div>
    ))
  }

  return (
    <div className="card">
      <div className="chatHeader">Live Chat</div>
      <div className="render-chat">
        {renderChat()}</div>
      <form onSubmit={onMessageSubmit}>
        <div className="newMessageHeader">What's on your mind?</div>
        <div>
          <TextField
            className="nameField"
            name="name"
            required
            onChange={(e) => onTextChange(e)}
            value={state.name}
            label="Name"
            fullWidth
            autoComplete='off'


          />

        </div>
        <div>
          <TextField
            className="messageField"
            name="message"
            onChange={(e) => onTextChange(e)}
            value={state.message}
            id="outlined-multiline-static"
            label="Message"
            autoComplete="off"
            required
            fullWidth
          />
        </div>
        <button>Send Message</button>
      </form>
    </div>
  )
}

export default Chat;
