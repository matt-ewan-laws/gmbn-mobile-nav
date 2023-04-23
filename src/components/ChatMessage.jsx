const ChatMessage = ({ message, isExternal = false }) => {
  return (
    <div className="chat-message">
      <div className={`flex items-end ${isExternal && "justify-end"}`}>
        <div
          className={`flex flex-col space-y-2 text-base max-w-xs mx-2 ${
            isExternal ? "order-1" : "order-2"
          } items-start`}
        >
          <div>
            <span
              className={`px-4 py-2 rounded-lg inline-block ${
                isExternal
                  ? "bg-blue-600 text-white rounded-br-none "
                  : "bg-gray-200 text-gray-600 rounded-bl-none"
              }`}
            >
              {message}
            </span>
          </div>
        </div>
        <img
          src="https://images.unsplash.com/photo-1549078642-b2ba4bda0cdb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=144&h=144"
          alt="My profile"
          className="w-6 h-6 rounded-full order-1"
        />
      </div>
    </div>
  );
};

export default ChatMessage;
