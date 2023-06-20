import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  
  apiKey: "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",
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

    setChats([...chats, { role: "user", content: message }]);
    setMessage("");

    await openai.createChatCompletion({
      model: "gpt-3.5-turbo",
      messages: [
        {
          role: "system",
          content: "You are a EbereGPT. You can help with graphic design tasks",
        },
        ...chats,
      ],
    }).then((res) => {
      msgs.push(res.data.choices[0].message);
      setChats(msgs);
      setIsTyping(false);
    })
    .catch((error) => {
      console.log(error);
    });
  };

  return (
    <div>
      <h1>AI Chat</h1>
      <div className={isTyping ? "" : "hide"}>
        <p>
          <i>{isTyping ? "Typing" : ""}</i>
        </p>
      </div>
      <form action="" onSubmit={(e) => chat(e, message)}>
        <input
          type="text"
          name="message"
          value={message}
          placeholder="Type a message here and hit Enter..."
          onChange={(e) => setMessage(e.target.value)}
        />
      </form>
    </div>
  );
}
export default App;
