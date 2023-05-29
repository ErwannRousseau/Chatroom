import { useState } from 'react';
import { /* useDispatch */ useSelector } from 'react-redux';
// import axios from 'axios';
// import { setMessages } from '../../actions/actions';
import socket from '../../socket';

function FormInput() {
  const [message, setMessage] = useState('');
  // const dispatch = useDispatch();
  const connectedUser = useSelector((state) => state.connectedUser);

  const handleSubmit = (event) => {
    event.preventDefault();
    // axios.post('http://localhost:3000/messages', {
    //   author: connectedUser.username,
    //   text: message,
    // })
    //   .then((res) => {
    //     dispatch(setMessages(res.data));
    //     setMessage('');
    //   })
    //   .catch(() => {
    //     alert('Erreur API');
    //   });

    try {
      socket.emit('new_message', {
        author: connectedUser.username,
        text: message,
      });
    }
    catch (err) {
      alert('Erreur API websockets');
    }

    setMessage('');
  };

  return (
    <div>
      {connectedUser ? (
        <form onSubmit={handleSubmit} className="bg-gray-300 p-4 flex">
          <input
            value={message}
            onChange={(event) => setMessage(event.target.value)}
            className="flex items-center h-10 w-full rounded px-3 text-sm"
            type="text"
            placeholder="Saisissez votre message"

          />
          <button type="submit" className="inline-flex items-center justify-center w-10 h-10 text-indigo-100 transition-colors duration-150 bg-blue-600 rounded-lg  hover:bg-blue-700">
            <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 12L3.269 3.126A59.768 59.768 0 0121.485 12 59.77 59.77 0 013.27 20.876L5.999 12zm0 0h7.5" />
            </svg>
          </button>

        </form>
      ) : (
        <p className="flex bg-gray-300 justify-center items-center h-10 w-full rounded px-3 text-sm">Connectez-vous pour envoyer un message !</p>
      )}

    </div>
  );
}

export default FormInput;
