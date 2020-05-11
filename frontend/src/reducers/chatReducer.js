import { CHAT_REPLY, CHAT_UPDATE, CHAT_ONLINE, CHAT_USERNAME } from '../actions/types';

const initState = {
  conversation: [],
  reply: null,
  online: false,
  username: 'Guest'
}

const chatReducer = (state = initState, action) => {
  switch(action.type) {
    case CHAT_REPLY:
      state = { ...state, reply: action.payload };
      break;
    case CHAT_USERNAME:
      state = { ...state, username: action.payload };
      break;
    case CHAT_UPDATE:
      const conversation = state.conversation;
      conversation.push(action.payload);
      state = { ...state, conversation };
      break;
    case CHAT_ONLINE:
      state = { ...state, online: action.payload };
      break;
  }

  return state;
}

export default chatReducer;
