import React from 'react';
import { connect } from 'react-redux';
import { setReply } from '../../../actions/chatActions';

const RespondButton = (props) => {

  const handleReply = () => {
    props.setReply(props.question);
  }

  return (
    <>
      <div className="respond_button" onClick={() => handleReply()}></div>
    </>
  );
};

const mapDispatchToProps = {
  setReply: setReply,
};

export default connect(null, mapDispatchToProps)(RespondButton);
