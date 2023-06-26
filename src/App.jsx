import { useState } from "react";
import { Configuration, OpenAIApi } from "openai";

const configuration = new Configuration({
  apiKey: "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",
  headers: {
    "User-Agent": "MyApp/1.0" // Replace "MyApp/1.0" with an appropriate user agent string
  }
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
    }).then((res) => {
      msgs.push(res.data.choices[0].message);
      setChats(msgs);
      setIsTyping(false);
    })
    .catch((error) => {
      console.log(error);
    });

  }

  return (
    <div>
      <h1>KoolGPT</h1>
      <section>
        {chats && chats.length
          ? chats.map((chat, index) => (
              <p key={index} className={chat.role === "user" ? "user_msg" : ""}>
                <span>
                  <b>{chat.role.toUpperCase()}</b>
                </span>
                <span>:</span>
                <span>{chat.content}</span>
              </p>
            ))
          : ""}
      </section>
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
