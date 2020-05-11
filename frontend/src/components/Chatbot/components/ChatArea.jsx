import React from 'react';
import { connect } from 'react-redux';
import UserMessage from './UserMessage';
import BotMessage from './BotMessage';

const ChatArea = (props) => {

  return (
    <div className="chat_area">
      {props.chat.conversation.map((quote, key) => {
        return quote.speaker === props.chat.username ?
          <UserMessage key={key} username={quote.speaker} question={quote.question} answer={quote.answer} /> :
          <BotMessage key={key} username={quote.speaker} question={quote.question} answer={quote.answer} />;
      })}
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    chat: state.chat,
  };
};

export default connect(mapStateToProps, null)(ChatArea);
