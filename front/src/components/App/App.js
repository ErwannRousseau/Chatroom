import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import axios from 'axios';
import { setMessages } from '../../actions/actions';
import FormInput from '../FormInput/FormInput';
import Messages from '../Messages/Messages';
import Settings from '../Settings/Settings';
import './App.scss';
import socket from '../../socket';

function App() {
  const isOpen = useSelector((state) => state.isOpen);
  const dispatch = useDispatch();

  // J'appelle la route "/messages" de mon API pour récupérer un JSON
  // contenant la liste des messages
  const fetchMessages = () => {
    axios.get('http://localhost:3000/messages')
      .then((res) => {
        dispatch(setMessages(res.data));
      })
      .catch(() => {
        alert('Erreur API');
      });
  };

  // Au premier rendu de mon application
  useEffect(() => {
    fetchMessages();

    socket.on('incoming_message', (messages) => {
      dispatch(setMessages(messages));
    });
  }, []);

  return (
    <div className="app flex flex-col items-center justify-center w-screen min-h-screen bg-gray-100 text-gray-800 p-10">
      <Settings />
      <div className={`flex flex-col flex-grow w-full max-w-xl bg-white shadow-xl rounded-lg overflow-hidden ${isOpen ? 'hidden' : ''}`}>
        <Messages />
        <FormInput />
      </div>
    </div>
  );
}

export default App;
