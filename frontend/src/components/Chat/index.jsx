import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { setUsername } from '../../actions/chatActions';
import { useQuery } from './hooks';
import './style.css';
import Chatbot from '../Chatbot';

const CONNECTION_STATUS = {
  ONLINE: 'Online',
  OFFLINE: 'Offline',
}

const Chat = (props) => {
  let query = useQuery();

  useEffect(() => {
    props.setUsername(query.get('username') || undefined);
  }, []);

  return (
    <div className="chat col-lg-8">
      <div className="chat-user">
        <img alt="logo" className="greeting_logo" src={'assets/img/rsz_botlogo.png'} />
        <h3 className="username">{props.chat.username} - {props.chat.online ? CONNECTION_STATUS.ONLINE : CONNECTION_STATUS.OFFLINE}</h3>
      </div>
      <Chatbot />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    chat: state.chat
  }
}

const mapDispatchToProps = {
  setUsername
}

export default connect(mapStateToProps, mapDispatchToProps)(Chat);
