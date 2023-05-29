function Message({ message, connectedUser, author }) {
  return connectedUser === author ? (
    <div className="flex w-full mt-4 space-x-3 max-w-xs ml-auto justify-end items-center ">
      <div className="flex flex-col">
        <span className="text-xs self-end mb-1">{author}</span>
        <div className="bg-blue-600 text-white p-3 rounded-l-lg rounded-br-lg">
          <p className="text-sm">{message}</p>
        </div>
      </div>
      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300" />
    </div>
  ) : (
    <div className="flex w-full mt-2 space-x-3 max-w-xs items-center">
      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-gray-300 flex justify-center items-center mt-2" />
      <div>
        <span className="text-xs">{author}</span>
        <div className="bg-gray-300 p-3 rounded-r-lg rounded-bl-lg">
          <p className="text-sm">{message}</p>
        </div>
      </div>
    </div>
  );
}

export default Message;
