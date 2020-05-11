import React, { useState } from 'react';
import { connect } from 'react-redux';
import { setReply } from '../../../actions/chatActions';
import { Form, Input, Button } from 'reactstrap';

const ChatForm = (props) => {

  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleCancelReply = () => {
    props.setReply();
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (message !== '') {

      const data = { speaker: props.chat.username };

      if (props.chat.reply) {
        data.question = props.chat.reply;
        data.answer = message;
      }
      else {
        data.question = message;
      }

      props.submitAnswer(data);
      props.setReply();
      setMessage('');
    }
  };

  return (
    <>
      <Form className="chat_form col-lg-12" onSubmit={(e) => { handleSubmit(e);}}>
        <div className="row">
          {props.chat.reply && (
            <div className="reply_question">
              <div className="d-inline">{props.chat.reply}</div>
              <div className="d-inline close" onClick={() => handleCancelReply()}></div>
            </div>
          )}

          <div className="d-inline col-10">
            <Input
              type="text" value={message} placeholder="Type the text..."
              onChange={e => { handleChange(e); }}
            />
          </div>
          <div className="d-inline col-2">
            <Button type="submit" className="send"></Button>
          </div>
        </div>
      </Form>
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    chat: state.chat,
  };
};

const mapReduceToProps = {
  setReply,
};

export default connect(mapStateToProps, mapReduceToProps)(ChatForm);
