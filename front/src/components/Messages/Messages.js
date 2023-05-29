import { useSelector } from 'react-redux';
import uuid from 'react-uuid';
import { useEffect, useRef } from 'react';
import Message from './Message/Message';

function Messages() {
  const messages = useSelector((state) => state.messages);
  const connectedUser = useSelector((state) => state.connectedUser);

  const messagesElementRef = useRef();

  const scrollToBottom = () => {
    messagesElementRef.current.scrollTop = messagesElementRef.current.scrollHeight;
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex flex-col flex-grow h-0 p-4 overflow-auto" ref={messagesElementRef}>
      {messages.map((message) => (
        <Message
          key={uuid()}
          message={message.text}
          connectedUser={connectedUser.username}
          author={message.author}
        />
      ))}
    </div>
  );
}

export default Messages;
