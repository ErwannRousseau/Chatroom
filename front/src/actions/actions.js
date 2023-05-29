export const SET_CONNECTED_USER = 'SET_CONNECTED_USER';
export const setConnectedUser = (connectedUser) => ({
  type: SET_CONNECTED_USER,
  payload: {
    connectedUser: connectedUser,
  },
});

export const SET_MESSAGES = 'SET_MESSAGES';
export const setMessages = (messages) => ({
  type: SET_MESSAGES,
  payload: {
    messages: messages,
  },
});

export const ADD_MESSAGE = 'ADD_MESSAGE';
export const addMessage = (message) => ({
  type: ADD_MESSAGE, payload: { messages: message },
});

export const TOGGLE_FORM = 'TOGGLE_FORM';
export const toggleForm = () => ({
  type: TOGGLE_FORM,
});
