import React from 'react';
import Quote from './Quote';
import RespondButton from './RespondButton';
import Speaker from './Speaker';

const BotMessage = ({ question, answer, username }) => {
  return (
    <div className="chat_message bot_message">
      <Speaker username={username} />
      {answer && <Quote question={question} />}
      <div>{answer || question}</div>
      <RespondButton question={question} />
    </div>
  );
};

export default BotMessage;
