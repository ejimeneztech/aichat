import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";
import ChatHistory from "./components/ChatHistory";
import TypingIndicator from "./components/TypingIndicator";
import ChatInput from "./components/ChatInput";
import Navbar from "./components/Navbar";


const configuration = new Configuration({
  apiKey: "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",
  headers: {
    "User-Agent": "MyApp/1.0", // Replace "MyApp/1.0" with an appropriate user agent string
  },
});

const openai = new OpenAIApi(configuration);

function App() {
  const [message, setMessage] = useState("");
  const [chats, setChats] = useState([]);
  const [isTyping, setIsTyping] = useState(false);

  const chat = async (e, message) => {
    e.preventDefault();

    if (!message) return;
    setIsTyping(true);

    let msgs = chats;
    msgs.push({ role: "user", content: message });
    setChats(msgs);

    setMessage("");

    await openai
      .createChatCompletion({
        model: "gpt-3.5-turbo",
        messages: [
          {
            role: "system",
            content:
              "You are a CoolGPT. You assist users in a cool way and cool phrases.",
          },
          ...chats,
        ],
      })
      .then((res) => {
        msgs.push(res.data.choices[0].message);
        setChats(msgs);
        setIsTyping(false);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="main">
      <Navbar/>
      <ChatHistory chats={chats} />
      <TypingIndicator condition={isTyping} />
      <ChatInput message={message} setMessage={setMessage} chat={chat} />
    </div>
  );
}

export default App;
