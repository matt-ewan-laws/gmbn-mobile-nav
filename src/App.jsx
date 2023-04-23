import { useRef, useEffect } from "react";

import ChatMessage from "./components/ChatMessage";
import MicrophoneButton from "./components/MicrophoneButton";

function App() {
  const messagesRef = useRef(null);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, []);

  return (
    <div>
      <div className="flex-1 p:2 w-1/2 mx-auto sm:p-6 justify-between flex flex-col h-screen">
        <div
          id="messages"
          ref={messagesRef}
          className="flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch"
        >
          <ChatMessage message="Hello world" />
          <ChatMessage message="Hi there" isExternal />
        </div>

        <div className="suggestions mt-auto mb-2 text-white">
          <button className="px-4 py-2 mr-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition-all">
            Suggestion 1
          </button>

          <button className="px-4 py-2 bg-blue-600 rounded-lg hover:bg-blue-500 transition-all">
            Suggestion 2
          </button>
        </div>

        <div className="border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0">
          <div className="relative flex">
            <span className="absolute inset-y-0 flex items-center">
              <MicrophoneButton />
            </span>

            <input
              type="text"
              placeholder="Write your message!"
              className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-12 bg-gray-200 rounded-md py-3"
            />

            <div className="absolute right-0 items-center inset-y-0 hidden sm:flex">
              <button
                type="button"
                className="inline-flex items-center justify-center rounded-lg px-4 py-3 transition duration-500 ease-in-out text-white bg-blue-500 hover:bg-blue-400 focus:outline-none"
              >
                <span className="font-bold">Send</span>

                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                  className="h-6 w-6 ml-2 transform rotate-90"
                >
                  <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
