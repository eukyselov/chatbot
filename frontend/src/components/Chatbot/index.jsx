import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import ChatArea from './components/ChatArea';
import ChatForm from './components/ChatForm';
import { checkSocketConnection, updateConversation } from '../../actions/chatActions';
import './style.css';
import io from 'socket.io-client';

const ENDPOINT = 'http://127.0.0.1:3001';

const Chatbot = (props) => {

  const socket = io(ENDPOINT);

  useEffect(() => {

    //connect
    socket.on('connect', () => {
      props.checkSocketConnection(true);
    });

    //disconnect
    socket.on('disconnect', () => {
      props.checkSocketConnection(false);
    });

    //receive data
    socket.on('message', data => {
      props.updateConversation(data);
    });

  }, []);

  const handleAnswer = (data) => {
    socket.emit('message', data);
  };

  return (
    <div className="chatbot">
      <div className="chat_messages">
        <ChatArea />
      </div>
      <div className="chat_controls">
        <ChatForm submitAnswer={(data) => { handleAnswer(data) }} />
      </div>
    </div>
  );
};

const mapDispatchToProps = {
  checkSocketConnection,
  updateConversation,
};

export default connect(null, mapDispatchToProps)(Chatbot);
