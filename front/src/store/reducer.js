import {
  ADD_MESSAGE, SET_MESSAGES, SET_CONNECTED_USER, TOGGLE_FORM,
} from '../actions/actions';

const initialState = {
  messages: [
    // { author: 'Super Chat', messages: 'Salut, comment vas-tu?' },
    // { author: 'Super Chat', messages: 'Est ce que tu as des croquettes ?' },
    // { author: 'Super Chat', messages: 'S\'il te plait 😚' },
  ],
  isOpen: false,
  connectedUser: false,

};

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SET_CONNECTED_USER:
      return {
        ...state,
        connectedUser: action.payload.connectedUser,
      };
    case SET_MESSAGES:
      return {
        ...state,
        messages: action.payload.messages,
      };
    case ADD_MESSAGE:
      return {
        ...state,
        messages: [
          ...state.messages,
          {
            author: state.author,
            messages: action.payload.messages,
          },
        ],
      };
    case TOGGLE_FORM:
      return {
        ...state,
        isOpen: !state.isOpen,
      };
    default:
      return state;
  }
};

export default reducer;
