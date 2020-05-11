import { CHAT_REPLY, CHAT_UPDATE, CHAT_ONLINE, CHAT_USERNAME } from './types';

export const setUsername = (username = 'Guest') => {
  return {
    type: CHAT_USERNAME,
    payload: username
  };
};

export const setReply = (question = null) => {
  return {
    type: CHAT_REPLY,
    payload: question
  };
};

export const updateConversation = (message) => {
  return {
    type: CHAT_UPDATE,
    payload: message
  };
};

export const checkSocketConnection = (online = false) => {
  return {
    type: CHAT_ONLINE,
    payload: online
  };
};
